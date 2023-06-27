let express = require("express");
let path = require('path');
let app = express();
let router = require("./router");
app.use(router)

app.listen(8080, () => console.log("listening 8080"))
















// app.get("/notes" ,(req,res)=>{
//      res.sendFile(`${__dirname}/index.html`)
// })
// app.post("/" ,(req,res)=>{
//     res.send("This is post call")
// })
// app.patch("/" ,(req,res)=>{
//     res.send("This is patch call")
// })
// app.delete("/" ,(req,res)=>{
//     res.send("This is delete call")
// })
