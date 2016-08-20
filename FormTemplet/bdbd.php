<?php
/*
// 3	  Hanaling db data retrieval and return  
// 4	  
// 5	  @file   
// 6	  @path   /
// 7	  @version  1 
// 8	  @date   2015/16/08
// 9	  @copyright  2006-2009 ignition72, inc.
// 10	  @author   Allyson Brusstar
// 11	  @link   allysonbrusstar@gmail.com
// 12	  @todo   link data base to php file
*/

/*$servername = "localhost:8889";
$username = "NiMiZiN";
$password = "NiMiZiN";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>*/

// echo "<h1>Hello You!</h1>";
// $servername = "localhost:8889";
// $username = "root";
// $password = "dan1234";

// // Create connection
// $conn = new mysqli($servername, $username, $password);

// // Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// } 
// echo "Connected successfully";
// 
// $user = 'root';
// $password = 'dan1234';
// $db = 'inventory';
// $socket = 'localhost:/Applications/MAMP/tmp/mysql/mysql.sock';

// $link = mysql_connect(
//    $socket, 
//    $user, 
//    $password
// );
// $db_selected = mysql_select_db(
//    $db, 
//    $link
// );
////////////////////////
//Step1
 $db = mysqli_connect('localhost','username','password','database_name')
 or die('Error connecting to MySQL server.');
?>

<html>
 <head>
 </head>
 <body>
 <h1>PHP connect to MySQL</h1>
</body>
</html>