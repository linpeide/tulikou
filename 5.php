<?php
	// 定义模拟的数据库
	$data=[
		["pic"=>"aa/".mt_rand(1,70).".jpg"],
		["pic"=>"aa/".mt_rand(1,70).".jpg"],
		["pic"=>"aa/".mt_rand(1,70).".jpg"],
		["pic"=>"aa/".mt_rand(1,70).".jpg"],
		["pic"=>"aa/".mt_rand(1,70).".jpg"]
	];

	// 输出请求的数据
	echo json_encode($data);

?>