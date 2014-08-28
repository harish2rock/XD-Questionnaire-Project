<?php
var_dump($_POST);
require_once 'vendor/autoload.php';

//
// Form Answers
$data = file_get_contents("php://input");
// $q1 = $_POST["q1"];
// $q1 = $data["q1"];
$q1 = file_get_contents($data->{"q1"});
$q2 = $_POST["q2"];
$q3 = $_POST["q3"];
// $data = json_decode($_POST['q1']);
// $q1 = $data->{'q1'};
// $data = $_POST;
// print_r($_POST);

$m = new PHPMailer;

$m->isSMTP();
$m->SMTPAuth   = true;
$m->SMTPDebug  = 2; // gives messages only. 1 gives error codes, too
$m->Host       = 'smtp.gmail.com';
$m->Username   = 'xdquestionnaire@gmail.com';
$m->Password   = 'perficientxd';
$m->SMTPSecure = 'ssl';
$m->Port       = 465;

$m->From       = 'xdquestionnaire@gmail.com';
$m->FromName   = 'Derek Montgomery';
$m->To         = 'montgomerygraphics@gmail.com';
$m->addAddress('montgomerygraphics@gmail.com', 'Derek Gmail');
$m->Subject    = 'Here is an email';
$m->Body       .= 'JSON Body is '.$data.'<br />';
$m->Body       .= 'Your answer to question one was '.$q1.'<br />';
$m->Body       .= 'Your answer to question two was '.$q2.'<br />';

// this will tell us if it was sent or not
// var_dump($m->send());
if(!$m->Send()){
  echo "Mailer error: " . $m->ErrorInfo;
} else {
  echo "Message sent!";
}
