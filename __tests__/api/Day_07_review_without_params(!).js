const frisby = require("frisby");
const Joi = frisby.Joi;
describe("Day 07-Nasa", () => {
    it("Gets inf about space objects_Version_review", () => {
      const temp_count = 3;
      return frisby.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10")
        .expect("status", 200)
        // .expect("jsonTypes", "*", Joi.array())
        .then((result) => {
          console.log(result.json);
          })
        .then(function (result) {
          const count = temp_count;
          for (let index = 0; index < count; index++) {
            const imagetitle = result.json[index].title;
            const imageurl = result.json[index].url;
            console.log('Image' + index+1 + ':' + '\n'
              + '  ' + "Title: " + imagetitle + '\n'
              + '  ' + 'URL: ' + imageurl + '\n')
          }
        });
          });
        });