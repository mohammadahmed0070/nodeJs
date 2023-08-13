import express from "express";
import studentRouter from "./router/student.js";

const app=express();

app.get("/" , (req,res)=>{
    return res.json({message:"Hello World!"});
})

app.use(studentRouter)

app.listen(3311,()=>{
    console.log("listening on 3311");
})