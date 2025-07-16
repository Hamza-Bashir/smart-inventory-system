const request = require("supertest")
const app = require("../app")
const jwt = require("jsonwebtoken")


describe("POST /api/v1/add-business", () => {
    it("should pass if response is Business register successfully", async () => {

        const token = jwt.sign(
            {
              _id: "user_id_123",
              name: "Test User",
              email: "test@example.com"
            },
            process.env.JWT_KEY
          );
          const res = await request(app)
          .post("/api/v1/add-business")
          .set("Authorization", `Bearer ${token}`) 
          .send({
            name: `TestBusiness_${Date.now()}`
          });

        expect(res.statusCode).toBe(200)
        expect(res.body.success).toBe(true)
        expect(res.body.message).toBe("Business register successfully")
    })

    it("should fail if name is missing", async () => {
        const token = jwt.sign(
            {
              _id: "user_id_123",
              name: "Test User",
              email: "test@example.com"
            },
            process.env.JWT_KEY
          );
          const res = await request(app)
          .post("/api/v1/add-business")
          .set("Authorization", `Bearer ${token}`) 
          .send({
            
          });

        expect(res.statusCode).toBe(404)
        expect(res.body.success).toBe(false)
        expect(res.body.messages).toBe("Name is missing")
    })

    it("should pass if get all business", async () => {
      const token = jwt.sign(
        {
          _id: "user_id_123",
          name: "Test User",
          email: "test@example.com"
        },
        process.env.JWT_KEY
      );
      const res = await request(app)
      .get("/api/v1/all-business")
      .set("Authorization", `Bearer ${token}`)

      expect(res.statusCode).toBe(200)
      expect(res.body.success).toBe(true)
    expect(res.body.message).toBe("Business found successfully")
    })

    
})