<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$where = $_POST['where'];

$to1      =  'oberemko.victor@yandex.ru';
$subject = 'Заявка на сайте '.$what;
$message = 'На сайт '.$_SERVER['SERVER_NAME'].' поступила новая заявка.><br>';
$message .= 'Заявки пришла с '.$where.'<br><br>';

$message .= 'Фамилия Имя Отчество : '.$name .'<br>';
$message .= 'Контактный телефон : '.$phone .'<br>';

$message .= '<br>'.'IP Адрес : '.$_SERVER['REMOTE_ADDR'].'<br>';

$message .= '<br>Письмо отправлено автоматически и не требует ответа';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: ROBOT <robot@".$_SERVER['SERVER_NAME'].">\r\n";
mail($to1, $subject, $message, $headers);
