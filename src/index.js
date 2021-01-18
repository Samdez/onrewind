import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import App from './App';

import { API_URL, HEADER } from './env'

const client = new ApolloClient({
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

client
  .query({
    query: gql`
    query {
      allVideos {
        cursor{
          before
          after
        }
        items {
          name
          id
          poster
        }
      }
    }
    `
  })
  .then(result => console.log(result))

