import {alertTab, user, authLocators} from "../support/locators";

describe('User', () => {
  const {loader, regBtn} = authLocators
  const {alert} = alertTab

  it('fill all the gaps', () => {
    cy.visit('/register')
    Object.values(user).forEach(el => cy.getEl(el.key).type(el.value))
    cy.getEl(regBtn).click()

    cy.getEl(loader).should('be.visible')
    cy.getEl(loader).should('not.exist')
    cy.url().should('include', '/login');
    cy.getEl(alert).should('contains.class', 'alert-success');
    cy.getEl(alert).should('contain', 'successful');
  })
})
