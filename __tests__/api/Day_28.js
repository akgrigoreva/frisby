const frisby = require('frisby');
const Joi = frisby.Joi;
var url = 'https://swapi.dev/api/planets/';
describe('Day 28 Lighthouse', () => {
jest.setTimeout(30000);
it('response time < 1000 ms', () => {
return frisby.get(url)
.expect('status', 200)
.then(result => {
console.log(result.responseTime)
expect(result.responseTime).toBeLessThan(1000)})
})
it('lighthouse', () => {
return frisby.timeout(15000).get('https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=' + url)
.expect('status', 200)
.then(result => {
console.log('Here!');
const body = result.json;
console.log(body.lighthouseResult.categories.performance.score)
expect(body.lighthouseResult.categories.performance.score).toBeGreaterThan(0.9)
})
});
});
