$(function() {
  $("#loginForm").submit(function(event) {
    event.preventDefault();
    var unInput = $("#usernameInput").val();
    var pwInput = $("#passwordInput").val();
    var unIsValid = validateUser(unInput);
    console.log("Username is valid: " + unIsValid);
    var pwIsValid = validatePass(pwInput);
    console.log("Password is valid: " + pwIsValid);
    if (!unIsValid && !pwIsValid) {
      hasError(1);
      hasError(2);
    } else if (pwIsValid && !unIsValid) {
      hasSuccess(2);
      hasError(1);
    } else if (unIsValid && !pwIsValid) {
      hasSuccess(1);
      hasError(2);
    } else if (unIsValid && pwIsValid) {
      hasSuccess(1);
      hasSuccess(2);
      setTimeout(function() {
        document.location.href = "courses.html", true;
      }, 2000);
    }
  });
  
  
});

/**
* Front End logic
*/
function hasSuccess(child) {
  $("div.input-group:nth-child(" + child + ")").removeClass("has-feedback has-error has-success");
  console.log("hasSuccess working");
  $("div.input-group:nth-child(" + child + ")").addClass("has-feedback has-success");
  $("div.input-group:nth-child(" + child + ")").find('span').not(":first").remove();
  $("div.input-group:nth-child(" + child + ")").append("<span class='glyphicon glyphicon-ok form-control-feedback'></span>");
}

function hasError(child) {
  console.log("hasError working");
  $("div.input-group:nth-child(" + child + ")").removeClass("has-feedback has-error has-success");
  $("div.input-group:nth-child(" + child + ")").addClass("has-feedback has-error");
  $("div.input-group:nth-child(" + child + ")").find('span').not(":first").remove();
  $("div.input-group:nth-child(" + child + ")").append("<span class='glyphicon glyphicon-remove form-control-feedback'></span>");
}

/**
* Back End logic
*/
function validateUser(uName) {
  var name = "student";
  if((uName === "") || (uName !== name)) {
    return false;
  } else {
    return true;
  }
}

function validatePass(uPass) {
  var pw = "alwaysBeCoding";
  if((uPass === "") || (uPass !== pw)) {
    return false;
  } else {
    return true;
  }
}
  
  