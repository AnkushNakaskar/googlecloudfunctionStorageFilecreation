const PubSub = require('@google-cloud/pubsub');
const storage = require('@google-cloud/storage');

// npm install --save @google-cloud/storage
// npm install --save @google-cloud/pubsub
// --more info https://cloud.google.com/nodejs/docs/reference/libraries

const projectId = 'content-eng-qa';
const pubsubClient = new PubSub({
    projectId: projectId,
    keyFilename: 'keyfile.json'

});


exports.storagetrigger = (event, callback) => {
    const file = event.data;
    const context = event.context;

    console.log(`Event ${context.eventId}`);
    console.log(`  Event Type: ${context.eventType}`);
    console.log(`  Bucket: ${file.bucket}`);
    console.log(`  File: ${file.name}`);
    console.log(`  Metageneration: ${file.metageneration}`);
    console.log(`  Created: ${file.timeCreated}`);
    console.log(`  Updated: ${file.updated}`);

    callback();
};