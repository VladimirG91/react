import { render, screen } from '@testing-library/react';

import { Popup } from './Popup';

const movie = {
  title: 'Зеленая миля',
  description:
    'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
  releaseDate: '1999',
  genre: 'драма, фэнтези, криминал',
  imageSrc:
    'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/2ac4b295-bdd0-423b-8799-4c3736dfd92e/1920x',
  country: 'США',
  director: 'Фрэнк Дарабонт',
  scenario: 'Фрэнк Дарабонт, Стивен Кинг',
  id: '1',
};

describe('Popup', () => {
  test('renders null if isOpen is false', () => {
    const { container } = render(<Popup isOpen={false} onClose={() => {}} movie={movie} />);
    expect(container.firstChild).toBeNull();
  });

  test('renders null if movie is null', () => {
    const { container } = render(<Popup isOpen={true} onClose={() => {}} movie={null} />);
    expect(container.firstChild).toBeNull();
  });
  it('renders movie details', () => {
    render(<Popup isOpen={true} onClose={() => {}} movie={movie} />);
    const title = screen.getByText(/зеленая миля/i);
    const country = screen.getByText(/сша/i);

    expect(title).toBeInTheDocument();
    expect(country).toBeInTheDocument();
  });
});
