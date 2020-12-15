import {alertTab, user, authLocators} from "../support/locators";

describe('User', () => {
  const {loader, regBtn} = authLocators
  const {alert} = alertTab

  it('fill all the gaps', () => {
    cy.visit('/register')
    cy.getEl(regBtn).click()
  })
})
