const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onGetAllPosts = function(event){

  // prevent default submit action
  event.preventDefault()

  // make API call
  api.getAllPosts()

  // if API call is successful then
  .then(ui.onGetAllPostsSuccess)

  // if API call fails then
  .catch(ui.onError)

}

const onGetOnePost = function (event) {
  event.preventDefault()

  // create js object from user form data
  const data = getFormFields(event.target)

  // input validation
  if (data.post.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {

    // make API call with data
    api.getOnePost(data)
      .then(ui.onGetOnePostSuccess)
      .catch(ui.onError)
  }
 }

const onDeletePost = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  // input validation
  if (data.post.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {
    api.deletePost(data)
      .then(ui.onDeletePostSuccess)
      .catch(ui.onError)
  }
}

const onUpdatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  // input validation
  if (data.post.body === '') {
    $('#content').html('<p>Some text is required</p>')

  }  else if (data.post.id === '') {
    $('#content').html('<p>ID is required</p>')

  } else {
    api.updatePost(data)
      .then(ui.onUpdatePostSuccess)
      .catch(ui.onError)
  }
}

const onCreatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  // input validation
  if (data.post.body === '') {
    $('#content').html('<p>Some text is required</p>')

  } else {
    api.createPost(data)
      .then(ui.onCreatePostSuccess)
      .catch(ui.onError)
  }
}

const addHandlers = () => {
  $('#posts-create').on('submit', onCreatePost)
  $('#posts-index').on('submit', onGetAllPosts)
  $('#posts-show').on('submit', onGetOnePost)
  $('#posts-delete').on('submit', onDeletePost)
  $('#posts-update').on('submit', onUpdatePost)
}


module.exports = {
  addHandlers
}
