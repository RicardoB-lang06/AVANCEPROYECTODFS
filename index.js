const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

let ingresos = [];

app.get('/ingresos', (req,res) => {
    res.json(ingresos);
})

app.post('/ingresos', (req,res) => {
    const ingreso = req.body;
    if (!ingreso.monto_original || !ingreso.moneda) {
        return res.status(400).send("Falta monto original o moneda).");
    }

    if (ingreso.moneda !== 'MXN' && !ingreso.tipo_de_cambio_oficial) {
        return res.status(400).send("Se requiere tipo de cambiooficial para moneda extranjera.");
    }

    if (ingreso.moneda == "MXN") {
        ingreso.monto_mxn = ingreso.monto_original;
    } else {
        ingreso.monto_mxn = ingreso.monto_original * ingreso.tipo_de_cambio_oficial;
    }
    ingresos.push(ingreso);
    res.status(201).send("Ingreso registrado")
})

app.put('/ingresos/:id', (req,res) => {
    const id = req.params.id;
    const ingreso = req.body;
    if(id >= 0 && id < ingresos.length){
        if(ingreso.moneda === 'MXN'){
            ingreso.monto_mxn = ingreso.monto_original;
        } else {
            ingreso.monto_mxn = ingreso.monto_original * ingreso.tipo_de_cambio_oficial;
        }
        ingresos[id] = {
            ...ingresos[id],
            ...ingreso
        };

        res.status(200).send("Actualización realizada.")
    }else{
        res.status(404).send("No existe la id")
    }
});

app.delete('/ingresos/:id', (req, res) => {
    const id = req.params.id;
    if(id >= 0 && id < ingresos.length){
        ingresos.splice(id,1);
        res.status(204).send("Ingreso eliminado.");
    }else{
        res.status(404).send("ID no encontrada")
    }
})

app.listen(PORT,() => {
    console.log(`Servidor activo en http://localhost:${PORT}`)
});