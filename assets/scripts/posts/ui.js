const onGetAllPostsSuccess = function(response){
  // empty content element
  $('#content').html('')

  // loop through API response data
  response.posts.forEach(post => {

    // build HTML element with data
    const postHTML = (`
      <h4>Date: ${post.created_at}</h4>
      <p>Body: ${post.body}</p>
      <p>ID: ${post.id}</p>
      <br>
    `)

    // append bookHTML to content
    $('#content').append(postHTML)
  })
}

const onGetOnePostSuccess = function (response) {

  const postHTML = (`
    <h4>Date: ${response.post.created_at}</h4>
    <p>Body: ${response.post.body}</p>
    <br>
  `)

  $('#content').html(postHTML)

  // reset form
  $('#posts-show').trigger("reset")
}

const onDeletePostSuccess = function(){

  $('#content').html("Post successfully deleted!")

  // reset form
  $('#posts-delete').trigger("reset")
}

const onUpdatePostSuccess = function (response) {
  $('#content').html('You successfully updated a post')
  // reset form
  $('#posts-update').trigger("reset")
}

const onCreatePostSuccess = function () {
  $('#content').html('You created a new post!')
  // reset form
  $('#posts-create').trigger("reset")
}

const onError = (response) => {
  console.error(response)
  $('#content').html('Something went wrong, please try again.')
}

module.exports = {
  onCreatePostSuccess,
  onError,
  onUpdatePostSuccess,
  onDeletePostSuccess,
  onGetOnePostSuccess,
  onGetAllPostsSuccess,
}
