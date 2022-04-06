const frisby = require("frisby");
const cheerio = require('cheerio');
const Joi = frisby.Joi;

describe('Parse HTML', () => {
	it('get to bing', () => {
		return frisby.get('https://www.bing.com/search?q=postman')
		.then( (response) => {
			const body = response.body;
			const $ = cheerio.load(body);
			const linkVal = [];
			$('a').each( (i, el) => {
				console.log(el);
				linkVal.push($(el).attr('href'));
				})
			console.log(linkVal);
		});
	});
	});