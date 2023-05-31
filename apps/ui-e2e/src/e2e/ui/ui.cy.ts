describe('ui: MyNewLib component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mynewlib--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to MyNewLib!');
    });
});
