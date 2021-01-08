var cartlist=[]
//跳转登录页
$('.a1 span').eq(1).click(function() {
    location.href = './login.html'
})

 //目录菜单栏
var header = document.querySelector('.header')
 header.onclick = function(e){
    var e = e || window.event
    var target = e.target || e.srcElement
     
    if(target.innerHTML == '目录'){
        
document.querySelector('.caidan').style.display = 'block'
       
    }
    if(target.className =='close2'){
        
 document.querySelector('.caidan').style.display = 'none'
    }

    if(target.id == 'mumu'){
        console.log(11);
        document.querySelector('.cart').style.display = 'block'
    }
    if(target.className == 'closee'){
        document.querySelector('.cart').style.display = 'none'
    }
 }
  





//购物车增加商品
var shangpin = document.querySelector('.shangpin')
shangpin.onclick = function(e) {
    var e = e || window.event
    var target = e.target || e.srcElement
    //加
    if (target.innerHTML == '+') {
        jia(target)
    }

    //减
    if (target.innerHTML == '-') {
        jian(target)
    }
    //删除
    if (target.innerHTML == '删除') {
        
    
        cartlist.splice($(target).parents('ul').attr('index'),1)
        localStorage.setItem('cartlist', JSON.stringify(cartlist))
        console.log(cartlist)
    }
    loaddata()
}




function jia(btn) {
   
    var text = btn.previousElementSibling.previousElementSibling.lastElementChild.innerHTML
    var value1 = parseInt(text)
    value1++
     cartlist[$(btn).parents('ul').attr('index')].num= value1
    localStorage.setItem('cartlist', JSON.stringify(cartlist))

    btn.previousElementSibling.previousElementSibling.lastElementChild.innerHTML = value1

}

function jian(btn) {
    var text = btn.previousElementSibling.lastElementChild.innerHTML
    var value1 = parseInt(text)
    value1--
    cartlist[$(btn).parents('ul').attr('index')].num= value1
    localStorage.setItem('cartlist', JSON.stringify(cartlist))
    btn.previousElementSibling.lastElementChild.innerHTML = value1
}






// 说明下列框

setTimeout(() => {
    let descFlag = 0;
    var description = document.querySelector('.say');
    var descDetail = document.querySelector('.say-con');
    var send = document.querySelector('.send1');

    description.addEventListener('click', function(e) {
        var event = e || window.event;
        const target = event.target;
        descFlag = !descFlag;
        descShow(descFlag, 'iconfont aa1', target, descDetail);
        descShow(descFlag, 'iconfont bb1', target, send);
    });
}, 0);


//描述框显示
function descShow(descFlag, className, target, box) {
    if (target.className === className) {
        if (descFlag) {
            target.innerHTML = '&#xe652';
            box.style.display = 'block';
        } else {
            target.innerHTML = '&#xe60b';
            box.style.display = 'none';
        }
    }
}




//底部下拉框
var kuang = document.querySelector('.kuang');
var bot = document.querySelector('.bot_1');

var a2 = document.querySelector('.a2');
var b1 = document.querySelector('.b1');
var flag = false;
bot.addEventListener('click', function() {
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
    },false
);





//动态生成页面渲染商品
var u = location.href;
var url = u.split('=')[1];
var data
$.ajax({
    url: '../data/json1.json',
    async: false,
    success: function(res) {
        var str = '';
        data = res
        for (var i = 0; i < res.length; i++) {
            if (url == res[i].id) {
                str = `<div class="box_left">
                <ul>
                    <li>
                        <img src="${res[i].img}">
                    </li>
                    <li>
                        <img src="https://www.dior.cn/couture/ecommerce/media/catalog/product/cache/1/grid_image_2/460x497/17f82f742ffe127f42dca9de82fb58b1/H/y/1598292042_E1411TRICY_D301_E02_GH.jpg?imwidth=430">
                    </li>
                    <li>
                        <img src="https://www.dior.cn/couture/ecommerce/media/catalog/product/cache/1/grid_image_3/460x497/17f82f742ffe127f42dca9de82fb58b1/h/y/1598363105_E1411TRICY_D301_E03_GH.jpg?imwidth=430">
                    </li>
                    <li>
                        <img src="https://www.dior.cn/couture/ecommerce/media/catalog/product/cache/1/grid_image_12/460x497/17f82f742ffe127f42dca9de82fb58b1/q/b/1598633117_E1411TRICY_D301_E12_GH.jpg?imwidth=430">
                    </li>
                </ul>
            </div>
            <div class="box_right">
                 <p>#新品</p>
                 <h1>${res[i].content}</h1>
                 <span>${res[i].newcontent}</span><br>
                 <span>编号: E1411TRICY_D301</span>
                 <hr>
                 <strong>¥${res[i].price}</strong>
                   <div class="bt">
                     <button type="button" class="shop">立即购买</button>
                     <button type=" button" class="look">查看精品店库存</button>
                     <div class="iconfont yuan">&#xe6ac;</div>
                   </div>

                 <div class="say">
                    <h4 class="say1 clickevent">说明 
                        <span class="iconfont aa1" style="margin-left: 397px;">&#xe60b;</span>
                    </h4>
                    <div class="say-con">
                         <p>这款 Dior Tribales 耳环在 Dior 标志性款式的基础上演绎<br/>
                            出新的风格。白色树脂珠饰悬挂着金色饰面金属字母<br/>
                            “D.I.O.R.”，字母“O”以仿水晶镶嵌。这款醒目的耳环可与 <br/>
                            Dio(r)evolution 系列的其他款式搭配。</p>
                            <ul style="list-style: disc; margin-left: 20px; margin-top: 30px;">
                                <li>白色树脂珠饰</li>
                                <li>白色仿水晶</li>
                                <li>“Dior”标志</li>
                                <li>字母吊饰</li>
                                <li>金色饰面金属</li>
                                <li>珠饰直径：1.4 厘米</li>
                                <li>长度：2 厘米</li>
                                <li>一体式扣环与珠饰相连</li>
                                <li>成对出售</li>
                                <li>德国制造</li>
                            </ul>
                    </div>
                    <hr>
                    <h4 class="send clickevent">免费送货及退换 
                        <span class="iconfont bb1" style="margin-left: 397px;">&#xe60b;</span>
                    </h4>
                    <div class="send1">
                         <p>
                            免费标准配送<br/>

                            迪奥官方网站提供免费配送至全国大部分地区，所有商品的<br/>
                            送达将由顺丰速运提供取件密码，为您的商品提供安全的派<br/>
                            送服务。<br/>
                            标准配送（2-4 个工作日）：免费
                         </p>
                         <p>
                            迪奥将会在第一时间为您发货<br/>

                            所有现货商品在1-2天内发货，门店调货商品会在3-14天内<br/>
                            发货
                         </p>
                         <p>
                            免费退换货<br/>

                            如您购买的商品满足退换货条件，您可以自收到商品后7天<br/>
                            内联系客服提交退货申请, 或30天内联系客服提交换货申<br/>
                            请，迪奥提供免费上门取件服务。换货时，一件商品支持换<br/>
                            一件等值商品。详情请致电客服热线 400 122 66 22
                         </p>
                         <p>
                             常见问题解答：<br/>
                             <a href="#">订单多久可以发货？</a><br/>
                             <a href="#">我如何进行退货？</a><br/>
                             <a href="#">如何追踪物流信息？</a><br/>
                             <a href="#">是否有礼品包装?</a><br/>
                         </p>
                    </div>
                 </div>`;
            }
        }
        $('.mian-con').html(str);
    },
});




//立即购买加入购物车
$('.mian-con').click(function(e) {
    target = e.target
    if (target.innerHTML == '立即购买') {
        $('.cart').css('display', 'block')
    }
})


$('.shop').click(function() {
    var cartlist = localStorage.getItem('cartlist')
    if (cartlist) {
        var arr = JSON.parse(cartlist)
        console.log(arr);
        var a = 0
        arr.forEach(function(item) {
            if (item.id == data[url].id) {
                item.num++
                    localStorage.setItem('cartlist', JSON.stringify(arr))
                a = 1
            }
        })
        if (!a) {
            data[url].num = 1
            arr.push(data[url])
            localStorage.setItem('cartlist', JSON.stringify(arr))

        }
    } else {
        data[url].num = 1
        localStorage.setItem('cartlist', JSON.stringify([data[url]]))
    }

})

function loaddata(){
    cartlist = localStorage.getItem('cartlist')
    var sum=0
    var str = ''
    if (cartlist) {
    cartlist = JSON.parse(cartlist)
    for (var i = 0; i < cartlist.length; i++) {
        str += `       
            <ul index="${i}">
            <li class="photo1">
                <div class="product-li">
                    <img src="${cartlist[i].img}" alt="">
                    <span class="iconfont">&#xe6ac;</span>
                </div>
                <div class="product-list">
                    <p>
                    ${cartlist[i].content}
                    </p>
                    <span class="num">  ${cartlist[i].price} </span>
                    <p>
                        <a >删除</a>
                    </p>
                    <div class="product">
                        <p>数量：<span>${cartlist[i].num}</span></p>
                        <button class="jian">-</button>
                        <button class="jia">+</button>
                    </div>
                </div>
            </li>
        </ul>
        `
        sum=sum-0+cartlist[i].price*cartlist[i].num
    }
    console.log(cartlist)
    console.log(sum)
        $('.shangpin').html(str)
        $('.zj').children('span').html(sum)
    }

}
loaddata()


//返回顶部
function pageScroll() {
    window.scrollBy(0, -100);
    scrolldelay = setTimeout('pageScroll()', 100);

    var sTop = document.documentElement.scrollTop + document.body.scrollTop;
    if (sTop == 0) clearTimeout(scrolldelay);
}


function stime(){
    
    var a
    a=localStorage.getItem('cartlist')
    var b
    setInterval(function(){
     b=localStorage.getItem('cartlist')  
     if(a==b){
      // console.log(111);
     }else{
    //    console.log(222);
       loaddata()
       a=b
     }
    },1500)
   }
   stime()