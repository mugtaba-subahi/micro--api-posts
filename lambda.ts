import { ApolloServer } from 'apollo-server-lambda';
import { buildFederatedSchema } from '@apollo/federation';
import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import typeDefs from './schema';



const resolvers = {
  Query: {
    allPosts: () => 'Post update'
  }
};

// const resolvers = {
//   Query: {
//     allPosts: () => {
      
//       const dynamodb = new AWS.DynamoDB();
//       dynamodb.(params, function (err, data) {
//         if (err) console.log(err, err.stack); // an error occurred
//         else console.log(data);           // successful response
//       });

//       return x;
//     }
//   }
// };

const createHandler = async () => {
  const server = new ApolloServer({
    playground: { endpoint: '/posts' },
    introspection: true,
    schema: buildFederatedSchema([{ typeDefs, resolvers }])
  });
  return server.createHandler();
};

export const graphql = (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
  createHandler().then(handler => handler(event, context, callback));
};
