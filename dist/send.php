<?php
$nombre = $_POST["name"];
$telefono = $_POST["email"];
$email = $_POST["phone"];
$mensaje = $_POST["message"];

$mensaje = "Nombre:      ". $_POST['name'] . "\n\n";
$mensaje .= "Telefono:    ". $_POST['phone'] . "\n\n";
$mensaje .= "Email:       ". $_POST['email'] . "\n\n\n";
$mensaje .= "Mensaje:     ". $_POST['message'] . "\n\n";

$cabecera = "From: $nombre <$email> \r\n";
$cabecera .= "Reply-To: $email";

if(mail("contacto@sigmapcs.com.mx", "formuario desde el sitio", $mensaje, $cabecera)){
    echo true;
}
else{
    echo false;
}
