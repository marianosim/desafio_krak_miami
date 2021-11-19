const express = require("express");
const app = express();
const routesMain = require("./routers/main")


 
app.use(express.static('public'));




app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/",routesMain);

app.listen(process.env.PORT || 3000,()=>{console.log("server iniciado")});
