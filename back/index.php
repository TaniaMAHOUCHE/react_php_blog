<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$servername = "db";
$username = "root";
$password = "password";
$dbname = "data";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    $sql = "INSERT INTO infos ( `pseudo`, `title`, `article`) VALUES (:pseudo, :title, :article)";
    $data = [
        ':pseudo' => $_POST['pseudo'],
        ':title' => $_POST['title'] ,
        ':article' => $_POST['article'],
    ];

    $statement= $pdo->prepare($sql);
    $statement->execute($data);

    $sql = $pdo->prepare("SELECT * FROM infos") ;
    $sql->execute(); 
    $infoss = $sql->fetchAll(PDO::FETCH_ASSOC) ;
    $sql->closeCursor() ;
    $json_tranform = json_encode($infoss);

    echo $json_tranform ;

}
catch(PDOException $e){
    echo "Erreur : " . $e->getMessage();
}

?>