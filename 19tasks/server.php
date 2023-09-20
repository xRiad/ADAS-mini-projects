<?php

print_r($_GET);

$height = intval($_GET['height']);

echo $height;


echo '<br>';

if ((!isset($_GET['weight']) || empty($_GET['weight'])) || (!isset($_GET['height']) ||  empty($_GET['height'])) ||  ($_GET['height'] < 0 || $_GET['height'] < 0)) {
    echo 'Please fill data';
    die();
}

// $BKI = çəki/;