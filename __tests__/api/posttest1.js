const frisby = require("frisby");
const { faker } = require('@faker-js/faker');
const randomName = faker.name.fullName();
const url = 'https://jsonplaceholder.typicode.com/posts'

describe('posttest', () => {
  it ('using post async', function () {
  const placeOrder = async (url, title) => {
  const response = await frisby
    .post(`${url}`, {
      title: 'MyfirstPost',
      body: '${randomName}',
      userId: 1
    })
    .expect("status", 201)
    .expect("jsonTypes", {
      title: Joi.string()
    })
    .then(result => {
        const body = result.json;
        console.log(body);
        })
  // return response.json;
  // const body = result.json;
  // console.log(body);
};
});
});