// it("Testing to see if Jest works", () => {
//     expect(1).toBe(2);
// });

// it("async test", async (done) => {
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     let yo = 1;
//     expect(yo).toBe(1);
//     done();
// });

const index = require("./index");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", index);

test("index route works", (done) => {
    request(app)
        .get("/")
        .expect("Content-Type", /json/)
        .expect({ name: "frodo" })
        .expect(200, done);
});

test("testing route works", (done) => {
    request(app)
        .post("/test")
        .type("form")
        .send({ item: "hey" })
        .then(() => {
            request(app)
                .get("/test")
                .expect({ array: ["hey"] }, done);
        });
});
