$(document).ready(function() {
  // activates popover effect on skillset
  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  $('a[href^="#"]').on('click', function(e) {
   e.preventDefault();

   // store hash
   var hash = this.hash;
   console.log(hash);

   $('body').animate({
     scrollTop: $(hash).offset().top
   }, 800, function() {

     // when done, add hash to url
     // (default click behaviour)
     window.location.hash = hash;
   });

});
});