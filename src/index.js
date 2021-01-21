import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { cache } from './cache'
import App from './App';

import { API_URL, HEADER } from './env'

const client = new ApolloClient({
  // cache,
  uri: API_URL,
  headers: {
    "x-account-key": HEADER 
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


