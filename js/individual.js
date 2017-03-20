$(function() {
  if(window.location.href.includes("java")) {
    
    
    
    
    
    
    
    // logic for setting name and photo
    var arrayOfProfileInfo = getImagePath("java");
    var profileNumber = arrayOfProfileInfo[1] - 1; // have to correct for index #
    var imagePath = arrayOfProfileInfo[0];
    
    // name, description, interesting, github code
    var arrayOfUserInfo = setName("java", profileNumber);
    var name = arrayOfUserInfo[0];
    var description = arrayOfUserInfo[1];
    var interesting = arrayOfUserInfo[2];
    var github = arrayOfUserInfo[3];
    
    // Setting the values..
    $("#name").text(name);
    $("#description").text(description);
    $("#interesting").text(interesting);
    $("#github").attr({
      href: github 
    });
    $("#profilePic").attr({
      src: "img/" + imagePath,
      alt: name
    });
    
    
    
  } else if (window.location.href.includes("ruby")) {
    
    
    
    
  } else if (window.location.href.includes("design")) {
    
    
    
    
  } else if (window.location.href.includes("csharp")) {
    
    
    
    
  } else if (window.location.href.includes("php")) {
    
    
    
    
  } else {
    
    
    
    
  }
});


var javaNameArray = ["Ryan Jones", "Josh Linton", "Chance Magno", "Oliver Fu", "Clifford Grimmell", "Dallas"];
var javaDescriptionArray = ["I build native Android applications using Java, and browser applications using JavaScript. I also have experience with SQL, JQuery, and HTML/CSS.", "I'm an aspiring developer.", "Current student at Epicodus.", "Attending Epicodus. Previous experience in Urban Studies and Planning and Geographic Information Systems.", "I am an aspiring Dev Ops engineer and want to work with AWS.", "Long time hacking hobbyist, currently studying Java/Android. All hail the future of JavaScript. Let's make games!"];
var javaInterestingArray = ["I'm a die hard Timbers fan.", "Nintendo Switch is the bees knees 🐝.", "Cars, family, and gaming.", "I like sunshine, traveling, dogs and movies.", "My favorite book is Lord of the Rings.", "I'm a beer afficuanado and half-baked wine steward. "];
var javaGithubArray = ["https://github.com/znergy", "https://github.com/leb0x", "https://github.com/chancemagno", "https://github.com/ofu997", "https://github.com/grimmello", "https://github.com/slaughtr"];

function setName(name, number) {
  var profileDescription = "";
  var profileName = "";
  var profileGithub = "";
  var profileInteresting = "";
  var array = [];
  
  if(name === "java") {
    profileName = javaNameArray[number];
    profileDescription = javaDescriptionArray[number];
    profileInteresting = javaInterestingArray[number];
    profileGithub = javaGithubArray[number];
  } else if (name === "ruby") {
    profileName = rubyNameArray[number];
    profileDescription = rubyDescriptionArray[number];
    profileInteresting = rubyInterestingArray[number];
    profileGithub = rubyGithubArray[number];
  } else if (name === "php") {
    profileName = phpNameArray[number];
    profileDescription = phpDescriptionArray[number];
    profileInteresting = phpInterestingArray[number];
    profileGithub = phpGithubArray[number];
  } else if (name === "csharp") {
    profileName = csharpNameArray[number];
    profileDescription = csharpDescriptionArray[number];
    profileInteresting = csharpInterestingArray[number];
    profileGithub = csharpGithubArray[number];
  } else if (name === "design") {
    profileName = designNameArray[number];
    profileDescription = designDescriptionArray[number];
    profileInteresting = designInterestingArray[number];
    profileGithub = designGithubArray[number];
  }
  array = [profileName, profileDescription, profileInteresting, profileGithub];
  return array;
}


function getImagePath(courseName) {
  var arrayURL = window.location.href.split('=');
  var profile = arrayURL[2];
  var profileImagePath =  courseName + "-" + profile + ".jpeg";
  var profileNumber = parseInt(profile.charAt(profile.length - 1));
  // return array of image path and id #
  var array = [profileImagePath, profileNumber];
  return array;
}