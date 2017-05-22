var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client()



client.once('connect', function () {
    client.loadMetadataForTopics([], function (error, results) {
    if (error) {
        return console.error(error);
    }
    console.log('%j', _.get(results, '1.metadata'));
    });
});