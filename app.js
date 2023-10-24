const  express = require("express") ;
const app = express () ;
const path = require ("path") ;

app.use(express.static("public"));

app.get("/",(req,res)=>{
    return res.sendFile(path.join(__dirname,"/views/index.html")) ;
})
app.get("/music",(req,res)=>{
    return res.sendFile(path.join(__dirname,"/views/music.html")) ;
})

app.get("/contact",(req,res)=>{
    return res.sendFile(path.join(__dirname,"/views/contact.html")) ;
})

app.get("/about",(req,res)=>{
    return res.sendFile(path.join(__dirname,"/views/about.html")) ;
})



app.listen(3000,()=> {
    console.log("Servidor ejecutandose en el puerto 3000")
})