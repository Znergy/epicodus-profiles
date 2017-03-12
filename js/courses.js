$(function() {
  $("#rubyCourse").on('click', function() {
    window.location.replace("choosen-course.html?course=ruby");
  });
  $("#javaCourse").on('click', function() {
    window.location.replace("choosen-course.html?course=java");
  });
  $("#cSharpCourse").on('click', function() {
    window.location.replace("choosen-course.html?course=csharp");
  });
  $("#phpCourse").on('click', function() {
    window.location.replace("choosen-course.html?pageid=php");
  });
  $("#designCourse").on('click', function() {
    window.location.replace("choosen-course.html?pageid=design");
  });
});