const frisby = require("frisby");
const fs = require('fs');
const path = require('path');
const formData = frisby.formData();
describe('upload file', () => {
	jest.setTimeout(1000000);
	it('CSV file', async () => {
		const fileData = fs.readFileSync('./geoMap.csv', 'utf8');
		const rows = fileData.split('\n');
		console.log(rows);

		for(let i=1; i<rows.length; i++){
			const values = rows[i].split(',');
			const region = values[0];
			const boba = values[1];
			const response = await frisby.get('https://postman-echo.com/get?${Region}={boba}');
			console.log(response.body);
			if (response.json.args[region] === '83') {
				console.log('exit');
				return;
			}
		}
	});
});