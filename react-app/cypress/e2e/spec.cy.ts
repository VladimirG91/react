import '@cypress/code-coverage/support';
describe('Open the Home Page', () => {
  it('Visits the Home Page and follow the links ', () => {
    cy.visit('');
    cy.get('.header-links').children('.active').should('contain', 'Home Page');
    cy.contains('About Us').click();
    cy.url().should('include', '/about');
    cy.get('.header-links').children('.active').should('contain', 'About Us');
    cy.contains('Form Page').click();
    cy.url().should('include', '/form');
    cy.get('.header-links').children('.active').should('contain', 'Form Page');
  });
});
describe('Search movies on Home Page', () => {
  it('Search movie by name', () => {
    cy.visit('');
    cy.get('.form-input').focus().type('поттер');
    cy.get('.form-search').submit();
    cy.get('.movie-list').children().should('have.length', 4);
    cy.get('.form-input').should('have.value', 'поттер').clear().should('have.value', '');
    cy.get('.form-input').focus().type('пираты');
    cy.get('.form-search').submit();
    cy.get('.movie-list').children().should('have.length', 3);
  });
});
describe('Open and close popup', () => {
  it('Open popup', () => {
    cy.visit('');
    cy.get('.movie-list').children().first().click();
    cy.get('div').should('have.class', 'popup popupContainer');
    cy.get('.close_btn').click();
    cy.get('.movie-list').children().first().next().click();
    cy.get('div').should('have.class', 'popup popupContainer');
    cy.get('.close_btn').click();
  });
});
describe('Open the About Page', () => {
  it('Visits the About Page', () => {
    cy.visit('/about');
    cy.contains('Home Page').click();
    cy.url().should('include', '');
    cy.contains('About Us').click();
    cy.url().should('include', '/about');
  });
});
describe('Open the Form Page', () => {
  it('Visits the Form Page', () => {
    cy.visit('/form');
    cy.contains('Home Page').click();
    cy.url().should('include', '');
    cy.contains('Form Page').click();
    cy.url().should('include', '/form');
  });
  it('Fill out the form and generate one movie', () => {
    cy.visit('/form');
    cy.get('[name ="title"]').type('Леон');
    cy.get('[name ="description"]').type(
      'Профессиональный убийца Леон, не знающий пощады и жалости, знакомится со своей очаровательной соседкой Матильдой, семью которой расстреливают полицейские, замешанные в торговле наркотиками. Благодаря этому знакомству он впервые испытывает чувство любви, но…'
    );
    cy.get('[name ="releaseDate"]').type('1994-09-14');
    cy.get('.genre-select').should('have.value', '--Select a genre--');
    cy.get('.genre-select').select('Drama');
    cy.get('.genre-select').should('have.value', 'drama');
    cy.get('[type="checkbox"]').not('[disabled]').check().should('be.checked');
    cy.get('[type="radio"]').check('yes').should('be.checked');
    cy.get('[type="file"]').selectFile('./src/assets/1.webp');
    cy.get('form').submit();
    cy.get('.movie-list').children().should('have.length', 1);
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });
});
