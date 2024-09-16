describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/fundamentals'),
    cy.get('[data-test="header-fundamentals"]').should("contain", "Testing Fundamentals")
  })
})