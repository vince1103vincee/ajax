<?php
header('Content-Type: application/json; charset=UTF-8');

if($_SERVER['REQUEST_METHOD'] == "POST"){
    @$nickname = $_POST['nickname'];
    @$gender = $_POST['gender'];
    @$msg = 'Back-end PHP has received the data.';
    if ($nickname != null && $gender != null){
        echo json_encode(array(
            'msg' => $msg,
            'nickname' => $nickname,
            'gender' => $gender
            
        ));
    }else {
        echo json_encode(array(
            'errorMsg' => 'Data incompleted'
        ));
    }
    }else{
    echo json_encode(array(
        'errorMsg' => 'Request failed. Only allowe to accees via POST'
    ));
}


?>