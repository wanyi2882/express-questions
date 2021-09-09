const express = require('express');

let app = express();

const hbs = require('hbs')

app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', function(req, res){
    res.render('index.hbs');
})

app.get('/about-us', function(req, res){
    res.render('about-us.hbs')
})

app.get('/multiply/:left/:right', function(req, res){
    let left = req.params.left;
    let right = req.params.right;
    let result = parseInt(left) * parseInt(right)
    res.render('results.hbs',{
        'left': left,
        'right': right,
        'result': result
    })
})

app.get('/gallery', function(req, res){
    res.render('gallery.hbs')
})

// this is so that we can test
module.exports = app;