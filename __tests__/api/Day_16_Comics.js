const frisby = require("frisby");
let page = 2555;
let status;
describe('Day_16:comics', () => {
	it('send', async () => {
		do {
			const response = await frisby.get(`http://xkcd.com/{page}/info.0.json`);
			status=response.status;
			console.log(status);
			page++;
		} while (status == 200);
		});
});