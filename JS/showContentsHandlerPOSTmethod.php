<?php
require ('C:\OpenServer\domains\firstCMS\config.php');

$conn = new PDO( DB_DSN, DB_USERNAME, DB_PASSWORD );
$sql = "SELECT content FROM articles";
$dbcontent = $conn->prepare( $sql );
$dbcontent->execute();
$query_result = $dbcontent->fetch();
$conn = null;
echo json_encode($query_result);

