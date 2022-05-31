const { describe, it } = require('mocha');
const request = require('supertest');
const assert = require('assert');
const app = require('./api');

describe('Api Suit Test', () => {
  describe('GET /contact', () => {
    it('should return contact us page and HTTP Status 200', async() => {
      const response = await request(app)
        .get('/contact')
        .expect(200);
      assert.equal(response.text, 'contact us page');
    });
  });

  describe('GET /hello', () => {
    it('should request an inexistent route /hi and redirect to /hello', async() => {
      const response = await request(app)
        .get('/hi')
        .expect(200);
      assert.equal(response.text, 'Hello World');
    });
  });

  describe('POST /login', () => {
    it('should login successfully ib the login route and return HTTP Status 200', async() => {
      const response = await request(app)
        .post('/login')
        .send({
          username: 'CesarMenegatti',
          password: '12345678',
          })
        .expect(200);
      assert.deepStrictEqual(response.text, 'Loggin has succeded');
    });

    it('should unauthorize a request when is using wrong credentials and return HTTP Status 401', async() => {
      const response = await request(app)
        .post('/login')
        .send({
          username: 'CesarOliveira',
          password: '87654321',
          })
        .expect(401);

      assert.ok(response.unauthorized);
      assert.deepStrictEqual(response.text, 'Loggin failed');
    });
  });
});

