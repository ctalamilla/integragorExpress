const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();

app.listen(3030, ()=> console.log('exitoso'));


app.get('/', (req, res)=> res.send("Bienvenidos al sitio"));

testFolder = './views'

const vistas = fs.readdirSync(testFolder)
console.log(vistas)


function cargarViews (listaVistas){
    listaVistas.map(archivo=> {
        let relPath = testFolder + '/' + archivo
        let URL_ARCHIVO = path.resolve(__dirname, relPath)
        //console.log(URL_ARCHIVO)
        let nombreVista = '/'+archivo.split(".")[0]
        console.log(nombreVista)
        app.get(nombreVista, (req,res)=> {
            let htmlpath = path.resolve(URL_ARCHIVO)
            res.sendFile(htmlpath)
        })
    })}

cargarViews(vistas)

app.use(express.static('public'));
