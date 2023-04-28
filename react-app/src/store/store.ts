import moviesSlice from './moviesSlice';
import searchBarSlice from './searchBarSlice';
import cardFormSlice from './cardFormSlice';
import popupSlice from './popupSlice';
import * as toolkitRaw from '@reduxjs/toolkit';
export type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { combineReducers, configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

const rootReducer = combineReducers({
  search: searchBarSlice,
  movies: moviesSlice,
  popup: popupSlice,
  form: cardFormSlice,
});
export const setupStore = (
  preloadedState?: toolkitRaw.PreloadedState<ReturnType<typeof rootReducer>>
) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
