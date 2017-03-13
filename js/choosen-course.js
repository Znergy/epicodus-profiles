$(function() {
  if(window.location.href.includes("java")) {
    $("#courseTitle").text("JAVA");
    setBlankImages();
    setNames("blank");
    // when a photo-block is clicked 
    $(".photo-block").on('click', function() {
      // going to pass student clicked somehow then use that student + i in the url
      // to show the correct student profile in individual.html
      window.location.replace("individual.html?pageid=java&student=student");
  });
//    setImages("java"); // how to set all images
  } else if (window.location.href.includes("ruby")) {
    $("#courseTitle").text("RUBY");
    setBlankImages();
    setNames("blank");
    //    setImages("ruby"); // how to set all images
  } else if (window.location.href.includes("design")) {
    $("#courseTitle").text("DESIGN");
    setBlankImages();
    setNames("blank");
    //    setImages("design"); // how to set all images
  } else if (window.location.href.includes("csharp")) {
    $("#courseTitle").text("C#/.NET");
    setBlankImages();
    setNames("blank");
    //    setImages("csharp"); // how to set all images
  } else if (window.location.href.includes("php")) {
    $("#courseTitle").text("PHP");
    setBlankImages();
    setNames("blank");
    //    setImages("php"); // how to set all images
  } else {
    $("#courseTitle").text("ERROR: PAGE NOT FOUND");
  }
});

// global name arrays
var javaNameArray = ["Java Man", "Tyler Jones", "Sarah Smith", "Chase Wellington"];
var designNameArray = ["Design Man", "Tyler Jones", "Sarah Smith", "Chase Wellington"];
var csharpNameArray = ["C# Man", "Tyler Jones", "Sarah Smith", "Chase Wellington"];
var rubyNameArray = ["Ruby Man", "Tyler Jones", "Sarah Smith", "Chase Wellington"];
var phpNameArray = ["PHP Man", "Tyler Jones", "Sarah Smith", "Chase Wellington"];
var blankNameArray = ["Jerry Lewis", "Bob Hope", "Test", "Cassy Smith", "Darlington Nagbe", 
                     "Jerry Lewis", "Bob Hope", "Leeroy Jenkins", "Cassy Smith", "Darlington Nagbe",
                     "Jerry Lewis", "Bob Hope", "Leeroy Jenkins", "Cassy Smith", "Darlington Nagbe",
                     "Jerry Lewis", "Bob Hope", "Leeroy Jenkins", "Cassy Smith", "Darlington Nagbe",
                     "Jerry Lewis", "Bob Hope", "Leeroy Jenkins", "Cassy Smith", "Darlington Nagbe",
                     "Jerry Lewis", "Bob Hope", "Leeroy Jenkins", "Cassy Smith", "Darlington Nagbe",
                     "Jerry Lewis", "Bob Hope", "Leeroy Jenkins", "Cassy Smith", "Darlington Nagbe", "George Clooney"];

function setNames(name) {
  console.log("setNames started");
  var photoCount = $(".photo").length;
  var arrayTemp = [];
  if(name === "java") {
    arrayTemp = javaNameArray;
  } else if (name === "ruby") {
    arrayTemp = rubyNameArray;
  } else if (name === "php") {
    arrayTemp = phpNameArray;
  } else if (name === "csharp") {
    arrayTemp = csharpNameArray;
  } else if (name === "design") {
    arrayTemp = designNameArray;
  } else if (name === "blank") {
    arrayTemp = blankNameArray;
  }
  
  console.log(arrayTemp);
  console.log(arrayTemp.length);
  debugger;
  
  // only grabbing the array value at index 2..
  // ignoring the break statement in our for loop
  for(i=0;i <= arrayTemp.length; i++) {
    var value = arrayTemp[i];
    var childCount = i+1;
//    $("h4:nth-child(" + i+1 + ")").text(value);
    $("div.photo-block:nth-child(" + childCount + ")").append("<h4>" + value + "</h4>");
    console.log("Current loop: " + arrayTemp[i]);
  }
}

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