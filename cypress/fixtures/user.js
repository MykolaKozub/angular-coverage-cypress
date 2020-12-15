export const loginUserData = (firstName, lastName, username, password, idUser = 1) => ([
  {
    firstName,
    lastName,
    username,
    password,
    "id": idUser
  }
])
