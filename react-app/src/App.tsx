import React, { Component } from 'react';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { FormPage } from 'pages/FormPage';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/form'} element={<FormPage />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
      </>
    );
  }
}

export { App };
