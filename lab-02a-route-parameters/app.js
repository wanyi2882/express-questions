const express = require('express');

let app = express();

app.get('/header/:title', function(req,res){
    let title = req.params.title;
    res.send('<h1>' + title + '</h1>')
})

app.get('/add/:num1/:num2', function(req,res){
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let sum = parseInt(num1) + parseInt(num2);
    let stringSum = sum.toString()
    res.send(stringSum)
})

app.get('/shorten/:text', function(req,res){
    let text = req.params.text;
    let textLength = text.length;
    if (textLength < 10){
        res.send(text)
    } else{
        let shortenText = text.slice(0, 7);
        res.send(shortenText + '...')
    }
})

module.exports = app;