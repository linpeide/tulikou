<?php

/**
 * @Author: Administrator
 * @Date:   2018-09-19 19:27:29
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-19 19:45:40
 */
$value=$_POST['value'];
$arr=['李翠花','张菊花','王大锤','葛二蛋','煜煜','狒狒','春春'];

if(in_array($value, $arr)){
	echo 'y';
}else{
	echo "n";
}
?>