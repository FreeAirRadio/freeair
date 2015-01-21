$(document).ready(function(){
  stickyHeader();
});

function stickyHeader(){
  var fixed = document.getElementsByTagName("header");
    $(fixed).sticky({ topSpacing: 0 });
}