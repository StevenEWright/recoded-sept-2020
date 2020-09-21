
// Posts

/**
 * Creates a new Post on the website with the given title and message.
 *
 * The callback takes a single parameter:
 * {
 *   success: boolean,
 *   redirect_uri: string,
 *   error_message: string
 * }
 * redirect_uri will always be defined when success is true.
 * error_message will always be defined when success is false.
 * redirect_uri must only be used when success is true.
 */
function create_post(title, message, callback) {
  var post = {
    title: title,
    message: message
  };

  var success = false;
  var error_message = "";

  if (post.title.trim().length < 10) {
    error_message = "A post title is required (minimum 10 characters).";
  } else if (post.message.trim().length < 20) {
    error_message = "A post message is required (minimum 20 characters).";
  } else {
    success = true;
  }

  var result = {
    success: success,
    redirect_uri: "./view_post.html",
    error_message: error_message
  };
  callback(result);
}

/**
 * Either upvotes or removes an upvote for the currently logged in user for the
 * Post being displayed.
 *
 * There is no callback for this function - the website will assume it was
 * successful.
 */
function upvote(state) {
  var vote = {
    upvoted: state
  };
}

// Users

/**
 * Creates a new User on the website with the given username and password.
 *
 * The callback takes a single parameter:
 * {
 *   success: boolean,
 *   redirect_uri: string,
 *   error_message: string
 * }
 * redirect_uri will always be defined when success is true.
 * error_message will always be defined when success is false.
 * redirect_uri must only be used when success is true.
 */
function signup(username, password, callback) {
  var credentials = {
    username: username,
    password: password
  };

  var success = false;
  var error_message = "";

  if (credentials.username == "test") {
    error_message = "Username taken! Please try another!";
  } else if (credentials.password.length < 3) {
    error_message = "Your password is not long enough (3 character minimum)!";
  } else {
    success = true;
  }

  var result = {
    success: success,
    redirect_uri: "./post_list.html",
    error_message: error_message
  };
  callback(result);
}

/**
 * Signs the user into the website with the given username and password.
 *
 * The callback takes a single parameter:
 * {
 *   success: boolean,
 *   redirect_uri: string,
 *   error_message: string
 * }
 * redirect_uri will always be defined when success is true.
 * error_message will always be defined when success is false.
 * redirect_uri must only be used when success is true.
 */
function login(username, password, callback) {
  var credentials = {
    username: username,
    password: password
  };

  var success = false;
  var error_message = "";

  if (credentials.username != "test") {
    error_message = "We don't recognize your username. Did you want to sign up?";
  } else if (credentials.password != "123") {
    error_message = "Login failed.";
  } else {
    success = true;
  }

  var result = {
    success: success,
    redirect_uri: "./post_list.html",
    error_message: error_message
  };
  callback(result);
}
