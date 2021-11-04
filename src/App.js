
//Configuración APP EXPRESS
const express = require('express');
const morgan = require('morgan');
const pkg = require('../package.json');

const app = express();

app.set('pkg', pkg)
app.use(morgan('dev'));
app.get('/', (req,res)=>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        destription: app.get('pkg').destription,
        version: app.get('pkg').version
    })
})
exports.modules = app;

