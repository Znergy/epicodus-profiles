$(function() {
  if(window.location.href.includes("java")) {
    $("#courseTitle").text("JAVA");
    createProfiles("java");
    $(".photo-block").on('click', function() {
      var profileValue = $(this).attr("id");
      console.log(profileValue);
      document.location.href = "individual.html?pageid=java&profile=" + profileValue, true;
  });
  } else if (window.location.href.includes("ruby")) {
    $("#courseTitle").text("RUBY");
    createProfiles("ruby");
    $(".photo-block").on('click', function() {
      var profileValue = $(this).attr("id");
      console.log(profileValue);
      document.location.href = "individual.html?pageid=ruby&profile=" + profileValue, true;
    });
  } else if (window.location.href.includes("design")) {
    $("#courseTitle").text("DESIGN");
    createProfiles("design");
    $(".photo-block").on('click', function() {
      var profileValue = $(this).attr("id");
      console.log(profileValue);
      document.location.href = "individual.html?pageid=design&profile=" + profileValue, true;
    });
  } else if (window.location.href.includes("csharp")) {
    $("#courseTitle").text("C#/.NET");
   createProfiles("csharp");
    $(".photo-block").on('click', function() {
      var profileValue = $(this).attr("id");
      console.log(profileValue);
      document.location.href = "individual.html?pageid=csharp&profile=" + profileValue, true;
    });
  } else if (window.location.href.includes("php")) {
    $("#courseTitle").text("PHP");
    createProfiles("php");
    $(".photo-block").on('click', function() {
      var profileValue = $(this).attr("id");
      document.location.href = "individual.html?pageid=php&profile=" + profileValue, true;
    });
  } else {
    $("#courseTitle").text("ERROR: PAGE NOT FOUND");
  }
});

// global name arrays
var designNameArray = ["Design Man", "Tyler Jones", "Sarah Smith", "Chase Wellington"];
var csharpNameArray = ["C# Man", "Tyler Jones", "Sarah Smith", "Chase Wellington"];
var rubyNameArray = ["Ruby Man", "Tyler Jones", "Sarah Smith", "Chase Wellington"];
var phpNameArray = ["PHP Man", "Tyler Jones", "Sarah Smith", "Chase Wellington"];
var blankNameArray = ["Jerry Lewis", "Bob Hope", "Test", "Cassy Smith"];



var javaNameArray = ["Ryan Jones", "Josh Linton", "Chance Magno", "Oliver Fu", "Clifford Grimmell"];

// use the name array length to generate the amount of img/h3s

function createProfiles(course) {
  for (i=0; i < javaNameArray.length; i++) {
    var profileCount = i + 1;
    var name = javaNameArray[i];
    console.log("Name: " + name);
    if(i >= 0 && i < 4) {
      $('#row1').append('<div class="col-md-3 photo-block well" id="profile' + profileCount + '">' +
            '<img id="student' + profileCount + '" src="img/' + course + '-profile' + profileCount + '.jpeg" class="img-responsive photo" alt="">' +
            '<h4>' + name + '</h4>' +
            '</div>');
    } else if(i >= 4 && i < 8) {
      $('#row2').append('<div class="col-md-3 photo-block well" id="profile' + profileCount + '">' +
            '<img id="student' + profileCount + '" src="img/' + course + '-profile' + profileCount + '.jpeg" class="img-responsive photo" alt="">' +
            '<h4>' + name + '</h4>' +
            '</div>');
    } else if (i >= 8 && i < 12) {
      $('#row3').append('<div class="col-md-3 photo-block well" id="profile' + profileCount + '">' +
            '<img id="student' + profileCount + '" src="img/' + course + '-profile' + profileCount + '.jpeg" class="img-responsive photo" alt="">' +
            '<h4>' + name + '</h4>' +
            '</div>');
    } else if (i >= 12 && i < 16) {
      $('#row4').append('<div class="col-md-3 photo-block well" id="profile' + profileCount + '">' +
            '<img id="student' + profileCount + '" src="img/' + course + '-profile' + profileCount + '.jpeg" class="img-responsive photo" alt="">' +
            '<h4>' + name + '</h4>' +
            '</div>');
    } else if (i >= 16 && i < 20) {
      $('#row5').append('<div class="col-md-3 photo-block well" id="profile' + profileCount + '">' +
            '<img id="student' + profileCount + '" src="img/' + course + '-profile' + profileCount + '.jpeg" class="img-responsive photo" alt="">' +
            '<h4>' + name + '</h4>' +
            '</div>');
    } else if (i >= 20 && i < 24) {
      $('#row6').append('<div class="col-md-3 photo-block well" id="profile' + profileCount + '">' +
            '<img id="student' + profileCount + '" src="img/' + course + '-profile' + profileCount + '.jpeg" class="img-responsive photo" alt="">' +
            '<h4>' + name + '</h4>' +
            '</div>');
    } else if (i >= 24 && i < 28) {
      $('#row7').append('<div class="col-md-3 photo-block well" id="profile' + profileCount + '">' +
            '<img id="student' + profileCount + '" src="img/' + course + '-profile' + profileCount + '.jpeg" class="img-responsive photo" alt="">' +
            '<h4>' + name + '</h4>' +
            '</div>');
    } else if (i >= 28 && i < 32) {
      $('#row8').append('<div class="col-md-3 photo-block well" id="profile' + profileCount + '">' +
            '<img id="student' + profileCount + '" src="img/' + course + '-profile' + profileCount + '.jpeg" class="img-responsive photo" alt="">' +
            '<h4>' + name + '</h4>' +
            '</div>');
    } else if (i >= 32 && i < 36) {
      $('#row9').append('<div class="col-md-3 photo-block well" id="profile' + profileCount + '">' +
            '<img id="student' + profileCount + '" src="img/' + course + '-profile' + profileCount + '.jpeg" class="img-responsive photo" alt="">' +
            '<h4>' + name + '</h4>' +
            '</div>');
    }
  }
}



//function setBlankImages() {
//  var photoCount = $(".photo").length;
//    var PersonImg = "";
//    for(i=0;i <= photoCount; i++) {
//      PersonImg = "img/grey-person.png";
//      $("#student" + i).attr({
//        src: PersonImg,
//        alt: 'grey person'
//      });
//    }
//}
//
//
//function setImages(name) {
//  var photoCount = $(".photo").length;
//    var PersonImg = "";
//    for(i=0;i <= photoCount; i++) {
//      PersonImg = "img/" + name + "-profile" + i + ".jpeg";
//      $("#student" + i).attr({
//        src: PersonImg,
//        alt: 'student' + i
//      });
//    }
//}



//function setNames(name) {
//  console.log("setNames started");
//  var photoCount = $(".photo").length;
//  var arrayTemp = [];
//  if(name === "java") {
//    arrayTemp = javaNameArray;
//  } else if (name === "ruby") {
//    arrayTemp = rubyNameArray;
//  } else if (name === "php") {
//    arrayTemp = phpNameArray;
//  } else if (name === "csharp") {
//    arrayTemp = csharpNameArray;
//  } else if (name === "design") {
//    arrayTemp = designNameArray;
//  } else if (name === "blank") {
//    arrayTemp = blankNameArray;
//  }
//  
//  console.log(arrayTemp);
//  console.log(arrayTemp.length);
//  
//  // only grabbing the array value at index 2..
//  // ignoring the break statement in our for loop
//  for(i=0;i <= arrayTemp.length; i++) {
//    var value = arrayTemp[i];
//    var childCount = i+1;
////    $("h4:nth-child(" + i+1 + ")").text(value);
//    $("div.photo-block:nth-child(" + childCount + ")").append("<h4>" + value + "</h4>");
//    console.log("Current loop: " + arrayTemp[i]);
//  }
//}