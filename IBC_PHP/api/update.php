
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


$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod === "POST") {
    $data = json_decode(file_get_contents("php://input"));
    if(!empty($data->name) && !empty($data->email) && !empty($data->subject) 
       && !empty($data->phone) && !empty($data->message) ){
       $id =$_GET['id'];
        $name = htmlspecialchars($data->name);
        $email = htmlspecialchars($data->email);
        $subject= htmlspecialchars($data->subject);
        $phone = htmlspecialchars($data->phone);
        $message = htmlspecialchars($data->message);
       
     
      
		$insertQuery = "UPDATE  om SET name='$name', email='$email', subject='$subject', phone='$phone', message= '$message' where id='$id'";
        


        $stmt = $con->query($insertQuery);
		// echo $insertQuery;
        
		if ($stmt === TRUE) {
			http_response_code(200);
			echo json_encode(array("message" => "Update successfully"));
		} else {
			http_response_code(201);
			echo json_encode(array("message" => "data not insert. Error: " . $con->error));
		}
	}
}
