const express = require('express')
const products = require('./data/products')
const app = express();



app.get('/', (req,res) => {
    res.send('app is running....')
})

app.get('/api/product', (req,res) => {
    res.json(products)
})

app.get('/api/product/:id', (req,res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('Server is listening at Port 5000'))