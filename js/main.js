jQuery(document).ready(function ($) {
  $(".menuButton, .nav_bcg").on("click", function () {
    $(".navLink_sp").slideToggle(200);
    $(".nav_bcg").fadeToggle(200, "swing");
  });
  $('.pageTop a').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500, 'swing');
  });
});
