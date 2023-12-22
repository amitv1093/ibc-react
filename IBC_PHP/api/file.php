<?php
error_reporting(0);
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization");
header("HTTP/1.1 200 OK");
$con = mysqli_connect("localhost","root","12345","insert");
if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $target_dir ="upload/";
    $target_file1 =(($_POST['name']));
    $email =$_POST['email'];
    $target_file = $target_dir . basename(($_FILES["resume"]["name"]));
    
    $ins ="insert into upload (name,email,resume) values('$target_file1','$email','$target_file')";
    $con->query($ins);

    if(move_uploaded_file($_FILES["resume"]["tmp_name"], $target_file))
    {
        echo json_encode(array("status" => 201, "message" => "Image upload  successfully"));

    }
    else
    {
        echo json_encode(array("status" => 201, "message" => "Not Uploading Image"));
    }
    }