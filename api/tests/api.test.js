const request = require('supertest');
const app = require('../index');

describe('GET /products', () => {
    it('should return a list of products', async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});