const store = require('../store.js')
const config = require('../config.js')
// const authEvents = require('./events.js')

const createPost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePost = data => {
  return $.ajax({
    url: config.apiUrl + '/posts/' + data.post.id,
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllPosts = () => {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET'
  })
}

const getOnePost = (id) => {
  return $.ajax({
    url: config.apiUrl + '/posts/' + id.post.id,
    method: 'GET'
  })
}

const deletePost = (id) => {
  return $.ajax({
    url: config.apiUrl + '/posts/' + id.post.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  deletePost,
  createPost,
  getAllPosts,
  getOnePost,
  updatePost
}
