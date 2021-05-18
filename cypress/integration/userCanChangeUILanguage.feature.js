describe('User can change UI Language', () => {

  before(() => {
    cy.visit('/')
  });

  context('clicking on Swedish', () => {
    it('is expected to show application name i Swedish', () => {
      cy.get('[data-cy=language-select]').contains('Swedish').click()
      cy.get('[data-cy=app-title]').should('contain.text', "FALSKA?NYHETER")
    });
  });

  context('clicking on English', () => {
    it('is expected to show application name i English', () => {
      cy.get('[data-cy=language-select]').contains('English').click()
      cy.get('[data-cy=app-title]').should('contain.text', "FAKE?NEWS")
    });
  });
});