var newPassword = $("#profile_password")
var oldPassword = $("#oldPassword")
var confirmPassword = $("#confirmPassword")
$("#save_button").click((event) => {
    console.log(newPassword,oldPassword,confirmPassword);
    if(newPassword.val() == confirmPassword.val())
    
{
    edit_password(newPassword.val(), oldPassword.val(), confirmPassword.val(),function(result){
    if (result.success) {
      document.location = "/";

    } else {
      profile_error_message.text(result.error_message);
      profile_error.show();
    }
  });
  
  
  
}
else
  {
    create_user_error_message.text("Passwords do not match!");
    create_user_error.show();
  }
  })
  
  



