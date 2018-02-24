<?php
require ('../config.php');

if (isset($_GET['articleId'])) {
    $article = Article::getById((int)$_GET['articleId']);
    echo $article->content;
}
if (isset ($_POST['articleId'])) {
    //die("Привет)");
    $article = Article::getById((int)$_POST['articleId']);
    echo json_encode($article);
//        die("Привет)");
//    $conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
//    
//        if (isset($conn)) {
//            die("Соединенте установлено");
//        }
//        else {
//            die("Соединение не установлено");
//        }
//    $article = "WHERE Id=". (int)$_POST[articleId];
//    echo $article;
//    $sql = "SELECT content FROM articles". $article;
//    $contentFromDb = $conn->prepare( $sql );
//    $contentFromDb->execute();
//    $result = $contentFromDb->fetch();
//    $conn = null;
//    echo json_encode($result);
}

