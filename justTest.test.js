// const { add } = require("./justTest");
const request = require("supertest")
const app = require("./index");

test("test for hospital list",async()=>{
    const response = await request(app).get("/api/hospital/all")
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
},15000)
