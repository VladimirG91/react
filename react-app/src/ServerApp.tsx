import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Location } from 'react-router-dom';
import { App } from 'App';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import React from 'react';

interface Options {
  onShellReady: () => void;
}

function render(url: string | Partial<Location>, opts: Options) {
  const stream = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
  return stream;
}

export { render };
