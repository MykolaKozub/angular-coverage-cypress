// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('getEl', name => cy.get(`[data-cy="${name}"]`))

Cypress.Commands.add('setItem', (keyName, data) => localStorage.setItem(
  keyName,
  JSON.stringify(data),
  )
)

Cypress.Commands.add('clearSession', token => localStorage.removeItem(token))

Cypress.Commands.add('login', (url) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: {
      username: Cypress.config('username'),
      password: Cypress.config('password')
    }
  }).then((response) => {
    localStorage.setItem('token', response.body);
  });
});
