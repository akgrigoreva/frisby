const frisby = require("frisby");
const BASE_URL = 'https://beta.apiv2.gowdx.com';
const quoteId = 104130

frisby.globalSetup({
  request: {
    headers: {
      'Authorization': 'Basic ' + Buffer.from("qa500:qa123").toString('base64'),
      'Content-Type': 'application/json',
    }
  }
});
describe('get Quote with Id', () => {
	jest.setTimeout(100000);
// it ('get quote', function () {
//   return frisby
//     .get(`${BASE_URL}/api/Quote/${quoteId}`)
//     .expect('status', 200)
//     .then(result => {
//           const body = result.json;
//           console.log(body);
//           });
//     });
it ('using fetch', function () {
   return frisby.fetch(`${BASE_URL}/api/Quote/${quoteId}`)
      .expect('status', 200)
      .then(result => {
        const body = result.json;
        console.log(body);
        })
      .expect('bodyContains', '104130')
      .expect('json', 'shipmentType', 'LTL')
      .expect('json', 'status', 'Success');
  });
it ('creating quote - Success', function () {
   return frisby
    .post(`${BASE_URL}/api/Quote/`, {
  "shipmentType": "LTL",
  "referenceNumber": "creating quote by api",
  "iacCarrierOnly": true,
  "ctpatCarrierOnly": true,
  "shipment": {
    "pickupPoint": {
      "pointType": "PickUp",
      "postalCode": "60001",
      "countryCode": "US",
      "locationType": "Unknown",
      "dateFrom": null,
      "dateDeadline": null,
      "isTimeSpecific": false,
      "timeFrom": null,
      "timeDeadline": null,
      "extraServices": null,
      "name": "ALDEN 60001 IL, US"
    },
    "dropOffPoint": {
      "pointType": "DropOff",
      "postalCode": "60101",
      "countryCode": "US",
      "locationType": "Unknown",
      "dateFrom": null,
      "dateDeadline": null,
      "isTimeSpecific": false,
      "timeFrom": null,
      "timeDeadline": null,
      "extraServices": null,
      "name": "ADDISON 60101 IL, US"
    },
    "items": [
      {
        "type": "Unknown",
        "packageType": "Pieces",
        "isStackable": true,
        "quantity": 1,
        "weight": 6000.00,
        "totalWeight": 6000.00,
        "weightUnit": "Pounds",
        "length": null,
        "width": null,
        "height": null,
        "lengthUnit": "inches",
        "freightClass": null,
        "isHazardousMaterial": false,
        "totalDeclaredValue": 1,
        "volume": 100.00,
        "volumeUnit": "Cubicfeet"
      }
    ],
    "extraServices": [],
    "useEUV": false,
    "exclusiveUseVehicles": null
      }
    })
    .expect('status', 200)
    .expect('json', 'status', 'Success');
})
});