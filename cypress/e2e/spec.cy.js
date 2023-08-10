describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com.br')
    cy.get('#APjFqb').type('facebook')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
    cy.get('.dmenKe > .cIkxbf > .usJj9c > h3 > .l').click()
    cy.screenshot()
  })
})