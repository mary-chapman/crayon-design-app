function onHover(crayon, text) {
  $(crayon).hover(
    function() {
      $(text).css("display", "inline");
    }, function() {
      $(text).css("display", "none");
    }
  );
}
onHover("#blue", ".blue");

/*
$("#green").mouseover(function(){
    $(".green").css("display", "inline");
})
$(".crayon").mouseout(function(){
    $(".green").css("display", "none");
})
*/
