'use strict'

const store = require('../store.js')
const resetForms = () => {
  $('form').trigger('reset')
  $('.message').text('')
}

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('.startButtons').addClass('d-none')
  $('.signedInButtons').removeClass('d-none')
  store.user = data.user
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('.startButtons').addClass('d-none')
  $('.signedInButtons').removeClass('d-none')
  // show div with data like $('#div-id').removeClass('d-none')
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('.startButtons').removeClass('d-none')
  $('.signedInButtons').addClass('d-none')
  // hide div with data like $('#div-id').addClass('d-none')
  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const changePasswordFailure = function () {
  $('#message').text('Error on change password')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  resetForms
}
