// UI Elements

var post_form = $("#post_form");
var post_title = $("#post_title");
var post_message = $("#post_message");
var post_button = $("#post_button");
var post_error = $("#post_error");
var post_error_message = $("#post_error_message");

/**
 * When the "Create Post" form is submitted we call into our application logic
 * to create the post, and then we either redirect the user to their new post
 * or we show them an error.
 */
post_form.submit((event) => {
  var title = post_title.val();
  var message = post_message.val();

  // Hide any previous error
  post_error.hide();

  create_post(title, message, function(result){
    if (result.success) {
      document.location = result.redirect_uri;
    } else {
      post_error_message.text(result.error_message);
      post_error.show();
    }
  });

  event.preventDefault();
});
