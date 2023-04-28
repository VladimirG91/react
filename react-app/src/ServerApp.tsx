import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Location } from 'react-router-dom';
import { App } from 'App';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';
import React from 'react';
import { fetchMovies } from 'store/moviesSlice';
import './index.css';
interface Options {
  onShellReady: () => void;
}
const store = setupStore();
export default store;

export async function render(url: string | Partial<Location>, opts: Options) {
  await store.dispatch(fetchMovies(''));
  const preloadedState = store.getState();
  const preload = () => {
    return `
    <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
    `;
  };
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
  return { stream, preload };
}
