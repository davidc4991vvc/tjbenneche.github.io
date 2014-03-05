//js doc to sit on top of bootstrap
$('.carousel').carousel()

function makeVisible(elem){
	$(elem).css('visibility', 'visibile');
	$(elem).show()
}

function makeInvisible(elem){
	$(elem).css('visibility', 'hidden');
	$(elem).hide();
}

function horizFlip(elem){
	$(elem).addClass('animated flipInX');
}

function pullDown(elem){
	$(elem).addClass('pullDown');
}

function leftSlide(elem) {
	$(elem).addClass('slideLeft');
}

function rightSlide(elem){
	$(elem).addClass('slideRight');
}


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

$('#small-insta').on('click', function(){
	event.preventDefault()
	$('#big-kai').hide();
	$('#big-insta').show()
	$('#small-insta').css('background-color', '#9E9E9E');
	$('#small-kai').css('background-color', '#e6e7e8');
});
$('#small-kai').on('click', function(){
	event.preventDefault()
	$('#big-insta').hide();
	$('#big-kai').show()
	$('#small-kai').css('background-color', '#9E9E9E');
	$('#small-insta').css('background-color', '#e6e7e8');
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
	$('#free .plan-info').slideToggle();
});

$('#basic a').on('click', function(){
	event.preventDefault();
	$('#basic > .plan-info').slideToggle();
});
$('#pro .small-card a').on('click', function(){
	event.preventDefault();
	$('#pro .plan-info').slideToggle();
});




$('#musician-btn').on('click', function(){
	event.preventDefault();
	// pullDown($('#musician-usecase'));
	$('#musician-usecase').slideToggle();
	$(this).toggle();
});
$('#small-biz-btn').on('click', function(){
	event.preventDefault();
	// pullDown($('#small-biz-usecase'));
	$('#small-biz-usecase').slideToggle();
	$(this).toggle();
});
$('#venue-btn').on('click', function(){
	event.preventDefault();
	// pullDown($('#venue-usecase'));
	$('#venue-usecase').slideToggle();
	$(this).toggle();
});



$('#engage-expand-button').on('click', function(){
	event.preventDefault();
	$('#engage-block-hidden').slideToggle();
});

$('#build-expand-button').on('click', function(){
	event.preventDefault();
	$('#build-block-hidden').slideToggle();
});

$('#grow-expand-button').on('click', function(){
	event.preventDefault();
	$('#grow-block-hidden').slideToggle();
});
$('#monetize-expand-button').on('click', function(){
	event.preventDefault();
	$('#monetize-block-hidden').slideToggle();
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

$('#engage-section').waypoint(function(direction) {
  $('.nav li:nth-child(1)').addClass('active');
});

// $(document).ready(function() {
	
// function leftSlide(elem) {
// 	$(elem).addClass('slideLeft');
// }

// function rightSlide(elem){
// 	$(elem).addClass('slideRight');
// }

// function fadeIn(elem){
// 	$(elem).addClass('fadeIn');
// }


// var waka = $('#waka');
// var bball = $('#bball');
// var bikerace = $('#bikerace');


// setTimeout(function(){leftSlide(waka)}, 2000);
// setTimeout(function(){leftSlide(bball)}, 3000);
// setTimeout(function(){leftSlide(bikerace)}, 4000);


// });


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