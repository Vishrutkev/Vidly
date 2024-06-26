const request = require("supertest");
const { Genre } = require("../../models/genre");
const mongoose = require("mongoose");
const { User } = require("../../models/user");
let server;

describe("auth middleware", () => {
  beforeEach(() => {
    server = require("../../index");
  });

  afterEach(async () => {
    await server.close();
    await Genre.deleteMany({});
  });

  let token;
  let name;

  const exec = async () => {
    return await request(server)
      .post("/api/genres")
      .set("x-auth-token", token)
      .send({ name });
  };

  beforeEach(() => {
    token = new User().generateAuthToken();
    name = "genre1";
  });

  it("should return 401 if no token is provided", async () => {
    token = "";
    const res = await exec();
    expect(res.status).toBe(401);
  });

  it("should return 400 if token is invalid", async () => {
    token = "a";
    const res = await exec();
    expect(res.status).toBe(400);
  });

  it("should return 200 if token is valid", async () => {
    const res = await exec();
    expect(res.status).toBe(200);
  });
});
