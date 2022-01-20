const express = require('express');
const path = require('path');

const app = express();

app.listen(3030, ()=> console.log('exitoso'));


//app.get('/', (req, res)=> res.send("Bienvenidos al sitio"));

app.get('/', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/index.html')
    res.sendFile(htmlpath)
})

app.get('/babbage', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/babbage.html')
    res.sendFile(htmlpath)
})

app.get('/berners-lee', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/berners-lee.html')
    res.sendFile(htmlpath)
})

app.get('/clarke', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/clarke.html')
    res.sendFile(htmlpath)
})

app.get('/hamilton', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/hamilton.html')
    res.sendFile(htmlpath)
})

app.get('/hopper', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/hopper.html')
    res.sendFile(htmlpath)
})

app.get('/lovelace', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/lovelace.html')
    res.sendFile(htmlpath)
})

app.get('/turing', (req,res)=> {
    let htmlpath = path.resolve(__dirname, './views/turing.html')
    res.sendFile(htmlpath)
})

app.use(express.static('public'));
