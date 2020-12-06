/*
  Here we're setting up the server. We choose apollo-server-micro because it is a NextJS app.
*/
import { ApolloServer } from 'apollo-server-micro';
import { schema } from 'src/schema';

const server = new ApolloServer({ schema });
const handler = server.createHandler({ path: '/api/graphql' });

//We need to set bodyParser false.
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
