const frisby = require("frisby");
const Joi = frisby.Joi;
describe("Day 05", () => {
    it("Gets the rate of chosen currency", () => {
      var currency = 'usd';
      return frisby.get('https://api.coindesk.com/v1/bpi/currentprice/' + currency + '.json')
        .expect("status", 200)
        /*.expect("jsonTypes", "disclaimer", Joi.string().required())
        .expect("jsonTypes", "time", Joi.object().required())*/
        .then((result) => {
          const body = result.json;
          console.log(result.time);
          //console.log: undefined (?)
        });
    });
    });