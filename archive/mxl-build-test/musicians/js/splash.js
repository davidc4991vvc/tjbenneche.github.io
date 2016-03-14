
$(document).ready(function() {
	
function leftSlide(elem) {
	$(elem).addClass('slideLeft');
}

function rightSlide(elem){
	$(elem).addClass('slideRight');
}

function fadeIn(elem){
	$(elem).addClass('fadeIn');
}

	var socialIcons = $('#social-icons');
var firstName = $('#artist-name h3:nth-child(1)');
var lastName = $('#artist-name h3:nth-child(2)');
var info = $('#artist-title');

$('#arrow').on('click', function(){

	event.preventDefault();
	$('#page-two').addClass('slideUp');
	setTimeout(function(){rightSlide(firstName)}, 2000);
	setTimeout(function(){rightSlide(lastName)}, 3000);
	setTimeout(function(){fadeIn(info)}, 4000);
	setTimeout(function(){leftSlide(socialIcons)}, 5000);
});

});






