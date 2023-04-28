import React from 'react';
import { Provider } from 'react-redux';
import { RootState, setupStore } from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import { App } from 'App';

import './index.css';

type CustomWindowInstanse = Window &
  typeof globalThis & {
    __PRELOADED_STATE__?: RootState;
  };
const store = setupStore((window as CustomWindowInstanse).__PRELOADED_STATE__);
delete (window as CustomWindowInstanse).__PRELOADED_STATE__;

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
