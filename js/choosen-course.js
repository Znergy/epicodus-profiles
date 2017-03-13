$(function() {
  if(window.location.href.includes("java")) {
    $("#courseTitle").text("JAVA");
    setBlankImages();
//    setImages("java"); // how to set all images
  } else if (window.location.href.includes("ruby")) {
    $("#courseTitle").text("RUBY");
    setBlankImages();
    //    setImages("ruby"); // how to set all images
  } else if (window.location.href.includes("design")) {
    $("#courseTitle").text("DESIGN");
    setBlankImages();
    //    setImages("design"); // how to set all images
  } else if (window.location.href.includes("csharp")) {
    $("#courseTitle").text("C#/.NET");
    setBlankImages();
    //    setImages("csharp"); // how to set all images
  } else if (window.location.href.includes("php")) {
    $("#courseTitle").text("PHP");
    setBlankImages();
    //    setImages("php"); // how to set all images
  }
});

function setBlankImages() {
  var photoCount = $(".photo").length;
    var PersonImg = "";
    for(i=0;i <= photoCount; i++) {
      PersonImg = "img/grey-person.png";
      $("#student" + i).attr({
        src: PersonImg,
        alt: 'grey person'
      });
    }
}


function setImages(name) {
  var photoCount = $(".photo").length;
    var PersonImg = "";
    for(i=0;i <= photoCount; i++) {
      PersonImg = "img/" + name + "-student" + i + ".png";
      $("#student" + i).attr({
        src: PersonImg,
        alt: 'student' + i
      });
    }
}