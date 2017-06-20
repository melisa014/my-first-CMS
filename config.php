<?php
try {
    ini_set( "display_errors", true );
    error_reporting(E_ALL);
    date_default_timezone_set( "Europe/Moscow" );  // http://www.php.net/manual/en/timezones.php
    define( "DB_DSN", "mysql:host=localhost;dbname=cms" );
    define( "DB_USERNAME", "root" );
    define( "DB_PASSWORD", "" );
    define( "CLASS_PATH", "classes" );
    define( "TEMPLATE_PATH", "templates" );
    define( "HOMEPAGE_NUM_ARTICLES", 5 );
    define( "ADMIN_USERNAME", "admin" );
    define( "ADMIN_PASSWORD", "mypass" );
    require( CLASS_PATH . "/Article.php" );
    require( CLASS_PATH . "/Category.php" );     
} catch (Exception $ex) {
    echo "Sorry, a problem occurred. Please try later.";
    error_log( $ex->getMessage() );
}

//function handleException( $exception ) {
//    echo "Sorry, a problem occurred. Please try later.";
//    error_log( $exception->getMessage() );
//}
//
//set_exception_handler( 'handleException' );

