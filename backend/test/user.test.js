const request = require('supertest');
const app = require('../app'); // Make sure app.js exports express app

describe('POST /api/v1/register-user', () => {
  it('should register a new user successfully', async () => {
    const res = await request(app)
      .post('/api/v1/register-user')
      .send({
        name: 'Test User',
        email: `test${Date.now()}@example.com`, 
        password: 'Test@1234'
      });

    
    expect(res.statusCode).toBe(200);

    
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe("Registration successful");

    
  });

  it("should fail if name is missing", async ()=>{
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
        email: `test${Date.now()}@example.com`, 
        password: 'Test@1234'
    })
    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBe("name is required")
  })
});
