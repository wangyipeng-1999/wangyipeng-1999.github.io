    
    
   
//点击购物车图标显示
function showCart () {
  var open = document.querySelector('.openCart')
  var cart = document.querySelector('.cart')
  var closex = document.querySelector('.closex')
  open.onclick = function(){
      cart.style.display = 'block'
  }
  closex.onclick = function(){
      cart.style.display = 'none'
  }
}
showCart ()

   
   
   
   
   
   
   //手机登录和密码登录切换
    var passwordLogin = document.querySelector('.passwordLogin');
    var phoneLogin = document.querySelector('.phoneLogin');

    var tab1 = document.querySelector('.tab1');
    var tab2 = document.querySelector('.tab2');

    tab1.addEventListener('click', function () {
      phoneLogin.style.display = 'block';
      passwordLogin.style.display = 'none';
    }, false);
    tab2.addEventListener('click', function () {
      passwordLogin.style.display = 'block';
      phoneLogin.style.display = 'none';
    }, false);

    //用户登录
    var input1 = document.querySelector('.input1')
    var pass1 = document.querySelector('.pass1')
    var bt = document.querySelector('.bt')
    console.log(input1,pass1,bt);

    input1.addEventListener('blur',function(){
    
        var reg2 = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/
      
          if (!reg2.test(input1.value)) {
             console.log(reg2.test(input1.value));
              bt.innerHTML = '手机号不对！'
          }

    })







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
