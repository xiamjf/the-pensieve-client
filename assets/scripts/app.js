'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const authUi = require('./auth/ui.js')
const postEvents = require('./posts/events.js')

$(() => {
  picEvents.onGetAllPictures()
  $('#multipart-form-data').on('submit', picEvents.onFormSubmit)
  $('#edit-photo-form-data').on('submit', picEvents.onModifyFormSubmit)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#create-comment').on('submit', commentEvents.onCreateComment)
  // $('#delete-comment-button').on('click', commentEvents.onDeleteCommentClick)
  $('#delete-comment-submit').on('click', commentEvents.onDeleteCommentSubmit)
  $('#delete-picture-submit').on('click', picEvents.onDeletePicture)
  $('.modal').on('hide.bs.modal', authUi.resetForms)
  // Hide/show animation hamburger function
  $('.navbar-toggler').on('click', function () {
  // Take this line to first hamburger animations
    $('.animated-icon1').toggleClass('open')
  })

  $('#my-photos').on('click', picEvents.onGetAllUserPictures)
  $('#all-photos').on('click', picEvents.onGetAllPictures)
})
