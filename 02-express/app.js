const express = require('express')
const app = express()


app.use(( req, res, next )=>{
    console.log('First middleware');
    
    next()
});

app.use(( req, res, next )=>{
    console.log('Seconde middleware');
    next()

});

app.use(( req, res, next )=>{
    res.status(201);
    next()

});

app.use(( req, res, next )=>{
    res.json({ reponse: 'Hello World'});

});



module.exports = app