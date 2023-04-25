import path from 'path';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { store } from './store/store';
import { App } from './App';

const app = express();
const PORT = process.env.PORT || 3000;

// enable CORS and compression
app.use(cors());
app.use(compression());

// serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));

// handle all requests
app.get('*', (req, res) => {
  const context = {};

  const markup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  // if the requested route is not found, return a 404 page
  if (context.status === 404) {
    res.status(404);
  }

  // return the rendered HTML
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My App</title>
        <link rel="stylesheet" href="/main.css">
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

// start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
