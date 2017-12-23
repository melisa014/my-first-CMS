<?php
try {
    // Включаем полное отображение ошибок
    ini_set( "display_errors", true );
    error_reporting(E_ALL);
    
    date_default_timezone_set( "Europe/Moscow" );  // http://www.php.net/manual/en/timezones.php
    
    // Настройки БД
    define( "DB_DSN", "mysql:host=localhost;dbname=cms;charset=utf8;" );
    define( "DB_USERNAME", "root" );
    define( "DB_PASSWORD", "qwe123" );
    
    // Объявление констант, используемых в проекте
    define( "CLASS_PATH", "classes" );
    define( "TEMPLATE_PATH", "templates" );
    define( "HOMEPAGE_NUM_ARTICLES", 5 );
    define( "ADMIN_USERNAME", "admin" );
    define( "ADMIN_PASSWORD", "mypass" );
    
    // Подключаем Классы моделей (классы, отвечающие за работу с сущностями базы данных)
    require( CLASS_PATH . "/Article.php" );
    require( CLASS_PATH . "/Category.php" );     
} catch (Exception $ex) {
    echo "При загрузке конфигураций возникла проблема!<br><br>";
    error_log( $ex->getMessage() );
}