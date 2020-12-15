import { authLocators, user, homePage } from '../support/locators'
import { loginUserData } from '../fixtures/user'
const { name, lastName, userName, pass } = user

describe('login', () => {
  before(() => {
    cy.setItem('users', loginUserData(name.value, lastName.value, userName.value, pass.value))
    cy.visit('/login')
    cy.getEl(authLocators.loginName).type(Cypress.config('username'))
    cy.getEl(authLocators.loginPass).type(Cypress.config('password'))

    cy.intercept('GET', '**/posts').as('alias')
    cy.getEl(authLocators.loginBtn).click()
  })

  it('should login user page', () => {
    cy.wait('@alias').then(req => {
      const { body } = req.response
      const firstTenItems = body.splice(0, 10).map(el => el.title)

      firstTenItems.forEach((el, idx) =>
        cy
          .getEl(homePage.listItem)
          .eq(idx)
          .then(element => expect(element.text()).contains(el)),
      )
      cy.getEl(homePage.userName).should('contain.text', name.value)
    })
  })
})
