






  //底部下拉框
  var kuang = document.querySelector('.kuang')
  var bot = document.querySelector('.bot_1')

  var a2 = document.querySelector('.a2')
  var b1 = document.querySelector('.b1')
  var flag = false;
  bot.addEventListener('click', function () {
      // kuang.style.display = 'none';
      flag = !flag;
      if (flag) {
          //点击时显示上箭头和下拉框
          kuang.style.display = 'block';
          b1.style.display = 'inline-block';
          a2.style.display = 'none';
      } else {
          kuang.style.display = 'none';
          b1.style.display = 'none';
          a2.style.display = 'inline-block';
      }
  }, false);


//返回顶部
function pageScroll(){
window.scrollBy(0,-100);
scrolldelay = setTimeout('pageScroll()',100);

var sTop=document.documentElement.scrollTop+document.body.scrollTop;
if(sTop==0) clearTimeout(scrolldelay);
}

$('.zc').click(function(){
    var user1=$('#phone').val()
    var pass1=$('#pass').val()
    
    if(user1 && pass1){
        console.log(user1,pass1)
        $.ajax({
            url:'../php/zhuce.php',
            data:{user:user1,pass:pass1},
            success:function(dat){
                if(dat==1){
                    alert('注册成功，去登录吧')
                    location.href='login.html'
                }else{
                    alert("账户已存在，换个号码")
                }
            }
        })
    }else{
        alert('输入框不能为空')
    }
})