<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Meyhods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-Width");


$username = 'root';
$password = 'password';

$con = mysqli_connect("172.177.0.3:80","root","password");
mysqli_select_db($con,"data");

$sql = "insert into infos(
  username,
  password
  )
  values('$username',
          '$password'
  )";
$result = mysqli_query($con,$sql);

if($result){
  $response['data'] =array(
    'status'=>'valid'
  );
  echo json_encode($response);
}
else{
  $response['data']=array(
  'status'=>'invalid'
  );
  echo json_encode($response);
}
?>