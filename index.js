const express=require("express");
const app=express();
app.listen(3000,function(request,response){
   console.log("our page on localhost:3000")
})

const workers=[
    {"id": 1, "name":"Rahid","age":21},
    {"id": 2, "name":"Mahmud","age":31},
    {"id": 3, "name":"Hesen","age":41}
]

app.get("/",function(req,res){
    
res.status(200).send(workers)
})

