$(document).ready(function() {
  console.log("connected");
  $(".submit-btn").click(function(event) {
    event.preventDefault();
    var userData = {
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim()
    };
    console.log(userData);
    if (!userData.email || !userData.password) {
      return;
    }
    
    loginUser(userData.email, userData.password);
    $("#email-input").val("");
    $("#password-input").val("");
  });

  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }
});