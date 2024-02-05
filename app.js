const express = require('express');
const ProductManager = require('./productManager');

const app = express();


const productManager = new ProductManager();


app.get('/products', async (req, res) => {
  const limit = req.query.limit; 
  const products = await productManager.getProducts(limit);
  res.json(products); 
});


app.get('/products/:pid', async (req, res) => {
  const pid = req.params.pid; 
  const product = await productManager.getProductById(pid); 
  res.json(product);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
