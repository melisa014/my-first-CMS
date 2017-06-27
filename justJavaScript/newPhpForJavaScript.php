<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="/JS/jquery-3.2.1.js"></script>
        <script src="newjavascript.js"></script>
        <link rel="icon" href="favicon.png" type="image/png">
    </head>
    <body>
        <div style="padding-top : 30px">
            <h1>Привет, Мир!</h1>
            <?php
            if (isset($_GET['name'])) {
                echo "Привет, ", $_GET['name'], "! Я знаю, тебе ", $_GET['age'], ";)";
            }
            else {?>
                <form action='newPhpForJavaScript.php' method='get'>
                Ваше имя: <input type='text' name='name' value='Имя'><br>
                Ваш возраст: <input type='text' name='age' value='Возраст'><br>
                <input type='submit' value='ok'><br>
            <?php } ?>     
        </div>
    </body>
</html>

