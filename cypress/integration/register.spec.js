describe('Test describe', () => {
  it('should visit login page', () => {
    cy.visit('/login')
    cy.getEl('register').click()

    cy.url().should('include', '/register')
  })
})

