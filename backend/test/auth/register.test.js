const request = require("supertest");
const app = require("../../app"); // Your Express app

describe("Auth APIs", () => {
  const userPayload = {
    name: "Hamza",
    email: "hamza@test.com",
    password: "12345",
  };

  it("should register user successfully", async () => {
    const res = await request(app)
      .post("/api/v1/register-user")
      .send(userPayload);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should fail if name is missing", async () => {
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      email:"hmza@test.com",
      password:"12345"
    })
  })

  it("should fail if name is not string", async () => {
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      name:123
    })
  })

  it("should fail if email is missing", async () => {
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      name:"Hamza",
      password:"12345"
    })
  })

  it("should fail if email is invalid", async () => {
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      name:"Hamza",
      email:"hmza",
      password:"12345"
    })
  })

  it("should fail if password is missing", async () => {
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      name:"Hamza",
      email:"hmza@test.com"
    })
  })

  it("should fail if password is not string", async () => {
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      name:"Hamza",
      email:"hmza@test.com",
      password:123
    })
  })

  it("should fail if user already exist", async () => {
    const res = await request(app)
    .post("/api/v1/register-user")
    .send({
      name:"Hamza",
      email:"hmza@gmail.com",
      password:"12345"
    })
  })

  it("should login with registered user", async () => {
    await request(app).post("/api/v1/register-user").send(userPayload);

    const res = await request(app)
      .post("/api/v1/login-user")
      .send({
        email: userPayload.email,
        password: userPayload.password,
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("should fail if email is missing", async () => {
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      password:"12345"
    })
  })

  it("should fail if email is invalid", async () => {
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      email:"hmza",
      password:"12345"
  })
  })

  it("should fail ir password is missing", async () => {
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      email:"hmza@gmail.com"
    })
  })

  it("should fail if password is not string", async () => {
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      email:"hmza@gmail.com",
      password:123
    })
  })

  it("should fail if user not found", async () => {
    const res = await request(app)
    .post("/api/v1/login-user")
    .send({
      email:"hmza2@gmail.com",
      password:"12345"
    })
  })
});
