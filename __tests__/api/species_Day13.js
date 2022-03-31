const frisby = require("frisby");
  const Joi = frisby.Joi;
  describe("Ewokese", () => {
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
          language: Joi.string()
        }).then(result => {
          const body = result.json;
          const found = body.results.find(result => result.language === 'Ewokese');
          return expect(found).not.toBeUndefined();
        });
    });
});