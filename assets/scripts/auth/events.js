const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(() => api.signIn(data))
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignIn,
  onSignUp,
  onChangePassword,
  onSignOut
}
