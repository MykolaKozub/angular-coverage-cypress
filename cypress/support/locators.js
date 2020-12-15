export const user = {
  name: {key: 'firstName', value: 'Nikolay'},
  lastName: {key:'lastName', value: 'Kozub'},
  userName: {key:'username', value: Cypress.config('username')},
  pass: {key:'password', value: Cypress.config('password')},
}

export const authLocators = {
  regBtn: 'register',
  loader: 'loader',
  loginBtn: 'login',
  loginName: 'loginName',
  loginPass: 'loginPass'
}

export const alertTab = {
  alert: 'alert'
}

export const homePage = {
  userName: 'userName',
  listItem: 'item',
}
