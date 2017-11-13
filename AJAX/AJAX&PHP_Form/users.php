<?php
/**
 * Created by PhpStorm.
 * User: Serg
 * Date: 13.11.2017
 * Time: 3:08
 */
// Create connection
$conn = mysqli_connect('localhost', 'root', '', 'ajaxtest');

$query = 'SELECT * FROM users';

// Get result
$result = mysqli_query($conn, $query);

//Fetch data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo  json_encode($users);