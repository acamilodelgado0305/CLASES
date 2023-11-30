//creamos un constante que me realiza el llamado a la libreria express
const express = require('express');
// contante que me permite realizar operaciones o los proecedimientos de express
const app = express();
// creamos puerto que le indicamos que se realiza un proceso de puerto en el 7000;
const puerto= process.env.PORT || 9000;


//ruta
app.get("/", (req, res)=>{
    res.send("Bienvenido a mi proyecto clases");
});

// le digo a la aplicacion que la aplicacion se ejecutara en el puerto 7000
app.listen(puerto, ()=> console.log("El servidor esta escuchando en el puerto", puerto));