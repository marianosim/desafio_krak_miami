const express = require("express");
const app = express();
const routesMain = require("./routers/main")


 
app.use(express.static('public'));


app.listen(process.env.PORT || 3000,function()
{console.log("Servidor corriendo en el puerto 3000")});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/",routesMain);


