<?php

require_once 'connect.php';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>AdminPanel</title>
  <style type="text/css">
   body {
    font: 10pt Arial, Helvetica, sans-serif; /* Шрифт на веб-странице */
    background:   #F5F5F5; /* Цвет фона */
    margin: 0; /* Убираем отступы */

   }
   h2 {
    font-size: 11pt; /* Размер шрифта */
    color: #752641; /* Цвет текста */
    margin-bottom: 0; /* Отступ снизу */
   }
   #container {
    width: 1000px; /* Ширина макета */
    margin: 0 auto; /* Выравниваем по центру */
   }
   #header {
    background:   #505050; /* Цвет фона */
    font-size: 20pt; /* Размер текста */
    color: #edeed5; /* Цвет текста */
    padding: 15px; /* Отступы вокруг текста */
    margin-bottom: 10px;
    border-radius: 8px;
   }
   #content {

    padding: 10px; /* Поля вокруг текста */
    background:   #FFFFFF; /* Цвет фона левой колонки */
    border-left: 8px solid #C8C8C8;
    border-right: 8px solid #C8C8C8;
    border-top: 8px solid #C8C8C8;
    border-bottom: 8px solid #C8C8C8;
    border-radius: 8px;
   }
   #content p {
    margin-top: 0.3em /* Отступ сверху */

   }
   #sidebar {
    float: right; /* Обтекание по левому краю */
    width: 120px; /* Ширина правой колонки */
    padding: 10px; /* Отступы вокруг текста */
    background: #cbc0b7; /* Цвет фона */
   }
   #sidebar a {
    color: #752641; /* Цвет ссылок */
   }
   #footer {
    background: #505050; /* Цвет фона */
    color: #fff; /* Цвет текста */
    padding: 5px; /* Отступы вокруг текста */
    margin-top: 15px; /* Отступ сверху */
    border-radius: 8px;
   }
   th,td {
      padding: 10px;
      width: 300px;

    }
    th {
      background: #606060;
      color: #ffffff;
    }
    td {
      background: #b5b5b5;
    }

  </style>
 </head>
 <body>
  <div id="container">
   <div id="header">AdminPanel</div>

   <div id="content">
      <center><table>
    <tr>
      <th style="width:auto">ID</th>
      <th>Login</th>
      <th>Password</th>
    </tr>

        <?php
    $users = mysqli_query($connect, "SELECT * FROM `users`");
    $users = mysqli_fetch_all($users);
    foreach ($users as $users) {
      ?>
        <tr>
          <td><?= $users[0] ?></td>
          <td><?= $users[1] ?></td>
          <td><?= $users[2] ?></td>
        </tr>
      <?php
    }
    ?>

  </table></center>
   </div>
   <div id="footer">&copy; InstaFish by ASVoodoo</div>
  </div>
 </body>
</html>