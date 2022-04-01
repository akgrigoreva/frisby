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
    test.todo("water the plants if necessary"), () => {
if (result => {
          const body = result.json;
          const found = body.results.find(result => result.level > 0.60); {
  console.log(result.json);
  console.log("plants are wet");
  } if (result => {
          const body = result.json;
          const found = body.results.find(result => result.level < 0.60); {
  frisby.post(water-ttl.herokuapp.com/water, {duration:10}).expect('status', 200);
    console.log("i watered the plants!")
        };
      });
    });
  };
});
