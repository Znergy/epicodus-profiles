$(function() {
  $("#rubyCourse").on('click', function() {
    document.location.href = "choosen-course.html?course=ruby", true;
  });
  $("#javaCourse").on('click', function() {
    document.location.href = "choosen-course.html?course=java", true;
  });
  $("#cSharpCourse").on('click', function() {
    document.location.href = "choosen-course.html?course=csharp", true;
  });
  $("#phpCourse").on('click', function() {
    document.location.href = "choosen-course.html?pageid=php", true;
  });
  $("#designCourse").on('click', function() {
    document.location.href = "choosen-course.html?pageid=design", true;
  });
});