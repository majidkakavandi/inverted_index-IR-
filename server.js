const express=require("express");
const app=express();
const tokenizer=require("./src/tokenizer");

app.get('/',(req,res)=>{
    tokenizer();
});

app.listen(3030,()=>{
    console.log("server is running on port 3030");
});
