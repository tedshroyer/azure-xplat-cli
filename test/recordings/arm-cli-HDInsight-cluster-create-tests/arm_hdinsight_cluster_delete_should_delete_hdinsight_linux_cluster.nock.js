// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904?api-version=2015-03-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/operationresults/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '1ef031c4-ea84-4805-85a3-dd2c1d601413',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '368502ff-fad9-42a9-bba5-69bb1f1881d6',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014318Z:368502ff-fad9-42a9-bba5-69bb1f1881d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:43:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904?api-version=2015-03-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/operationresults/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '1ef031c4-ea84-4805-85a3-dd2c1d601413',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '368502ff-fad9-42a9-bba5-69bb1f1881d6',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014318Z:368502ff-fad9-42a9-bba5-69bb1f1881d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:43:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6dd4590d-8c7c-49fd-8742-aff102a56e3f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2f13345b-c4d5-44d7-95c5-e64778e59467',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014419Z:2f13345b-c4d5-44d7-95c5-e64778e59467',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:44:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6dd4590d-8c7c-49fd-8742-aff102a56e3f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '2f13345b-c4d5-44d7-95c5-e64778e59467',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014419Z:2f13345b-c4d5-44d7-95c5-e64778e59467',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:44:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '731ecd11-e351-45f6-90e9-21af24aaac11',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': 'c83a6436-95d6-4da9-b056-e834d61083a1',
  'x-ms-routing-request-id': 'WESTUS:20160518T014520Z:c83a6436-95d6-4da9-b056-e834d61083a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:45:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '731ecd11-e351-45f6-90e9-21af24aaac11',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14933',
  'x-ms-correlation-request-id': 'c83a6436-95d6-4da9-b056-e834d61083a1',
  'x-ms-routing-request-id': 'WESTUS:20160518T014520Z:c83a6436-95d6-4da9-b056-e834d61083a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:45:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc5ffc0e-0723-4e07-889c-90354ea251ce',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': 'a0fe6366-7b92-4583-9972-06c3c8f084f2',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014621Z:a0fe6366-7b92-4583-9972-06c3c8f084f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:46:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fc5ffc0e-0723-4e07-889c-90354ea251ce',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14972',
  'x-ms-correlation-request-id': 'a0fe6366-7b92-4583-9972-06c3c8f084f2',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014621Z:a0fe6366-7b92-4583-9972-06c3c8f084f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:46:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c09cbf7d-07ed-4c4b-a2ac-db05520325d6',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': '68a74c39-e385-4ea5-97f0-54a74a0f4aa8',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014722Z:68a74c39-e385-4ea5-97f0-54a74a0f4aa8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:47:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c09cbf7d-07ed-4c4b-a2ac-db05520325d6',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14968',
  'x-ms-correlation-request-id': '68a74c39-e385-4ea5-97f0-54a74a0f4aa8',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014722Z:68a74c39-e385-4ea5-97f0-54a74a0f4aa8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:47:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ff6bc48d-dcf9-4c85-843e-4c90505fd5b1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'fe2d5d34-09b6-425a-aa54-03b3c2425782',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014822Z:fe2d5d34-09b6-425a-aa54-03b3c2425782',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:48:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ff6bc48d-dcf9-4c85-843e-4c90505fd5b1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': 'fe2d5d34-09b6-425a-aa54-03b3c2425782',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014822Z:fe2d5d34-09b6-425a-aa54-03b3c2425782',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:48:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b6a7fef4-373f-4b0f-bdb2-aedb44d7f2cf',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-correlation-request-id': 'a7a4e4d7-4aa2-4cf3-940d-ad6156f082fd',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014923Z:a7a4e4d7-4aa2-4cf3-940d-ad6156f082fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:49:22 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b6a7fef4-373f-4b0f-bdb2-aedb44d7f2cf',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14935',
  'x-ms-correlation-request-id': 'a7a4e4d7-4aa2-4cf3-940d-ad6156f082fd',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T014923Z:a7a4e4d7-4aa2-4cf3-940d-ad6156f082fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:49:22 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8bc9b92d-2d64-4f65-aff7-72f2c3d31dea',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': 'f4b4efd1-da9c-4566-8c3a-bc520dcd7156',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T015024Z:f4b4efd1-da9c-4566-8c3a-bc520dcd7156',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:50:24 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8bc9b92d-2d64-4f65-aff7-72f2c3d31dea',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': 'f4b4efd1-da9c-4566-8c3a-bc520dcd7156',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T015024Z:f4b4efd1-da9c-4566-8c3a-bc520dcd7156',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:50:24 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '17e20c05-a14e-471d-9400-421e1924fead',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '1ced3209-ad45-4b58-9bf8-9764cd68c6dc',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T015125Z:1ced3209-ad45-4b58-9bf8-9764cd68c6dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:51:25 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '17e20c05-a14e-471d-9400-421e1924fead',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '1ced3209-ad45-4b58-9bf8-9764cd68c6dc',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T015125Z:1ced3209-ad45-4b58-9bf8-9764cd68c6dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:51:25 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b2d874eb-19d4-4ea5-b8a7-07404b17039f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': 'ed05188c-9138-49e2-8eb1-431a88cf10d4',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T015226Z:ed05188c-9138-49e2-8eb1-431a88cf10d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:52:25 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b2d874eb-19d4-4ea5-b8a7-07404b17039f',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': 'ed05188c-9138-49e2-8eb1-431a88cf10d4',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T015226Z:ed05188c-9138-49e2-8eb1-431a88cf10d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:52:25 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6cab69b6-385b-4f2f-86df-58d93fe2f5fb',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b376ec56-c9a5-4827-9412-65394f940509',
  'x-ms-routing-request-id': 'WESTUS:20160518T015327Z:b376ec56-c9a5-4827-9412-65394f940509',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:53:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate5904/azureasyncoperations/64fff536-2eb3-48b3-a0f0-155ac16da91f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6cab69b6-385b-4f2f-86df-58d93fe2f5fb',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'b376ec56-c9a5-4827-9412-65394f940509',
  'x-ms-routing-request-id': 'WESTUS:20160518T015327Z:b376ec56-c9a5-4827-9412-65394f940509',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 01:53:26 GMT',
  connection: 'close' });
 return result; }]];