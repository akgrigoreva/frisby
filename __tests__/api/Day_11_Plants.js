const frisby = require("frisby");
const Joi = frisby.Joi;
describe("Water plants if necessary", () => {
    it("Shows level of water", () => {
      return frisby.get("https://water-ttl.herokuapp.com/hygrometer")
        .expect("status", 200)
        .then( (result ) => {
          const level = result.json.level;
          console.log("Level: " + result.json.level);
          if (level <= 60) {
            const count = (60 - level)
            for (let i=1; i<count; i++) {
            frisby.post("water-ttl.herokuapp.com/water", {duration:10}
            ).expect('status', 200);
    console.log("i watered the plants!")
            };
            return frisby.get("https://water-ttl.herokuapp.com/hygrometer")
        .expect("status", 200)
        .then( (result ) => {
          const level = result.json.level;
          console.log("Level: " + result.json.level);
        });
          } else {console.log ("plants are watered yet")}
        });
      });
  });