<?php

    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $tell = addcslashes($_POST['telefone']);

    $para = "elberlucasalvesbarboza@gmail.com";
    $assunto = "Coleta de dados - Portfolio";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$tell;

    $cabeca = "From: teste@inteliogia.com"."\n"."Reply-to: ".$email."\n"."X-Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("Email enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>