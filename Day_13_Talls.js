const frisby = require("frisby");
  const Joi = frisby.Joi;
  describe('Count Talls', () => {
    it('tall species', () => {
      return frisby.get('https://swapi.dev/api/species')
        .expect("status", 200)
        .then(result => {
          const body = result.json;
          console.log(body);
          const talls = body.results.filter(specie => {
            return specie.average_height>100;
          });
          console.log(talls.length);
          let talls_count = 0
          for (let i=0; i<body.results.length; i++) {
            const specie = body.results[i];
            if (specie.average_height > 100) { 
              talls_count += 1;
              console.log('Tall species:' + talls_count);
            }
          }
        });
      });
    });