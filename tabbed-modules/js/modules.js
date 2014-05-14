

$('#gen-link').on('click', function(){
	$('#social-group').hide();
	$('#media-group').hide();
	$('#general-group').show();
	$('#gen-link').css('background-color', '#000');
	$('#social-link').css('background-color', 'blue');
	$('#media-link').css('background-color', 'blue');
});
$('#social-link').on('click', function(){
	$('#social-group').show();
	$('#media-group').hide();
	$('#general-group').hide();
	$('#social-link').css('background-color', '#000');
	$('#gen-link').css('background-color', 'blue');
	$('#media-link').css('background-color', 'blue');
});
$('#media-link').on('click', function(){
	$('#social-group').hide();
	$('#media-group').show();
	$('#general-group').hide();
	$('#media-link').css('background-color', '#000');
	$('#social-link').css('background-color', 'blue');
	$('#gen-link').css('background-color', 'blue');
});