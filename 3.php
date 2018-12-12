<?php
	// 定义模拟的数据库
	$data=[
		["pic"=>"image/".mt_rand(18,29).".jpg"],
		
	];

	// 输出请求的数据
	echo json_encode($data);

?>