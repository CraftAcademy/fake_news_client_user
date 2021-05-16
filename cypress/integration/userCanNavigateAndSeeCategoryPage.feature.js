describe('User is able to navigate to Category page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fake-newzzzzz.herokuapp.com/api/articles/', {
      fixture: 'articles.json',
    });

    cy.intercept('GET', 'https://fake-newzzzzz.herokuapp.com/api/articles/**', {
      fixture: 'categories.json',
    });

    cy.visit('/');
  });

  it('user is able to navigate to category page', () => {
    cy.get('[data-cy=category-bar]').within(() => {
      cy.get('[data-cy=category-button]').should('have.length', 5);
      cy.get('[data-cy=category-button]').first().click();
      cy.get('[data-cy=category-header]').should('contain', 'Aliens');
      cy.url().should('contain', 'http://localhost:3001/category');
    });
  });
});
