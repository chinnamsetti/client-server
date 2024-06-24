const express=require("express");
const cors=require("cors");
 
let app=express();
app.use(cors());

app.get("/animals",(req,res)=>{

    let animals=["Lion","Tiger","Elephant","Cheeta"];
    res.json(animals);
});


app.listen(1405,()=>{
    console.log(`Listening to port 1405`);
});