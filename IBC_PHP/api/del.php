<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");
header("HTTP/1.1 200 OK");

// include_once '../database.php';
$con = mysqli_connect("localhost","root","12345","insert");

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod === "GET") {
    $id = $_GET['id'];

    // Use prepared statement to prevent SQL injection
    $deleteQuery = "DELETE FROM om WHERE id = ?";
    $stmt = $con->prepare($deleteQuery);

    if (!$stmt) {
        http_response_code(500);
        echo json_encode(array("message" => "Error in prepared statement: " . $con->error));
        exit();
    }

    $stmt->bind_param("i", $id);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        http_response_code(200);
        echo json_encode(array("message" => "Data deleted successfully"));
    } else {
        http_response_code(201);
        echo json_encode(array("message" => "Data not deleted. Check the provided ID."));
    }

    $stmt->close();
} else {
    http_response_code(401);
    echo json_encode(array("message" => "Bad Request Method"));
}
?>
