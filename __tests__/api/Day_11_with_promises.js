const frisby = require("frisby");
describe("Water plants if necessary", () => {
    it("Shows level of water", () => {
      return frisby.get("https://water-ttl.herokuapp.com/hygrometer")
        .expect("status", 200)
        .then( (result ) => {
          const level = result.json.level;
          console.log("Level: " + result.json.level);
          if (level <= 60) {
            const count = (60 - level) / 10;
            const promises = [];
            for (let i=1; i<count; i++) {
            promises.push(frisby.post("water-ttl.herokuapp.com/water", {duration:10})
            .expect('status', 200));
    console.log("i watered the plants!");
  }

      return Promise.all(promises).then(() => {
            	return frisby.get("https://water-ttl.herokuapp.com/hygrometer")
        .expect("status", 200)
        .then( (result ) => {
          console.log("Level: " + result.json.level);
        });
    });
          }else{
            console.log ("plants are watered yet")
          }
        });
      });
  });