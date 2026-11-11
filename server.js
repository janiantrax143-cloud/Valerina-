import "dotenv/config";
import express from "express";
import OpenAI from "openai";
const app=express();
app.use(express.json({limit:"2mb"}));
app.use(express.static("public"));
const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});
app.post("/api/chat",async(req,res)=>{
 try{
  const message=String(req.body?.message||"").trim();
  if(!message)return res.status(400).json({error:"Escribe un mensaje."});
  const r=await client.responses.create({model:"gpt-5.5",instructions:"Eres Valerina, una asistente creativa, amable y útil. Responde en español.",input:message});
  res.json({reply:r.output_text||"No pude generar una respuesta."});
 }catch(e){console.error(e);res.status(500).json({error:"No se pudo conectar con el chat. Revisa tu clave API y el acceso al modelo."});}
});
app.post("/api/images",async(req,res)=>{
 try{
  const prompt=String(req.body?.prompt||"").trim();
  if(!prompt)return res.status(400).json({error:"Describe la imagen que quieres crear."});
  const r=await client.images.generate({model:"gpt-image-2.5-flare",prompt,size:"1024x1024",quality:"medium",n:1});
  const b64=r.data?.[0]?.b64_json;
  if(!b64)return res.status(502).json({error:"La API no devolvió una imagen."});
  res.json({image:`data:image/png;base64,${b64}`});
 }catch(e){console.error(e);res.status(500).json({error:"No se pudo crear la imagen. Comprueba la clave, el saldo y el acceso al modelo."});}
});
const port=process.env.PORT||3000;
app.listen(port,"0.0.0.0",()=>console.log(`Valerina AI lista en el puerto ${port}`));
