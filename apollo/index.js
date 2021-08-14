import { ApolloClient, InMemoryCache } from "@apollo/client";

const backend = process.env.NEXT_PUBLIC_STRAPI_BACKEND;

const client = new ApolloClient({
  uri: `${backend}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
