const frisby = require("frisby");
const Joi = frisby.Joi;
describe("Day 08 Get User", () => {
    it("Gets female french user", () => {
      return frisby.get("https://randomuser.me/api?gender=female&nat=fr")
        .expect("status", 200)
        .then((result) => {
          const body = (result.json).results[0];
          // expect(result.responceTime).toBeLessThan(1000)
          expect(body.nat).toBe("FR")
          expect(body.gender).toBe('female')
          console.log(body.name)
          });
          });
    });