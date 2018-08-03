<?php

if (isset($_POST['submit'])) {
  $subject = $_POST['subject'];
  $name = $_POST['name'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

 $mailTo ="lukas@thesymmetry.co";
 $headers = "From: ".$mailFrom."\r\n" ;
 $txt = "You have recived an email-from ".$name.".\n\n".$message;
  mail($mailTo, $subject, $txt, $headers);
header("Location: index.html?mailsend");
}
