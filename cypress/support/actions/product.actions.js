Cypress.Commands.add('addProductByIndex', (index) => {
  cy.get('.inventory_item').eq(index).contains('Add to cart').click()
})