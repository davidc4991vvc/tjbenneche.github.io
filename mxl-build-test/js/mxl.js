

$('#apps-logo > a').on('click', function(){
	event.preventDefault();
	$('#apps-info').toggle('slow');
});

$('#games-logo > a').on('click', function(){
	event.preventDefault();
	$('#games-info').toggle('slow');
});
$('#build-logo > a').on('click', function(){
	event.preventDefault();
	$('#build-info').toggle('slow');
});


$(function() {
  $('a[href*=#]:not([href=#carousel-example-generic])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-40
        }, 1000);
        return false;
      }
    }
  });
});