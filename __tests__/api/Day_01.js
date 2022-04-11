const frisby = require("frisby");
const Joi = frisby.Joi;
describe("Day 01", () => {
    it("sends POST request", () => {
      return frisby.post("https://postman-echo.com/post", {payload: "hello world!"})
        .expect("status", 200)
        .expect("json", "data", {payload: "hello world!"})
        .expect("jsonTypes", "headers", {
          'x-forwarded-proto': Joi.string().required(),
          "host": Joi.string().required(),
          "content-length": Joi.number().required(),
          'content-type': 'application/json'
          })
        .then((result) => {
          console.log(result.json);
        });
    });
    });