const request = require('supertest');
const app = require('../app'); // Import the app

describe('GET /', () => {
  it("should return 'Hello, World this is a practice for CICD!'", async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe("Hello, World this is a practice for CICD!");
    expect(response.status).toBe(200);
  });
});
