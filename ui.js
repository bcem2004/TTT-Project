'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signInSuccess = (response) => {
  console.log(response)

  store.user = response.user
}

const signUpFailure = (error) => {
  console.error(error)
}
const signInFailure = (error) => {
  console.error(error)
}
const changePasswordSuccess = response => {
  console.log(response)
}
const changePasswordFailure = (error) => {
  console.log(error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
