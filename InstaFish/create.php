<?php

require_once 'connect.php';

$login = $_POST['login'];
$password = $_POST['password'];

mysqli_query($connect, "INSERT INTO `users` (`id`, `login`, `password`) VALUES (NULL, '$login', '$password')");
?>