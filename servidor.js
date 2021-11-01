const express = require('express');
const mongoose = require('mongoose');
const AspiranteSchema = require("./modelos/Aspirante.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Conexión a la base de datos
mongoose.connect("mongodb+srv://Prog_web:andrea158@clusterproweb.7u558.mongodb.net/OfertaLaboralBD?retryWrites=true&w=majority")

//Operaciones CRUD
router.get('/', (req, res) =>{
    res.send("El inicio de mi API");
})

router.get('/aspirante', (req, res) =>{
    AspiranteSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo los aspirantes");
        }else{
            res.send(datos);
        }        
    })
})

router.post('/aspirante', (req, res) =>{
    let nuevoAspirante = new AspiranteSchema({
        idAspirante: req.body.id,
        tipoDocumento: req.body.tipoDoc,
        documentoIdentificacion: req.body.documento,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion,
        correoElectronico: req.body.email,
        telefonoFijo: req.body.telefonoFijo,
        telefonoCelular: req.body.celular,
        sitioWeb: req.body.sitioWeb,
        descripcion: req.body.descripcion
    });

    nuevoAspirante.save(function (err, datos){
        if(err){
            console.log(err);        
        }
        res.send("Aspirante almacenado correctamente")
    })
});

app.use(router);
app.listen(3000, () => {
    console.log("Servidor corriendo por el puerto 3000")
});