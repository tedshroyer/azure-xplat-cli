// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '04db7ed3-6ed9-4861-8b22-7c0c0c98490b',
    name: 'AAPT Cache10',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplatTestCacheRG';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache3709?api-version=2015-03-01')
  .reply(200, "{\"id\":\"/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache3709\",\"location\":\"West US\",\"name\":\"xplatTestCache3709\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-lru\"},\"accessKeys\":null,\"hostName\":\"xplatTestCache3709.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '534',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c4f37723-a67d-449d-938b-35b21c1ab72d',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-correlation-request-id': '6c991e82-b5ef-467d-a71c-3c9b16cc4339',
  'x-ms-routing-request-id': 'WESTUS:20150824T225627Z:6c991e82-b5ef-467d-a71c-3c9b16cc4339',
  date: 'Mon, 24 Aug 2015 22:56:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache3709?api-version=2015-03-01')
  .reply(200, "{\"id\":\"/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache3709\",\"location\":\"West US\",\"name\":\"xplatTestCache3709\",\"type\":\"Microsoft.Cache/Redis\",\"tags\":{},\"properties\":{\"provisioningState\":\"Creating\",\"redisVersion\":\"3.0\",\"sku\":{\"name\":\"Standard\",\"family\":\"C\",\"capacity\":1},\"enableNonSslPort\":false,\"redisConfiguration\":{\"maxmemory-policy\":\"allkeys-lru\"},\"accessKeys\":null,\"hostName\":\"xplatTestCache3709.redis.cache.windows.net\",\"port\":6379,\"sslPort\":6380}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '534',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c4f37723-a67d-449d-938b-35b21c1ab72d',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-correlation-request-id': '6c991e82-b5ef-467d-a71c-3c9b16cc4339',
  'x-ms-routing-request-id': 'WESTUS:20150824T225627Z:6c991e82-b5ef-467d-a71c-3c9b16cc4339',
  date: 'Mon, 24 Aug 2015 22:56:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache3709/listKeys?api-version=2015-03-01')
  .reply(200, "{\"primaryKey\":\"KLXB6iWecyIWi2vtctVsXgizC2xtBFFtw4ZCNdhLpvQ=\",\"secondaryKey\":\"w5jW8GYoXmqOabF1gwcNjULScvpfDwgq+Shf0pmE4Kg=\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '123',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '118cf7fd-b269-4d41-8ab5-6fff1daabcb6',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '75a38227-cdfb-40b6-a08f-636acdfb9ad5',
  'x-ms-routing-request-id': 'WESTUS:20150824T225628Z:75a38227-cdfb-40b6-a08f-636acdfb9ad5',
  date: 'Mon, 24 Aug 2015 22:56:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/04db7ed3-6ed9-4861-8b22-7c0c0c98490b/resourceGroups/xplatTestCacheRG/providers/Microsoft.Cache/Redis/xplatTestCache3709/listKeys?api-version=2015-03-01')
  .reply(200, "{\"primaryKey\":\"KLXB6iWecyIWi2vtctVsXgizC2xtBFFtw4ZCNdhLpvQ=\",\"secondaryKey\":\"w5jW8GYoXmqOabF1gwcNjULScvpfDwgq+Shf0pmE4Kg=\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '123',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '118cf7fd-b269-4d41-8ab5-6fff1daabcb6',
  'x-rp-server-mvid': 'af670903-1b42-4933-b84c-636f2d204d89',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '75a38227-cdfb-40b6-a08f-636acdfb9ad5',
  'x-ms-routing-request-id': 'WESTUS:20150824T225628Z:75a38227-cdfb-40b6-a08f-636acdfb9ad5',
  date: 'Mon, 24 Aug 2015 22:56:28 GMT',
  connection: 'close' });
 return result; }]];