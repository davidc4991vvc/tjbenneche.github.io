//js doc to sit on top of bootstrap
$('.carousel').carousel()


$('#small-jamkings').on('click', function(){
	event.preventDefault()
	$('#big-clumsy-biker, #big-urban, #big-waka').hide();
	$('#big-jamkings').show();
	$('#small-jamkings').css('background-color', '#9E9E9E');
	$('#small-urban').css('background-color', '#e6e7e8');
	$('#small-clumsy-biker').css('background-color', '#e6e7e8');
	$('#small-waka').css('background-color', '#e6e7e8');
});

$('#small-clumsy-biker').on('click', function(){
	event.preventDefault()
	$('#big-jamkings, #big-urban, #big-waka').hide();
	$('#big-clumsy-biker').show()
	$('#small-clumsy-biker').css('background-color', '#9E9E9E');
	$('#small-jamkings').css('background-color', '#e6e7e8');
	$('#small-urban').css('background-color', '#e6e7e8');
	$('#small-waka').css('background-color', '#e6e7e8');
});

$('#small-urban').on('click', function(){
	event.preventDefault()
	$('#big-jamkings, #big-clumsy-biker, #big-waka').hide();
	$('#big-urban').show()
	$('#small-urban').css('background-color', '#9E9E9E');
	$('#small-jamkings').css('background-color', '#e6e7e8');
	$('#small-clumsy-biker').css('background-color', '#e6e7e8');
	$('#small-waka').css('background-color', '#e6e7e8');
});

$('#small-waka').on('click', function(){
	event.preventDefault();
	$('#big-jamkings, #big-clumsy-biker, #big-urban').hide();
	$('#big-waka').show()
	$('#small-waka').css('background-color', '#9E9E9E');
	$('#small-jamkings').css('background-color', '#e6e7e8');
	$('#small-urban').css('background-color', '#e6e7e8');
	$('#small-clumsy-biker').css('background-color', '#e6e7e8');
});




$('#mobile-insta').on('click', function(){
	event.preventDefault()
	$('#big-kai').hide();
	$('#big-insta').show();
	$('#mobile-insta').css('background-color', '#fff');
	$('#mobile-kai').css('background-color', '#8CFFB0');
});

$('#mobile-kai').on('click', function(){
	event.preventDefault()
	$('#big-insta').hide();
	$('#big-kai').show()
	$('#mobile-kai').css('background-color', '#fff');
	$('#mobile-insta').css('background-color', '#8CFFB0');

});






$('#small-insta').on('click', function(){
	event.preventDefault()
	$('#big-kai').hide();
	$('#big-insta').show()
	$('#small-insta').css('background-color', '#fff');
	$('#small-kai').css('background-color', '#8CFFB0');
});
$('#small-kai').on('click', function(){
	event.preventDefault()
	$('#big-insta').hide();
	$('#big-kai').show()
	$('#small-kai').css('background-color', '#fff');
	$('#small-insta').css('background-color', '#8CFFB0');
});


$('#big-jamkings').on('click', function(){
	event.preventDefault()
});
$('#big-clumsy-biker').on('click', function(){
	event.preventDefault()
});
$('#big-urban').on('click', function(){
	event.preventDefault()
});
$('#big-waka').on('click', function(){
	event.preventDefault()
});


$('#free .small-card a').on('click', function(){
	event.preventDefault();
	$('#free .plan-info').toggle('slow');
});

$('#basic a').on('click', function(){
	event.preventDefault();
	$('#basic > .plan-info').toggle('slow');
});
$('#pro .small-card a').on('click', function(){
	event.preventDefault();
	$('#pro .plan-info').toggle('slow');
});




$('#engage-learn-button').on('click', function(){
	event.preventDefault();
	$('#engage-block').toggle('slow');
	$('#engage-block-hidden').toggle('slow');
	$('#engage-exit-button').toggle('slow');
});
$('#engage-exit-button').on('click', function(){
	event.preventDefault();
	$('#engage-block').toggle('slow');
	$('#engage-block-hidden').toggle('slow');
	$('#engage-exit-button').toggle('slow');
});
$('#build-learn-button').on('click', function(){
	event.preventDefault();
	$('#build-block').toggle('slow');
	$('#build-block-hidden').toggle('slow');
	$('#build-exit-button').toggle('slow');
});
$('#build-exit-button').on('click', function(){
	event.preventDefault();
	$('#build-block').toggle('slow');
	$('#build-block-hidden').toggle('slow');
	$('#build-exit-button').toggle('slow');
});
$('#grow-learn-button').on('click', function(){
	event.preventDefault();
	$('#grow-block').toggle('slow');
	$('#grow-block-hidden').toggle('slow');
	$('#grow-exit-button').toggle('slow');
});
$('#grow-exit-button').on('click', function(){
	event.preventDefault();
	$('#grow-block').toggle('slow');
	$('#grow-block-hidden').toggle('slow');
	$('#grow-exit-button').toggle('slow');
});
$('#monetize-learn-button').on('click', function(){
	event.preventDefault();
	$('#monetize-block').toggle('slow');
	$('#monetize-block-hidden').toggle('slow');
	$('#monetize-exit-button').toggle('slow');
});
$('#monetize-exit-button').on('click', function(){
	event.preventDefault();
	$('#monetize-block').toggle('slow');
	$('#monetize-block-hidden').toggle('slow');
	$('#monetize-exit-button').toggle('slow');
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


var waka = $('#waka');
var bball = $('#bball');
var bikerace = $('#bikerace');


setTimeout(function(){leftSlide(waka)}, 2000);
setTimeout(function(){leftSlide(bball)}, 3000);
setTimeout(function(){leftSlide(bikerace)}, 4000);


});


// function resize(container, list){
// 	var listNum = $(list).size();
// 	console.log(listNum);
// 	var totalWidth = $(container).width();
// 	console.log(totalWidth);
// 	var indivWidth = totalWidth / listNum;
// 	console.log(indivWidth);
// 	$(list).css('width', indivWidth);
// }


// // function center(container, list){
// // 	var listWidth = $(list).width;
// // 	$(container).css("width", listWidth);
// // }
// function resizeAll() {
// console.log('resizing');
// if($('#mxl-logo-icon').css('display')=='none') {
// 	resize(".navbar-collapse", '.nav > li');
// }

// // center("#footernav-buttons", "#footernav-buttons li");
// // }


// if($('.navbar-collapse')){
// /*	var collapseNav = $('#topnav-buttons').parent();
// 	if(!collapseNav.hasClass('in')) {
// 		resize("#topnav-buttons", "#topnav-buttons li");
// 	}*/
// 	resizeAll();
// }

// resizeAll();


// //if($('#menu-button').css('display')=="block" || $('#inner-menu-button').css('display')==block) {
// //	$('#topnav-buttons').width('100%');
// //}
// //
// //if ($('#topnav-container > div').hasClass('in')){
// //	$('.navbar-inner').css("background-color", '#263043');
// //}

// $(window).resize(function() {
// 	resizeAll();
// });

// };