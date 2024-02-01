const express =  require("express");
const puerto = 3001;
// Invocar express
const app = express();

const bodyParser = require("body-parser");

// Tipo de objeto
// int : id
// marca: String
// procesador: String
// memoria: String
// disco: String

// Instanciar 
// () --> todas  las peticiones
app.use(bodyParser.json());


// MIDDLEWARE
// Se utiliza con app.use
app.use("/laptos", (req, res, next)=> {
    console.log("Ingresa a funcion de Middleware");
    console.log("HEaders: ", req.headers);
    console.log("Body: ", req.body);
    next();
});


// GET
app.get("/laptos/:id", (request, response) => {
    const laptos = [
        {id:1, marca : "Lenovo", procesador: "Intel core i5", memoria:"16 GB", disco: "1 TB" },
        {id:2, marca : "HP", procesador: "Intel core i7", memoria:"8 GB", disco: "1 TB" },
        {id:3, marca : "Lenovo", procesador: "Intel core i5", memoria:"12 GB", disco: "1 TB" },
        {id:4, marca : "ACER", procesador: "Intel core i9", memoria:"16 GB", disco: "1 TB" },
        {id:5, marca : "ThinkPard", procesador: "Intel core i7", memoria:"4 GB", disco: "1 TB" },
    ];

    const id = request.params.id;
    const laptop = laptos.find(laptop => laptop.id == id);

    if (laptop) {
        const {id, ...laptopWithoutId} = laptop; 
        console.log("Ingresa a GET")
        response.send(laptopWithoutId); 
    } else {
        response.status(404).send({message: 'Laptop no encontrado'});
    }
});

app.get("/laptos", (request, response) =>{
    const laptos = [
        {id:1, marca : "Lenovo", procesador: "Intel core i5", memoria:"16 GB", disco: "1 TB" },
        {id:2, marca : "HP", procesador: "Intel core i7", memoria:"8 GB", disco: "1 TB" },
        {id:3, marca : "Lenovo", procesador: "Intel core i5", memoria:"12 GB", disco: "1 TB" },
        {id:4, marca : "ACER", procesador: "Intel core i9", memoria:"16 GB", disco: "1 TB" },
        {id:5, marca : "ThinkPard", procesador: "Intel core i7", memoria:"4 GB", disco: "1 TB" },
    ];
    console.log("Ingresa a GET")
    response.send(laptos)
});



//POST 
app.post("/laptos", (req, resp) => {
    req.body.id = 6;
    resp.send(req.body);
});


// PUT
app.put("/laptos/:idParam", (req, res) => {
    const id = req.params.idParam;
    console.log("ID: ", id);
    res.send(req.body);
})


// DELETE
app.delete("/laptos/:id", (req, res) => {
    const id = req.params.id;
    console.log("ID D:", id );
    res.send({id:id});
});



// Levenyar un servidor web
app.listen(puerto,()=>{
    console.log("Servidor listo en el puerto " + puerto);
}); 