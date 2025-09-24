const request = require("supertest");
const app = require("./server");

describe("API Tests", () => {
  test("GET /api/ping should return pong: true", async () => {
    const response = await request(app).get("/api/ping");
    expect(response.body).toEqual({ pong: true });
  });
});
