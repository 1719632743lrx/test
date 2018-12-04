//左侧列表
$('.aside_list .list_family').on('mouseover','li',function() {
    $('#categroy_all').show();
});

$('.aside_list').on('mouseleave',function() {
    $('#categroy_all').hide();
});


//轮播图
//【准备工作】
var ad = document.querySelector('.ad'); // 轮播区
var ad_banner = document.querySelector('.ad_banner'); // 整体轮播项ul
var btnLeft = document.querySelector('.btnLeft img'); // 左侧按钮
var btnRight = document.querySelector('.btnRight img'); // 右侧按钮
var links = document.querySelectorAll('.control li'); // 一组小点按钮
var control = document.querySelector('.control');  // 一组小点按钮父元素
var index = 0; // 标识当前显示的那个轮播项
console.log(btnLeft);

// 【功能1：点击右侧按钮实现轮播】
// 1 给右侧按钮注册点击事件
btnRight.onclick = function () {
    // 1.0 判断是否是从第0项开始轮播，若是从第0项开始轮播，则先把ul的left值设置为0，再从0运动的-790
    if (index == 0) {
        ad_banner.style.left = 0 + 'px';
    }
    // 1.1 先把更改之前的a恢复默认样式去掉active类名
    links[index].className = '';
    // 2 更改index ++
    index++;
    // 3 计算目标值
    var v = index * -590;
    // 4 动画运动ul
    move(ad_banner, v);
    // 5.让++之后的下一项突出显示，增加类名active
    // 如果是倒数第一项，则设置index为0 （因为倒数第一项和第0项是一样的）
    if (index == 7) {
        index = 0;
    }
    links[index].className = 'active';
};


// 【功能2：点击左侧按钮实现轮播】
// 1. 给左侧按钮注册事件
btnLeft.onclick = function () {
    console.log('11');
     //2. 把当前显示的轮播项对应的a恢复默认样式,去掉类名active
    links[index].className = '';
    // 3. index--
    index--;
    // 4. 检测是否小于0，若小于0，则先切换成最后一项（设置ul的left值为-5530px），再运动到第6项（6 * -790）
    if (index < 0) {
        ad_banner.style.left = '-4130px'
        index = 6;
    }
    // 5. 计算目标值
    var v = index * -590;
    // 6. 动画ul到达目标值
    move(ad_banner, v);
    // 7. 下一项的a要突出显示,增加类名active
    links[index].className = 'active';
};


// 【功能3：点击小点按钮实现轮播】
// 1. 给每一个小点按钮添加一个属性num表示它在这一组中索引
for (var i = 0; i < links.length; i++) {
    links[i].num = i;
}
// 2. 给类名为control的div注册事件
control.onclick = function (e) {
    // 3. 通过事件对象的target获取最先触发的元素
    var t = e.target;
    // 4. 通过nodeName检测是否是A
    if (t.nodeName == 'LI') {
        // 5. 若是A则开始操作轮播
        // 5.1 把index代表的之前的显示项对应的a去掉类名active
        links[index].className = '';
        // 5.2 改变index为当前点击的a元素的num属性
        index = t.num;
        // 5.3 计算目标值
        var v = index * -590;
        // 5.4 运动ul到达目标值
        move(ad_banner, v);
        // 5.5 改变后的显示项对应的a要加上active类名
        links[index].className = 'active';
    }

};

// 【功能4：自动轮播】
var flag = setInterval(function () {
    // 每间隔3秒调用一次右侧按钮的点击事件程序
    btnRight.onclick();
}, 3000);


// 【功能5：鼠标进入banner，停止轮播】
ad.onmouseenter = function () {
    clearInterval(flag);
};

// 【功能6：鼠标离开banner，启动轮播】
ad.onmouseleave = function () {
    flag = setInterval(function () {
        // 每间隔3秒调用一次右侧按钮的点击事件程序
        btnRight.onclick();
    }, 3000);

};



//电梯导航
// 页面滚动的时候，获取到页面滚动出去的距离
$(window).scroll(function () {
  // 获取到页面滚动出去的距离
  var scrollTop = $(window).scrollTop();
  // 1. 当页面滚动出去的距离 > 0 显示 导航
  //    当页面滚动出去的距离 == 0 隐藏 导航
  if (scrollTop > 0) {
    $('.subnav').show();
  } else {
    $('.subnav').hide();
  }

    if (scrollTop >= $('.mei').offset().top) {
    // 找到导航对应的楼层，高亮
    $('.subnav ul li:eq(3)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else if (scrollTop >= $('.fu').offset().top) {
    // 三层
    $('.subnav ul li:eq(2)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else if (scrollTop >= $('.dian').offset().top) {
    // 二层
    $('.subnav ul li:eq(1)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else if (scrollTop >= $('.jia').offset().top) {
    // 一层
    $('.subnav ul li:eq(0)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else {
    // 如果不在楼层的位置，去掉高亮
    $('.subnav ul li').removeClass('current');
  }
});

// 3. 点击导航的时候，动画的方式，让页面滚动到对应的楼层
$('.subnav ul li:eq(0)').click(function () {
  // console.log($('.jia').offset().top);
  // 让页面滚动到对应的楼层
  $('html,body').animate({
    scrollTop: $('.jia').offset().top
  })
});


$('.subnav ul li:eq(1)').click(function () {
  // 让页面滚动到对应的楼层
  $('html,body').animate({
    scrollTop: $('.dian').offset().top
  })
});
$('.subnav ul li:eq(2)').click(function () {
    // 让页面滚动到对应的楼层
    $('html,body').animate({
        scrollTop: $('.fu').offset().top
    })
});

$('.subnav ul li:eq(3)').click(function () {
    // 让页面滚动到对应的楼层
    $('html,body').animate({
        scrollTop: $('.mei').offset().top
    })
});

// 4. 点击返回按钮，动画的方式回到顶部
$('.back').click(function () {
  $('html,body').animate({
    scrollTop: 0
  }, 200);
});