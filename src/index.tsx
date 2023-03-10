import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import App from './app';
import { APP_DESCRIPTION, APP_TITLE } from './utils/constants';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>{APP_TITLE}</title>
      <meta name="description" content={APP_DESCRIPTION} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
