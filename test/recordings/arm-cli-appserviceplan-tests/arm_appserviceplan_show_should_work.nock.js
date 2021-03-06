// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'fb2c25dc-6bab-45c4-8cc9-cece7c42a95a',
    name: 'antps14',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg15581/providers/Microsoft.Web/serverfarms/armappserviceplantests5850?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg15581/providers/Microsoft.Web/serverfarms/armappserviceplantests5850\",\"name\":\"armappserviceplantests5850\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests5850\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg15581-WestUSwebspace\",\"subscription\":\"fb2c25dc-6bab-45c4-8cc9-cece7c42a95a\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg15581\",\"reserved\":false},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1010',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a6f83b2b-7980-4e38-8378-6b1cd2dbcb32',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14805',
  'x-ms-correlation-request-id': 'b2097ce9-b85b-4f47-a1f6-206992ac71b3',
  'x-ms-routing-request-id': 'WESTUS2:20160831T212834Z:b2097ce9-b85b-4f47-a1f6-206992ac71b3',
  date: 'Wed, 31 Aug 2016 21:28:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg15581/providers/Microsoft.Web/serverfarms/armappserviceplantests5850?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg15581/providers/Microsoft.Web/serverfarms/armappserviceplantests5850\",\"name\":\"armappserviceplantests5850\",\"type\":\"Microsoft.Web/serverfarms\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"serverFarmId\":0,\"name\":\"armappserviceplantests5850\",\"workerSize\":0,\"workerSizeId\":0,\"workerTierName\":null,\"numberOfWorkers\":1,\"currentWorkerSize\":0,\"currentWorkerSizeId\":0,\"currentNumberOfWorkers\":1,\"status\":0,\"webSpace\":\"testrg15581-WestUSwebspace\",\"subscription\":\"fb2c25dc-6bab-45c4-8cc9-cece7c42a95a\",\"adminSiteName\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"maximumNumberOfWorkers\":3,\"planName\":\"VirtualDedicatedPlan\",\"adminRuntimeSiteName\":null,\"computeMode\":0,\"siteMode\":null,\"geoRegion\":\"West US\",\"perSiteScaling\":false,\"numberOfSites\":0,\"hostingEnvironmentId\":null,\"tags\":null,\"kind\":null,\"resourceGroup\":\"testrg15581\",\"reserved\":false},\"sku\":{\"name\":\"B1\",\"tier\":\"Basic\",\"size\":\"B1\",\"family\":\"B\",\"capacity\":1}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1010',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a6f83b2b-7980-4e38-8378-6b1cd2dbcb32',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14805',
  'x-ms-correlation-request-id': 'b2097ce9-b85b-4f47-a1f6-206992ac71b3',
  'x-ms-routing-request-id': 'WESTUS2:20160831T212834Z:b2097ce9-b85b-4f47-a1f6-206992ac71b3',
  date: 'Wed, 31 Aug 2016 21:28:34 GMT',
  connection: 'close' });
 return result; }]];