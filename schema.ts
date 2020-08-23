import { gql } from 'apollo-server-lambda';

export default gql`
  type Post {
    id: String
    name: String
    date: String
  }

  type User {
    id: String
    name: String
    date: String
  }

  type Query {
    post: Post
    user: User
  }
`;
