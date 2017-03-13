$(function() {
  if(window.location.href.includes("java")) {
    $("#courseTitle").text("JAVA");
    var photoCount = $(".photo").length;
    console.log("number of photos: " + photoCount);
    var javaPersonImg = "";
    for(i=0;i <= photoCount; i++) {
      javaPersonImg = "img/java-student" + i + ".png";
      $("#student" + i).attr({
        src: javaPersonImg,
        alt: 'student' + i
      });
    }
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