import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export default async () => {
  const dynamodb = new DocumentClient({ endpoint: process.env.DB_URL });

  const params = {
    TableName: 'Users',
    Key: { id: 'f74b63e6-ad2c-4c1b-9895-bd616170beda' }
  };

  const { Item } = await dynamodb.get(params).promise();
  return Item;
};
