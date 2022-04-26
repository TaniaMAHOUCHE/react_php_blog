<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// le nom du server est le nom du service qui contient ma database
$servername = "db";
$username = "root";
$password = "password";
$dbname = "data";



try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

    // Insérer les données dans la table 


    $sql = "INSERT INTO infos ( name, title, article) VALUES (:name, :title, :article)";
    $data = [
        ':name' => $_POST['name'],
        ':title' => $_POST['title'] ,
        ':article' => $_POST['article'],
    ];

    $stmt= $pdo->prepare($sql);
    $stmt->execute($data);



    // Supprimer les données dans la table



    // Modifier les données dans la table

    $sql = $pdo->prepare("SELECT * FROM infos") ;
    $sql->execute(); 
    $infoss = $sql->fetchAll(PDO::FETCH_ASSOC) ;
    $sql->closeCursor() ;
    $json_tranform = json_encode($infoss);

    echo $json_tranform ;



} catch (PDOException $e )  {
    echo $e->getMessage();


}

?>