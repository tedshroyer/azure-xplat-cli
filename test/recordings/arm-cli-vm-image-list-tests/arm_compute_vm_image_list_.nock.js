// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus/Enterprise/versions?api-version=2016-03-30')
  .reply(200, "[\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.4021\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.4021\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.4319\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.4319\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.7001\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.7001\"\r\n  },\r\n  {\r\n    \"location\": \"eastus\",\r\n    \"name\": \"10.50.7002\",\r\n    \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.7002\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b40ef2ef-9276-4c6c-ab4a-7160fe7712e1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'a779e659-914b-4bba-98a6-31edd584f987',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T071033Z:a779e659-914b-4bba-98a6-31edd584f987',
  date: 'Tue, 16 Aug 2016 07:10:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus/Enterprise/versions/10.50.7001?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"name\": \"10.50.7001\",\r\n  \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.7001\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fe533eae-4b6c-424b-a013-ddea115f01dc',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '2af655a8-41ae-46d9-84ba-4f5a01991b20',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T071034Z:2af655a8-41ae-46d9-84ba-4f5a01991b20',
  date: 'Tue, 16 Aug 2016 07:10:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus/Enterprise/versions/10.50.4319?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"name\": \"10.50.4319\",\r\n  \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.4319\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5dbd90a2-d6f8-48bd-ba63-a7330ffaa22a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '9725aa1b-e8fe-4708-8a32-f9bac73aaddf',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T071034Z:9725aa1b-e8fe-4708-8a32-f9bac73aaddf',
  date: 'Tue, 16 Aug 2016 07:10:33 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus/Enterprise/versions/10.50.7002?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"name\": \"10.50.7002\",\r\n  \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.7002\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '568f47ed-26b1-44cc-9f33-78eb6dcbab54',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'b41592f8-cdb6-4445-b3de-16b5d201397f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T071034Z:b41592f8-cdb6-4445-b3de-16b5d201397f',
  date: 'Tue, 16 Aug 2016 07:10:34 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2008R2SP3-WS2008R2SP1/skus/Enterprise/versions/10.50.4021?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"osDiskImage\": {\r\n      \"operatingSystem\": \"Windows\"\r\n    },\r\n    \"dataDiskImages\": []\r\n  },\r\n  \"location\": \"eastus\",\r\n  \"name\": \"10.50.4021\",\r\n  \"id\": \"/Subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/Providers/Microsoft.Compute/Locations/eastus/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2008R2SP3-WS2008R2SP1/Skus/Enterprise/Versions/10.50.4021\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5c60aebe-d699-4044-bbce-4fbbe82a26b5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14942',
  'x-ms-correlation-request-id': '0f8055c1-e6ed-4ba3-a811-ab9389652484',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T071034Z:0f8055c1-e6ed-4ba3-a811-ab9389652484',
  date: 'Tue, 16 Aug 2016 07:10:34 GMT' });
 return result; }]];