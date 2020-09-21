// UI Elements

var login_form = $("#login_form");
var login_dialog = $("#login_dialog");
var login_username = $("#login_username");
var login_password = $("#login_password");
var login_button = $("#login_button");
var login_error = $("#login_error");
var login_error_message = $("#login_error_message");
var show_create_user_button = $("#show_create_user_button");

var create_user_form = $("#create_user_form");
var create_user_dialog = $("#create_user_dialog");
var create_user_username = $("#create_user_username");
var create_user_password = $("#create_user_password");
var create_user_password_confirmation = $("#create_user_password_confirmation");
var create_user_button = $("#show_create_user_button");
var create_user_error = $("#create_user_error");
var create_user_error_message = $("#create_user_error_message");
var show_login_button = $("#show_login_button");

/**
 * Toggles from showing the Create Account screen to showing the Login screen.
 */
show_login_button.on("click", (event) => {
  create_user_dialog.hide();
  login_dialog.show();
});

/**
 * Toggles from showing the Login screen to showing the Create Account screen.
 */
show_create_user_button.on("click", (event) => {
  create_user_dialog.show();
  login_dialog.hide();
});

/**
 * When the "Login" form is submitted we call into our application logic
 * to sign-in the user, and then we either redirect the user to the recent
 * posts page if they signed-in successfully, or we show them an error.
 */
login_form.on("submit", (event) => {
  var username = login_username.val();
  var password = login_password.val();

  login_error.hide();

  login(username, password, (result) => {
    if (result.success) {
      document.location = result.redirect_uri;
    } else {
      login_error_message.text(result.error_message);
      login_error.show();
    }
  });

  event.preventDefault();
});

/**
 * When the "Create Account" form is submitted we call into our application
 * logic to sign-in the user, and then we either redirect the user to the recent
 * posts page if they signed-in successfully, or we show them an error.
 */
create_user_form.on("submit", (event) => {
  var username = create_user_username.val();
  var password = create_user_password.val();
  var password_confirmation = create_user_password_confirmation.val();

  if (password != password_confirmation) {
    create_user_error_message.text("Passwords do not match!");
    create_user_error.show();
  } else {
    create_user_error.hide();

    signup(username, password, (result) => {
      if (result.success) {
        document.location = result.redirect_uri;
      } else {
        create_user_error_message.text(result.error_message);
        create_user_error.show();
      }
    });
  }

  event.preventDefault();
});

