const frisby = require("frisby");
  const Joi = frisby.Joi;
  describe('Count Talls', () => {
    it('tall species', () => {
      return frisby.get('https://swapi.dev/api/species')
        .expect("status", 200)
        .then(result => {
          const body = result.json;
          const height = result.json.average_height;
          const talls = 0;
 for (; body ;) {
 if (height > 100) { 
        talls = talls+1;
        console.log('Tall species:' + total_talls);
        }
console.log("Tall species:" + talls)
          };
        });
      });
    });