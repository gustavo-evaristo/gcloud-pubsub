import { PubSub } from '@google-cloud/pubsub';

const pubsub = new PubSub({
  projectId: process.env.GCLOUD_PROJECT_ID
});

const publishMessage = async () => {
  const topic = pubsub.topic('teste');
  
  const data = Buffer.from('olho no lanceee');
  
  topic.publishMessage({ data });
};

publishMessage();