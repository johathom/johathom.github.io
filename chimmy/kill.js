$(function() {

  $("li").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    elementThatWasClicked.remove();
  })

})