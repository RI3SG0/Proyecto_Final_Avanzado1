const {response, request} = require('express');

const viewProducts = async (req = request, res = response) => {
    res.json({
        'msg':'exito'
    })
};

const ProductsGet = (req = request, res = response) => {

    //Ejemplo de desestructuración de variables por parte del query
    const { q, producto = 'No name', apikey, page = 1, limit } = req.query;

    //ejemplo de respuesta tipo json
    res.json({
        msg: 'get API - controlador',
        q,
        describe,
        apikey,
        page, 
        limit
    });
}

const ProductsPost = (req, res = response) => {

    //ejemplo de desestructuración de datos del body
    const { descripcion, codigo } = req.body;

    //ejemplo de respuesta del body
    res.status(201).json({
        msg: 'post API - productsPost',
        descripcion, 
        codigo,
    });
}

const productsPut = (req, res = response) => {

    //ejemplo de desestructuracion de datos que viajan por los params
    const { ean } = req.params;

    //ejemplo de respuesta del body
    res.status(201).json({
        msg: 'put API - productsPut',
        ean
    });
}

const productsPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - productsPatch'
    });
}

const productsDelete = (req, res = response) => {
    res.status(410).json({
        msg: 'delete API - productsDelete'
    });
}


module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsPatch,
    productsDelete,
    viewProducts,
}