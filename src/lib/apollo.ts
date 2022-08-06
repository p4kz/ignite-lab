import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6hq8q5w48lx01uqdtpdc9tn/master',
  cache: new InMemoryCache()
})