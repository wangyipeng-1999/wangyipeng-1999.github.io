<?php
header('content-type:text/html;charset=utf-8');
//连接数据库
$link=mysqli_connect('localhost','root','','user');
//设置编码
mysqli_set_charset($link,'utf8');
//获取传递的数据
$u=$_GET['user'];
$p=$_GET['pass'];
$sql2="insert into login(id,pass) values('$u','$p')";

//执行SQL语句
$result=mysqli_query($link,"select * from login where id='$u'");
//判断该结果集中是否存在数据
if(mysqli_fetch_row($result)){
    // setcookie('login',"$u",time()+30);
    // echo "<script>alert('登陆成功');location.href='.././html/liebiao.html'</script>";
    echo 0;
}else{
    $result=mysqli_query($link,$sql2);
   echo 1;
}
//关闭连接
mysqli_close($link);
?>