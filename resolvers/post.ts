import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export default async () => {
  const dynamodb = new DocumentClient({ endpoint: process.env.DB_URL });

  const params = {
    TableName: 'Posts',
    Key: { id: '07c5a1c5-df1e-4aba-a330-bd8ef8942262' }
  };

  const { Item } = await dynamodb.get(params).promise();
  return Item;
};
