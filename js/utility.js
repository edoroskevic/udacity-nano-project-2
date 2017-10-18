/*
  a function to change color of the navigation bar on scroll;
*/
$(function () {
  $(document).scroll(function () {
    let $nav = $(".navbar");
    let $cover = $("#cover");

    let width = $(window).width();
    let offset = 85;

    $nav.toggleClass('scrolled', $(this).scrollTop() > $cover.height() - offset);
    $nav.toggleClass('navbar-light', $(this).scrollTop() > $cover.height() - offset);
    $nav.toggleClass('bg-light', $(this).scrollTop() > $cover.height() - offset);
  });
});
