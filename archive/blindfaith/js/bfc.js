$(document).foundation({
  orbit: {
    animation: 'slide',
    timer_speed: 6000,
    pause_on_hover: false,
    animation_speed: 500,
    navigation_arrows: false,
    bullets: false
  }
});


$('.body-content .service-links .reservations:nth-child(2)').attr('id', 'reservation-hover');
$('.body-content .service-links .delivery:nth-child(2)').attr('id', 'delivery-hover');
$('.body-content .service-links .giftcards:nth-child(2)').attr('id', 'giftcard-hover');

$('#reservation-hover').mouseover(function() {
  $('#reservation-text').css("visibility","visible");
});

$('#delivery-hover').mouseover(function() {
  $('#delivery-text').css("visibility","visible");
});

$('#giftcard-hover').mouseover(function() {
  $('#giftcard-text').css("visibility","visible");
});


$('#reservation-hover').mouseout(function() {
  $('#reservation-text').css("visibility","hidden");
});

$('#delivery-hover').mouseout(function() {
  $('#delivery-text').css("visibility","hidden");
});

$('#giftcard-hover').mouseout(function() {
  $('#giftcard-text').css("visibility","hidden");
});