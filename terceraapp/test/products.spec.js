const request = require('supertest');
const Server = require('../models/server');
const server = new Server();

const token = "23456"
const datosprueba = {
    Producto:"tv ", 
    Marca:"Samsung"
}
const productsId = 3;

describe('GET /api/products', () => {
    test('respuesta codigo 200', async () => {
        const response = await request(server.app).get('/api/products').send();
        expect(response.statusCode).toBe(200);
        // expect(response.headers['Content-Type']).toEqual(
        //     expect.stringContaining("json")
        // );
    });

    // test('respuesta json', async () => {
    //     const response = await request(server.app).get('/api/users').send();
    //     // expect(response.statusCode).toBe(200);
    //     expect(response.headers['Content-Type']).toEqual(
    //         expect.stringContaining("json")
    //     );
    // });
});

describe("post /api/products", () => {

    test("Crear producto", async () => {
        return request(server.app)
        .post('/api/products')
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            datosprueba.descripcion=body.descripcion;
            
        })
    });

    test("Se puede crear producto", async () => {
        return request(server.app)
        .post('/api/products')
        .send(datosprueba)
        .expect(201)
    });
})


describe("put /api/products/:ean", () => {

    test("Actualizacion producto", async () => {
        return request(server.app)
        .put(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .send(datosprueba)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(({body})=>{
            console.log(body.id)
        })
    })
})

describe("Delete /api/products/:ean", () => {

    test("Eliminar producto", async () => {
        return request(server.app)
        .delete(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})


describe("Delete /api/products/:ean", () => {

    test("Descripcion producto", async () => {
        return request(server.app)
        .delete(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})


describe("Delete /api/products/:ean", () => {

    test("categoria producto", async () => {
        return request(server.app)
        .delete(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})


describe("Delete /api/products/:ean", () => {

    test("Precio producto", async () => {
        return request(server.app)
        .delete(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})


describe("Delete /api/products/:ean", () => {

    test("Marca producto", async () => {
        return request(server.app)
        .delete(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})


describe("Delete /api/products/:ean", () => {

    test("Garantia producto", async () => {
        return request(server.app)
        .delete(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})

describe("Delete /api/products/:ean", () => {

    test("Color producto", async () => {
        return request(server.app)
        .delete(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})

describe("Delete /api/products/:ean", () => {

    test("Caducidad producto", async () => {
        return request(server.app)
        .delete(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})

describe("Delete /api/products/:ean", () => {

    test("Peso producto", async () => {
        return request(server.app)
        .delete(`/api/products/${userId}`)
        .set('Authorization', 'Bearer ' +token)
        .expect(410)
    })
})