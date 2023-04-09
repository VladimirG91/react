import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('renders HomePage component', () => {
    render(<HomePage />);
    const searchBar = screen.getByPlaceholderText('Введите название фильма, жанр, или год');
    expect(searchBar).toBeInTheDocument();
  });

  it('should fetch and display the correct movie on search', async () => {
    const searchTerm = 'Зеленая миля';
    render(<HomePage />);

    const searchInput = screen.getByPlaceholderText(/Введите название фильма, жанр, или год/i);
    userEvent.type(searchInput, searchTerm);

    await waitFor(() => screen.getByTestId('movie-list'));

    const movieList = screen.getByTestId('movie-list');
    expect(movieList).toBeInTheDocument();
  });

  const server = setupServer(
    rest.get('https://642c494a208dfe25472ca61d.mockapi.io/movies', (req, res, ctx) => {
      const searchTerm = req.url.searchParams.get('search');
      if (searchTerm === 'Зеленая миля') {
        return res(
          ctx.json([
            {
              id: '1',
              title: 'Зеленая миля',
            },
          ])
        );
      } else {
        return res(ctx.json([]));
      }
    }),

    rest.get('https://642c494a208dfe25472ca61d.mockapi.io/movies/:id', (req, res, ctx) => {
      const id = req.params.id;
      if (id === '1') {
        return res(
          ctx.json({
            id: '1',
            title: 'Зеленая миля',
          })
        );
      } else {
        return res(ctx.status(404));
      }
    })
  );
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
});
