const frisby = require("frisby");
  const Joi = frisby.Joi;
  describe("Day_13: Ewokese and Talls", () => {
    it("species", () => {
      return frisby.get("https://swapi.dev/api/species")
        .expect("status", 200)
        .expect("jsonTypes", "count", Joi.number())
        .expect("json", "next", "https://swapi.dev/api/species/?page=2")
        .expect("jsonTypes", "results.*", {
          name: Joi.string(),
          classification: Joi.string(),
          designation: Joi.string(),
          average_height: Joi.string(),
          language: Joi.string(),
          homeworld: Joi.string().allow(null)
        })
        .then(result => {
          const body = result.json;
          const found = body.results.find(result => result.language === 'Ewokese');
          return expect(found).not.toBeUndefined();
        })
        .then(result => {
      const total_talls = 0;
      const body = result.json;
    for (; body.results;) {
       if (result.average_height > 100) { 
        total_talls += 1;
        console.log("Tall species:" + total_talls); 
      };
    };
     },
    );
      });
  });
