$(function() {
  if(window.location.href.includes("java")) {
    $("#courseTitle").text("JAVA");
  } else if (window.location.href.includes("ruby")) {
    $("#courseTitle").text("RUBY");
  } else if (window.location.href.includes("design")) {
    $("#courseTitle").text("DESIGN");
  } else if (window.location.href.includes("csharp")) {
    $("#courseTitle").text("C#/.NET");
  } else if (window.location.href.includes("php")) {
    $("#courseTitle").text("PHP");
  }
});