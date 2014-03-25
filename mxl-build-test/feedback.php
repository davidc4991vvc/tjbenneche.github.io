<?php

function db_connection() {
	$connection = new mysqli('localhost', 'tshuka', "C@NtB#l3vur!ghtMG", 'mobilex_apps');

	if ($connection->connect_errno) {
		http_response_code(500);
		die(json_encode(array('error' => array('code' => 500, 'message' => 'Could not connect to database'))));
	}

	return $connection;
}

$email 	  = mysql_escape_string($_POST['email']);
$feedback = mysql_escape_string($_POST['feedback']);

$current_epoch = strval(time());

$insert_query = "INSERT INTO user_feedback (email, feedback,  datetime) VALUES ('$email', '$feedback', '$current_epoch')";

if (db_connection()->query($insert_query)) {
	http_response_code(200);
	echo json_encode(array('response'=>'success', 'hey'=>"If you're reading, we're hiring. Email me, kiran@mobilexlabs.com, mention this snippet."));
} else {
	http_response_code(500);
	die(json_encode(array('error' => array('code' => 500, 'message' => 'An error occurred', 'hey'=>"If you're reading, we're hiring. Email me, kiran@mobilexlabs.com, mention this snippet."))));
}

?>