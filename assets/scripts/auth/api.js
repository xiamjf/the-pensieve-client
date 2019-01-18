const store = require('../store.js')
const config = require('../config.js')

/// /////////////////////
//                    //
//  USER API actions  //
//                    //
/// /////////////////////

// changePassword() is used to update the API to change a user's password
const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// signIn() logs in an existing user on the API, returning an authentication
// token
const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

// signOut() logs a signed-in usr out
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// signUp() creates a new user on the API
const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

module.exports = {
  // sendFormData,
  signIn,
  signUp,
  changePassword,
  signOut
}
