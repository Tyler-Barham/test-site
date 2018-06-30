<?php

DEFINE ('DB_USER', 'staffwebsite');
DEFINE ('DB_PASSWORD', 'websitepass');
DEFINE ('DB_HOST', '127.0.0.1');
DEFINE ('DB_NAME', 'websitetest');

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') '
        . $mysqli->connect_error);
}

?>