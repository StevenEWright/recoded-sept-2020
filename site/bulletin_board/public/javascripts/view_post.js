// UI Elements

var thumbs_up_on = $("#thumbs_up_on");
var thumbs_up_off = $("#thumbs_up_off");

/**
 * When the "Thumbs Up - ON" button is pressed, we call into application logic
 * to remove the upvote. We assume this call succeeds.
 */
thumbs_up_on.on("click", function(event){
  thumbs_up_off.show();
  thumbs_up_on.hide();

  upvote(false);

  event.preventDefault();
});

/**
 * When the "Thumbs Up - OFF" button is pressed, we call into application logic
 * to add an upvote. We assume this call succeeds.
 */
thumbs_up_off.on("click", function(event){
  thumbs_up_off.hide();
  thumbs_up_on.show();

  upvote(true);

  event.preventDefault();
});
