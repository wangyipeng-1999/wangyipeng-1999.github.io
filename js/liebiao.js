//目录菜单栏
var caidan = document.querySelector('.caidan');
var mulu = document.querySelector('.mulu');
var close1 = document.querySelector('.close1');

mulu.addEventListener('click', function () {
  caidan.style.display = 'block';
});
close1.addEventListener('click', function () {
  caidan.style.display = 'none';
});




//跳转登录页
$('.a1 span').eq(1).click(function(){
  location.href='./login.html'
})



//点击购物车图标显示
function showCart() {
  var open = document.querySelector('.openCart');
  var cart = document.querySelector('.cart');
  var closex = document.querySelector('.closex');
  open.onclick = function () {
    cart.style.display = 'block';
  };
  closex.onclick = function () {
    cart.style.display = 'none';
  };
}
showCart();




//底部下拉框
var kuang = document.querySelector('.kuang');
var bot = document.querySelector('.bot_1');

var a2 = document.querySelector('.a2');
var b1 = document.querySelector('.b1');
var flag = false;
bot.addEventListener(
  'click',
  function () {
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
  },
  false
);

//返回顶部
function pageScroll() {
  window.scrollBy(0, -100);
  scrolldelay = setTimeout('pageScroll()', 100);

  var sTop = document.documentElement.scrollTop + document.body.scrollTop;
  if (sTop == 0) clearTimeout(scrolldelay);
}

//列表页
$.ajax({
  url: '../data/json1.json',
  success: function (res) {
    var str = '';
    for (var i = 0; i < res.length; i++) {
      str += ` <li class="product">
            <div>
              <span class="iconfont">&#xe6ac;</span>
              <a href='${res[i].href}'><img src="${res[i].img }" alt=""></a>
              <p>
               ${res[i].content}<br />
                ${res[i].newcontent}
              </p>
            </div>
          </li>`;
    }
    $('.grid-view-content').html(str);
  },
});
