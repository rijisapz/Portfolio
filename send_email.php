<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Create email content
$to = 'regiesapico1607@gmail.com';  // Replace with your email address
$headers = "From: $name <$email>";
$email_content = "Subject: $subject\n\n$message";

// Send email
mail($to, $subject, $email_content, $headers);

// Redirect user back to the form or a thank you page
header("Location: index.html");  // Replace with your desired redirect URL
exit();
?>