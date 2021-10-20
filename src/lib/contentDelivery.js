import privateData from '/private.json';

const contentful = require('contentful');

const { spaceId, deliveryToken } = privateData;

const client = contentful.createClient({
  space: spaceId,
  accessToken: deliveryToken,
});

export const getEntry = async (id) =>
  client.getEntry(id).catch((err) => console.error(err));
