
import 'react-native-get-random-values';
import React from 'react';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Registration from "./Registration";


const client = new ApolloClient({
  uri: 'https://edoprovod.ru/graphql',
  cache: new InMemoryCache()
});


export default function App() {
  return (
    
    <ApolloProvider client={client}>
      <Registration/>
    </ApolloProvider>


  );
}