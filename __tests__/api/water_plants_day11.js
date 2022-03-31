const frisby = require("frisby");
const Joi = frisby.Joi;
describe("Should i water the plants?", () => {
    it("hydrometer", () => {
      return frisby.get("https://water-ttl.herokuapp.com/hygrometer")
        .expect("status", 200)
        .expect("jsonTypes", {"level": Joi.number()})
        .then(result => {
  console.log(result.json);
  });
});
    });