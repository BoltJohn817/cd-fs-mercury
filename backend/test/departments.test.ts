import { expect } from "chai";
import { it, describe } from "mocha";
import { agent as request } from "supertest";

import Application from "../src/app";
const app = new Application();

describe("#departments", () => {
  it("Should return success", async () => {
    const res = await request(app.service).get("/v1/departments").send();
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body).to.be.a("array");
    expect(res.body.length).to.equal(3);
    expect(res.body[0].id).to.equal(2);
    expect(res.body[0].name).to.equal("Full Stack Development");
    expect(res.body.error).to.be.undefined;
  });
});

describe("#departments/:id", () => {
  it("Should return employee list", async () => {
    const res = await request(app.service).get("/v1/departments/2").send();
    expect(res.status).to.equal(200);
    expect(res.body).not.to.be.empty;
    expect(res.body.id).to.equal(2);
    expect(res.body.name).to.equal("Full Stack Development");
    expect(res.body.employees).to.be.a("array");
    expect(res.body.employees.length).to.equal(2);
    expect(res.body.employees[0].id).to.equal(82338);
    expect(res.body.employees[1].id).to.equal(32673);
  });

  it("Should respond with 404 error", async () => {
    const res = await request(app.service)
      .get("/v1/departments/404error")
      .send();
    expect(res.status).to.equal(404);
  });
});
