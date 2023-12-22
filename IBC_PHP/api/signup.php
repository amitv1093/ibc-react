<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST,GET,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");
header("HTTP/1.1 200 OK");
$con = mysqli_connect("localhost", "root", "12345", "insert");

if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

//$con = mysqli_connect("localhost","root","","admin_parag");
// include_once '../database.php';

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod === "POST") {
    $data = json_decode(file_get_contents("php://input"));
    if (!empty($data->name) && !empty($data->email) && !empty($data->password)) {
        $name = htmlspecialchars($data->name);
        $email = htmlspecialchars($data->email);
        $password = htmlspecialchars($data->password);



        $insertQuery = "INSERT INTO signup (name, email, password)
                VALUES ('$name', '$email', '$password')";


        $stmt = $con->query($insertQuery);
        // echo $insertQuery;

        if ($stmt === TRUE) {
            http_response_code(200);
            echo json_encode(array("message" => "data insert successfully"));
        } else {
            http_response_code(201);
            echo json_encode(array("message" => "data not insert. Error: " . $con->error));
        }
    }
}



?>