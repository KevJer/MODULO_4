const express = require("express");
// Invocar express
const app = express();
const puerto = 3001;
// Importacion de Body-Parser
const bodyParser = require("body-parser");

// Objeto contacto: id, nombre, apellido, celular 


// Instanciar 
// () --> todas  las peticiones
app.use(bodyParser.json());



// MIDDLEWARE
// Se utiliza con app.use
app.use("/contactos", (req, res, next)=> {
    console.log("Ingresa a funcion de Middleware");
    console.log("HEaders: ", req.headers);
    console.log("Body: ", req.body);
    next();
});


// Responde cuando se accede a 
app.get("/contactos", (request, response) =>{
    const contactos = [
        {id:1, nombre : "Wilson", apellido: "Guayanay", celular:"0993925118" },
        {id:2, nombre : "Giss", apellido: "Muzo", celular:"0987456321" },
        {id:3, nombre : "MAria", apellido: "Jose", celular:"098585742" },
    ];
    console.log("Ingresa a GET")
    response.send(contactos)
});


//POST 
app.post("/contactos", (req, resp) => {
    req.body.id = 99;
    resp.send(req.body);
})

// PUT
app.put("/contactos/:idParam", (req, res) => {
    const id = req.params.idParam;
    console.log("ID: ", id);
    res.send(req.body);
})

// DELETE
app.delete("/contactos/:id", (req, res) => {
    const id = req.params.id;
    console.log("ID D:", id );
    res.send({id:id});
})

// Levenyar un servidor web
app.listen(puerto,()=>{
    console.log("Servidor listo en el puerto " + puerto);
}); 