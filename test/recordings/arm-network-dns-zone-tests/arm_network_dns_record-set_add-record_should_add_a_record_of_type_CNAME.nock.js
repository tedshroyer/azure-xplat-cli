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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-8009-4ce6f201d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-8009-4ce6f201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c98e8a91-ed8d-48e3-a7fa-384f19a8a007',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'd2daf354-4e25-40a1-b26b-d788a9edb168',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124337Z:d2daf354-4e25-40a1-b26b-d788a9edb168',
  date: 'Mon, 29 Aug 2016 12:43:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-8009-4ce6f201d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-8009-4ce6f201d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c98e8a91-ed8d-48e3-a7fa-384f19a8a007',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'd2daf354-4e25-40a1-b26b-d788a9edb168',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124337Z:d2daf354-4e25-40a1-b26b-d788a9edb168',
  date: 'Mon, 29 Aug 2016 12:43:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-cname' does not exist in resource group 'xplat-test-dns-zone-record-set9316' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '983ae33c-a1cb-445d-a7e1-34c4574b22c6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'e033a9b4-1998-4c84-a693-b4b2b41a025c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124338Z:e033a9b4-1998-4c84-a693-b4b2b41a025c',
  date: 'Mon, 29 Aug 2016 12:43:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-cname' does not exist in resource group 'xplat-test-dns-zone-record-set9316' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '983ae33c-a1cb-445d-a7e1-34c4574b22c6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'e033a9b4-1998-4c84-a693-b4b2b41a025c',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124338Z:e033a9b4-1998-4c84-a693-b4b2b41a025c',
  date: 'Mon, 29 Aug 2016 12:43:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"4b7116d3-c382-4fff-a06a-275f609f2c9b\",\"properties\":{\"fqdn\":\"set-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  etag: '4b7116d3-c382-4fff-a06a-275f609f2c9b',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '249c0d26-9360-4d34-b414-4956321164d0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'c301ae21-52d3-4a55-b05f-73a549d2630a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124339Z:c301ae21-52d3-4a55-b05f-73a549d2630a',
  date: 'Mon, 29 Aug 2016 12:43:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"4b7116d3-c382-4fff-a06a-275f609f2c9b\",\"properties\":{\"fqdn\":\"set-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  etag: '4b7116d3-c382-4fff-a06a-275f609f2c9b',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '249c0d26-9360-4d34-b414-4956321164d0',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'c301ae21-52d3-4a55-b05f-73a549d2630a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124339Z:c301ae21-52d3-4a55-b05f-73a549d2630a',
  date: 'Mon, 29 Aug 2016 12:43:39 GMT',
  connection: 'close' });
 return result; }]];