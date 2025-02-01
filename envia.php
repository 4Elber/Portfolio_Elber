<?php

$nome = htmlspecialchars($_POST['nome']);
$email = htmlspecialchars($_POST['email']);
$tell = htmlspecialchars($_POST['telefone']);

$para = "elberlucasalvesbarboza@gmail.com";
$assunto = "Coleta de dados - Portfolio";

$corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$tell;

$cabecalho = "From: teste@inteliogia.com"."\r\n".
             "Reply-To: ".$email."\r\n".
             "X-Mailer: PHP/".phpversion();

if(mail($para, $assunto, $corpo, $cabecalho)){
    echo "Email enviado com sucesso!";
} else {
    echo "Houve um erro ao enviar o email: " . error_get_last()['message'];
}

?>
