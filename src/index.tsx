import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import * as serviceWorkerRegistration from './serviceWorker';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000/graphql',
  options: {
    reconnect: true
  }
});

const splitLink = split(
  ({query}) => {
    const defination = getMainDefinition(query);
    return (
      defination.kind === 'OperationDefinition' &&
      defination.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          sobdoChhok: offsetLimitPagination()
        }
      }
    }
  }) as any
});

const store = createStore(
  allReducers,
  composeWithDevTools()
);

const domain: any = process.env.REACT_APP_AUTH0_DOMAIN;
const clientID: any = process.env.REACT_APP_AUTH0_CLINET_ID;

// console.log("domain: ",domain," Client ID: ",clientID);
const root = createRoot(document.getElementById('root') as any);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
      >
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
    </Auth0Provider>
  </Provider>
  // </React.StrictMode>,
);

serviceWorkerRegistration.register();