//js doc to sit on top of bootstrap
$('.carousel').carousel()


$('#small-features').on('click', function(){
	event.preventDefault()
	$('#small-marketing, #small-analytics, #small-3rdparty').show();
	$('#big-marketing, #big-analytics, #big-3rdparty').hide();
	$('#big-features').show()
});

$('#small-marketing').on('click', function(){
	event.preventDefault()
	$('#small-features, #small-analytics, #small-3rdparty').show();
	$('#big-features, #big-analytics, #big-3rdparty').hide();
	$('#big-marketing').show()
});

$('#small-analytics').on('click', function(){
	event.preventDefault()
	$('#small-marketing, #small-features, #small-3rdparty').show();
	$('#big-marketing, #big-features, #big-3rdparty').hide();
	$('#big-analytics').show()
});

$('#small-3rdparty').on('click', function(){
	event.preventDefault()
	$('#small-marketing, #small-analytics, #small-features').show();
	$('#big-marketing, #big-analytics, #big-features').hide();
	$('#big-3rdparty').show()
});

$('#big-3rdparty').on('click', function(){
	event.preventDefault()
});
$('#big-analytics').on('click', function(){
	event.preventDefault()
});
$('#big-marketing').on('click', function(){
	event.preventDefault()
});
$('#big-features').on('click', function(){
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

var othergame = $('#othergame');
var waka = $('#waka');
var urban = $('#urban');
var bikerace = $('#bikerace');


setTimeout(function(){rightSlide(othergame)}, 2000);
setTimeout(function(){leftSlide(waka)}, 3000);
setTimeout(function(){leftSlide(urban)}, 4000);
setTimeout(function(){leftSlide(bikerace)}, 5000);


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