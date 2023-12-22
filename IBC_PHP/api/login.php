<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    header("Content-Type: application/json");
    
    $requestMethod = $_SERVER["REQUEST_METHOD"];
   $con=mysqli_connect("localhost","root","12345","insert");
     
    //include_once 'database.php';
    
   if($requestMethod === 'GET') {
     $email = $_GET['email'];
     $password = $_GET['password'];
   
    if(!empty($email) && !empty($password)) {
        $selectQuery = "SELECT * FROM signup WHERE email='$email' AND password='$password'";
        $result = mysqli_query($con,$selectQuery);
        $res = mysqli_num_rows($result);
        //$data = array();
        if($res > 0)
        {
           $data=[];
           $select = "SELECT email, password FROM signup";  
           $resultData = mysqli_query($con,$selectQuery);   
           while($row = mysqli_fetch_assoc($resultData)){
              //array_push($data,$row);
              $data = $row; 
            }
           $status="success"; 
           http_response_code(200);
           //echo json_encode($data);
           echo json_encode(array("status"=>$status,"data"=>$data));

        }
        else{
            http_response_code(201);   
            echo json_encode(array("status"=>"201","message"=>"invalid  login"));
        }
    } 
    else {
      http_response_code(500);
      echo json_encode(array("status"=>"500","message" => "unavailbale input field"));   
    }
}
 else {
    http_response_code(501);
    echo json_encode(array("status"=>"501","message" => "Bad Request Method"));
 }

?>