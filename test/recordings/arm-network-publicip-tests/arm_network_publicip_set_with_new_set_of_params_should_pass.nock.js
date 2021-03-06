// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"2e505d27-afd0-4ad0-819e-8033ccbb27ef\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 5,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '728',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2e505d27-afd0-4ad0-819e-8033ccbb27ef"',
  'x-ms-request-id': 'c22888c7-dc14-4b20-9a2d-69cbb77a41d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '31c9d697-4376-406d-870e-73cf8cb685b8',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133224Z:31c9d697-4376-406d-870e-73cf8cb685b8',
  date: 'Tue, 29 Dec 2015 13:32:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"2e505d27-afd0-4ad0-819e-8033ccbb27ef\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 5,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '728',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2e505d27-afd0-4ad0-819e-8033ccbb27ef"',
  'x-ms-request-id': 'c22888c7-dc14-4b20-9a2d-69cbb77a41d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': '31c9d697-4376-406d-870e-73cf8cb685b8',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133224Z:31c9d697-4376-406d-870e-73cf8cb685b8',
  date: 'Tue, 29 Dec 2015 13:32:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"f22f3a73-7e7e-4e36-90e3-8e7d72346508\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '726',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0acd8b18-a19b-4d2c-b0b1-750a12775fe1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0acd8b18-a19b-4d2c-b0b1-750a12775fe1?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1182',
  'x-ms-correlation-request-id': '36b194cf-9673-4467-9fff-737d25dfbbe6',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133225Z:36b194cf-9673-4467-9fff-737d25dfbbe6',
  date: 'Tue, 29 Dec 2015 13:32:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15', '*')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"f22f3a73-7e7e-4e36-90e3-8e7d72346508\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '726',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0acd8b18-a19b-4d2c-b0b1-750a12775fe1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0acd8b18-a19b-4d2c-b0b1-750a12775fe1?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1182',
  'x-ms-correlation-request-id': '36b194cf-9673-4467-9fff-737d25dfbbe6',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133225Z:36b194cf-9673-4467-9fff-737d25dfbbe6',
  date: 'Tue, 29 Dec 2015 13:32:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0acd8b18-a19b-4d2c-b0b1-750a12775fe1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '44230054-2a2a-4e48-b449-512411f484b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': 'ce8beb66-8bf4-47e5-96eb-e08bd97af2ba',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133237Z:ce8beb66-8bf4-47e5-96eb-e08bd97af2ba',
  date: 'Tue, 29 Dec 2015 13:32:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0acd8b18-a19b-4d2c-b0b1-750a12775fe1?api-version=2015-06-15')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '44230054-2a2a-4e48-b449-512411f484b3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14963',
  'x-ms-correlation-request-id': 'ce8beb66-8bf4-47e5-96eb-e08bd97af2ba',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133237Z:ce8beb66-8bf4-47e5-96eb-e08bd97af2ba',
  date: 'Tue, 29 Dec 2015 13:32:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"66fa66d4-f928-4aee-9c0a-18d121239fae\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"ipAddress\": \"40.112.149.118\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '763',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"66fa66d4-f928-4aee-9c0a-18d121239fae"',
  'x-ms-request-id': '900e474a-32f2-4d3f-8601-bfa010ebdf40',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': 'bbf40f69-dfb0-4de0-a2c2-1ce08777d181',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133238Z:bbf40f69-dfb0-4de0-a2c2-1ce08777d181',
  date: 'Tue, 29 Dec 2015 13:32:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armpublicip8382\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreatePubip/providers/Microsoft.Network/publicIPAddresses/armpublicip8382\",\r\n  \"etag\": \"W/\\\"66fa66d4-f928-4aee-9c0a-18d121239fae\\\"\",\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"testValue1\",\r\n    \"tag2\": \"testValue2\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8343b4ff-a00d-4fc2-833a-4a1d788ad082\",\r\n    \"ipAddress\": \"40.112.149.118\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 6,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip\",\r\n      \"fqdn\": \"dnstestpubip.westus.cloudapp.azure.com\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '763',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"66fa66d4-f928-4aee-9c0a-18d121239fae"',
  'x-ms-request-id': '900e474a-32f2-4d3f-8601-bfa010ebdf40',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14958',
  'x-ms-correlation-request-id': 'bbf40f69-dfb0-4de0-a2c2-1ce08777d181',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T133238Z:bbf40f69-dfb0-4de0-a2c2-1ce08777d181',
  date: 'Tue, 29 Dec 2015 13:32:38 GMT',
  connection: 'close' });
 return result; }]];