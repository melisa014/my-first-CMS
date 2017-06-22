<?php
require ('C:\OpenServer\domains\firstCMS\config.php');

$query_result = Article::getById($_GET['articleId']);
echo $query_result->content;


//echo "<pre>";
//print_r ($query_result);
//echo "</pre>";

