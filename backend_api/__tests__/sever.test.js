const request = require('supertest');
const app = require('../server'); // Ensure this is correctly pointing to your server file
const http = require('http');

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(() => {
        done();
    });
});

afterAll((done) => {
    server.close(done);
});

describe('Product API', () => {
    it('should get a list of products', async () => {
        const response = await request(server).get('/products');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});

