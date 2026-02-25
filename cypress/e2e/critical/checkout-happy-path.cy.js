import { faker } from '@faker-js/faker'
import { valid } from '../../fixtures/cep.json'


describe('Critical Flow - Checkout Happy Path', () => {

  beforeEach(() => {
    cy.login('standard_user')
  })

  it('should complete purchase successfully', () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()

    cy.addProductByIndex(0)
    cy.goToCart()
    cy.startCheckout()
    cy.fillInformationsAndClickContinue({ first: firstName, last: lastName, postal: valid.cep })
    cy.finishCheckout()

    cy.contains('Thank you for your order!')
      .should('exist')
  })
})