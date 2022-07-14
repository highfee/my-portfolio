<?php

    if($_SERVER['RESQUEST_METHOD'] == 'post'){
        $to = 'odediranifeoluwa&@gmail.com';
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        $retval = mail($to, $subject, $message);
    }