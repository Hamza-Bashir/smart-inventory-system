const request = require('supertest');
const app = require('../app'); // Make sure app.js exports express app



// -------------- user register api test ...............

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

  it("should fail if email is missing", async () => {
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      name:"Hamza",
      password:"12345"
    })

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBe("email is required")
  })

  it("should fail if email is invalid", async () => {
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      name:"Hamza",
      email:"hmza",
      password:"12345"
    })

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBe("email must be valid email")
  })

  it("should fail if password is missing",async ()=>{
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      name:"Hamza",
      email:"hmza@gmail.com"
    })

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBe("password is required")
  })
});


// -------------- user login api test ...............

describe("POST /api/v1/login-user", () => {
  it("should login user successfully", async () => {
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      email:"maryam@gmail.com",
      password:"12345"
    })

    expect(res.statusCode).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.message).toBe('Login Successfully')
  })

  it("should fail if email is missing", async ()=>{
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      password:"123"
    })

    expect(res.status).toBe(400)
    expect(res.body.error).toBe("email is required")
  })

  it("should fail if email is invalid", async ()=>{
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      email:"maryam",
      password:"12345"
    })

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBe("email must be valid email")
  })

  it("should fail if password is missing", async () => {
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      email:"maryam@gmail.com"
    })

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBe("password is required")
  })

  it("should fail if password cannot string", async () => {
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      email:"maryam@gmail.com",
      password:12345
    })

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBe("password must be string")
  })

})
