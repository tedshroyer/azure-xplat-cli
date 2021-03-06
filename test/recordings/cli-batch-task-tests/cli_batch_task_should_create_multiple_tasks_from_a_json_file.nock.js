// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/xplatJobForTaskTests/addtaskcollection?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#taskaddresult\",\"value\":[\r\n    {\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask1\",\"eTag\":\"0x8D3BBFA6B055D22\",\"lastModified\":\"2016-08-04T00:01:00.110365Z\",\"location\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1\"\r\n    },{\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask3\",\"eTag\":\"0x8D3BBFA6B097BBD\",\"lastModified\":\"2016-08-04T00:01:00.1373629Z\",\"location\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask3\"\r\n    },{\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask2\",\"eTag\":\"0x8D3BBFA6B0E494B\",\"lastModified\":\"2016-08-04T00:01:00.1688395Z\",\"location\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask2\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd73ed8d3-0aa2-4bcf-8b9f-0bfe761ba560',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '903eba15-79ba-453c-abae-60979357dd5b',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/xplatJobForTaskTests/addtaskcollection?api-version=2016-07-01.3.1&timeout=30', '*')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#taskaddresult\",\"value\":[\r\n    {\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask1\",\"eTag\":\"0x8D3BBFA6B055D22\",\"lastModified\":\"2016-08-04T00:01:00.110365Z\",\"location\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask1\"\r\n    },{\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask3\",\"eTag\":\"0x8D3BBFA6B097BBD\",\"lastModified\":\"2016-08-04T00:01:00.1373629Z\",\"location\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask3\"\r\n    },{\r\n      \"status\":\"Success\",\"taskId\":\"xplatTask2\",\"eTag\":\"0x8D3BBFA6B0E494B\",\"lastModified\":\"2016-08-04T00:01:00.1688395Z\",\"location\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/xplatJobForTaskTests/tasks/xplatTask2\"\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd73ed8d3-0aa2-4bcf-8b9f-0bfe761ba560',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '903eba15-79ba-453c-abae-60979357dd5b',
  dataserviceversion: '3.0',
  date: 'Thu, 04 Aug 2016 00:01:00 GMT',
  connection: 'close' });
 return result; }]];