describe('ui: TopicButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=topicbutton--primary&args=topicName;onClick;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TopicButton!');
    });
});
