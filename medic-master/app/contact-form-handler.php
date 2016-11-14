<?php
iconv_set_encoding("internal_encoding", "UTF-8");
$errors = '';
$myemail = 'info@consulmotors.ru director@fmfin.ru victor.trocenko@gmail.com gromi2k@yandex.ru';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']))
$name = $_POST['name'];
$email_address = $_POST['email'];



if( empty($errors))
{
	$to = $myemail;
	$email_subject = "Consul Studio";
	$email_body = "Детали заявки:\n Имя: $name \n Телефон: $email_address \n Сообщение: \n $message";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";
	mail(utf8_decode($to), utf8_decode($subject), utf8_decode($msg), utf8_decode($from)."\nContent-Type: text/plain; charset=UTF-8\nContent-Transfer-Encoding: 8bit\n");
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: index.html');
}
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>
