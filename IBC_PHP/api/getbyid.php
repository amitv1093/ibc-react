<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json");

// include_once '../database.php';
$con =mysqli_connect("localhost","root","12345","insert");

$requestMethod = $_SERVER['REQUEST_METHOD'];

if ($requestMethod === "GET") {

    $id =$_GET['id'];

    $selectQuery = "SELECT * from om where id=$id";
    
    $stmt = $con->query($selectQuery);

    if ($stmt !== false && $stmt->num_rows > 0) {
        $data = [];

        while ($row = $stmt->fetch_assoc()) {
            $data[] = $row;
        }

        $status = "success";
        http_response_code(200);
        echo json_encode(array("message" => $status, "data" => $data));
    } else {
        http_response_code(201);
        echo json_encode(array("message" => "Data Not Found", "data"=>[]));
    }
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Bad Request Method"));
}
?>
		









