<?php

	$name = @trim(stripslashes($_POST['name']));
	$email = @trim(stripslashes($_POST['email']));
	$project = @trim(stripslashes($_POST['project-name']));
	$message = @trim(stripslashes($_POST['message']));

	$email_from = $email;
	$email_to = 'cooliqbal91@gmail.com';//replace with your email

    $headers = "Subject: $project\r\n";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

	$body = $project;

	$success = @mail($email_to, $body, 'Name: ' . $name . "\n\n" . 'Project title: ' . $project . "\n\n" . 'Email: ' . $email . "\n\n" . 'Message: ' . $message, $headers);

?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<script>alert("Thank you for contact us. As early as possible  we will contact you.");</script>
	<meta HTTP-EQUIV="REFRESH" content="0; url=index.html"> 
</head>
