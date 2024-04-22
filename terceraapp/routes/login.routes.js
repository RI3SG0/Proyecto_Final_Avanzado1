const  { Router } = require('express');

const { viewproducts, ProductsPost, ProductosPut, ProductosDelete } = require('../controllers/users.controller');

const routerproducts = Router();

routerProducts.get('', viewProducts);
routerProducts.post('', ProductsPost);
routerProducts.put('/:ean', ProductsPut);
routerProducts.delete('/:ean', ProductsDelete);

module.exports = routerProducts;