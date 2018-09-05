$(document).ready(function() {
  console.log("connected");
  $(".submit-btn").click(function(event) {
    event.preventDefault();
    var userData = {
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim()
    };
    console.log(userData);
    $.post("/api/login", userData).then(function(data){
      window.location.replace(data);
    });
 
    $("#email-input").val("");
    $("#password-input").val("");
  });
});  