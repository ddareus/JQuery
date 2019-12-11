$(function() {
  // jQuery goes here...

  // Uncomment to play around with fade options with the boxes
  $(".red-box").fadeOut(1000);
  $(".green-box").fadeOut(2000);
  $(".blue-box").fadeOut(3000);
  $(".red-box").fadeIn(9000);
  $(".green-box").fadeIn(9000);
  $(".blue-box").fadeIn(9000);
  $(".red-box-two").hide(2000);
  $(".green-box-two").hide(3000);
  $(".blue-box-two").hide(4000);
  $(".red-box-two").show(3000);
  $(".green-box-two").show(3000);
  $(".blue-box-two").show(3000);
  $(".red-box-three").fadeOut(1000);
  $(".green-box-three").fadeOut(2000);
  $(".blue-box-three").fadeOut(3000);
  $(".red-box-three").fadeToggle(7000);
  $(".green-box-three").fadeToggle(7000);
  $(".blue-box-three").fadeToggle(7000);
  $(".red-box-four").fadeTo(1000, 0.20);
  $(".green-box-four").fadeTo(2000, 0.50);
  $(".blue-box-four").fadeTo(4000, 0.80);

});