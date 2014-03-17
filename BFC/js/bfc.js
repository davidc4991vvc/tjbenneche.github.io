

$(function() {
	$('a[href*=#]:not([href=#carousel-example-generic])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 40
				}, 1000);
				return false;
			}
		}
	});
});



$('#breakfast-link').on('click', function(event){
	event.preventDefault();
	$('#breakfast').slideToggle();
  $('#brunch, #lunch, #dinner, #bakery, #beverages, #desserts').hide();
});

$('#brunch-link').on('click', function(event){
	event.preventDefault();
	$('#brunch').slideToggle();
  $('#breakfast, #lunch, #dinner, #bakery, #beverages, #desserts').hide();
});
$('#lunch-link').on('click', function(event){
	event.preventDefault();
	$('#lunch').slideToggle();
  $('#brunch, #breakfast, #dinner, #bakery, #beverages, #desserts').hide();
});
$('#dinner-link').on('click', function(event){
  event.preventDefault();
  $('#dinner').slideToggle();
  $('#brunch, #lunch, #breakfast, #bakery, #beverages, #desserts').hide();
});

$('#bakery-link').on('click', function(event){
  event.preventDefault();
  $('#bakery').slideToggle();
  $('#brunch, #lunch, #dinner, #breakfast, #beverages, #desserts').hide();
});
$('#beverages-link').on('click', function(event){
  event.preventDefault();
  $('#beverages').slideToggle();
  $('#brunch, #lunch, #dinner, #bakery, #breakfast, #desserts').hide();
});
$('#desserts-link').on('click', function(event){
  event.preventDefault();
  $('#desserts').slideToggle();
  $('#brunch, #lunch, #dinner, #bakery, #beverages, #breakfast').hide();
});
