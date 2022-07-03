import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4u924hk0np301un7nznf9ly/master",
  cache: new InMemoryCache(),
});
export default client;
