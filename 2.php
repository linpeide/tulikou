<?php

/**
 * @Author: Administrator
 * @Date:   2018-09-20 15:47:46
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-20 19:10:31
 */
// $value=$_POST['value'];
// $arr=^1(3|4|5|7|8)\d{9}$;

// if(in_array($value, $arr)){
// 	echo 'y';
// }else{
// 	echo "n";
// }
//本代码仅仅是提供一些思路  
  //距离实际应用还有一些距离  
   $mobile =$_POST['value']; 

   $exp = "/^13[0-9]{1}[0-9]{8}$|15[012356789]{1}[0-9]{8}$|18[012356789]{1}[0-9]{8}$|14[57]{1}[0-9]$/"; 
  //下面的1便是手机的第一位数字必须为数字1  
  //[0-9]指后面的数字均为0~9的数字  
  //{9}这中间的9指的是手机号码除了第一位数外，其他要重复10次，刚好就是11位数了  
  if(!preg_match($exp,$mobile)) echo "true"; 
}else{ 
echo "flase";
} 
} 

?>