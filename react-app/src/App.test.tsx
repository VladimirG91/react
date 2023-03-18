import React from 'react';
import { render, screen, fireEvent, getByAltText } from '@testing-library/react';
import NotFoundPage from './pages/NotFoundPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from 'pages/HomePage';
import Card from 'components/Card';

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    const notFoundElement = screen.getByText(/PAGE NOT FOUND/i);
    expect(notFoundElement).toBeInTheDocument();
  });
});

describe('AboutPage', () => {
  it('renders correctly', () => {
    render(<AboutPage />);
    const AboutElement = screen.getByText(/React project/i);
    expect(AboutElement).toBeInTheDocument();
  });
});
describe('Header component', () => {
  it('renders without errors', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('displays the current page title', async () => {
    render(
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    );

    const aboutLink = screen.getByText('About Us');
    fireEvent.click(aboutLink);

    // Add a delay to allow the state to update
    await new Promise((resolve) => setTimeout(resolve, 100));

    const pageTitle = screen.getByRole('heading', { level: 1 });
    expect(pageTitle).toHaveTextContent('About Us');
  });
});
describe('HomePage have 10 cards', () => {
  it('renders all the Card components', () => {
    const { getAllByTestId } = render(<HomePage />);
    const cards = getAllByTestId('card');
    expect(cards.length).toBe(10);
  });
});
describe('Card', () => {
  it('have img with alt, title, subtitle', () => {
    const img = 'card-img';
    const title = 'title';
    const subtitle = 'subtitle';
    const { getByText } = render(<Card title={title} subtitle={subtitle} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByAltText(img)).toBeInTheDocument();
  });
});
