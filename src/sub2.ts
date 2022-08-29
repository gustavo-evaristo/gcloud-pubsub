import { PubSub } from '@google-cloud/pubsub';

const pubsub = new PubSub({
  projectId: process.env.GCLOUD_PROJECT_ID
});

const readMessage = async () => {
  const subscription = pubsub.subscription('teste-sub-2');

  subscription.on('message', message => {
    console.log(`sub 2 receive ${message.data}`);
    message.ack();
  });
};

readMessage();