//����б�
$('.aside_list .list_family').on('mouseover','li',function() {
    $('#categroy_all').show();
});

$('.aside_list').on('mouseleave',function() {
    $('#categroy_all').hide();
});


//�ֲ�ͼ
//��׼��������
var ad = document.querySelector('.ad'); // �ֲ���
var ad_banner = document.querySelector('.ad_banner'); // �����ֲ���ul
var btnLeft = document.querySelector('.btnLeft img'); // ��ఴť
var btnRight = document.querySelector('.btnRight img'); // �Ҳఴť
var links = document.querySelectorAll('.control li'); // һ��С�㰴ť
var control = document.querySelector('.control');  // һ��С�㰴ť��Ԫ��
var index = 0; // ��ʶ��ǰ��ʾ���Ǹ��ֲ���
console.log(btnLeft);

// ������1������Ҳఴťʵ���ֲ���
// 1 ���Ҳఴťע�����¼�
btnRight.onclick = function () {
    // 1.0 �ж��Ƿ��Ǵӵ�0�ʼ�ֲ������Ǵӵ�0�ʼ�ֲ������Ȱ�ul��leftֵ����Ϊ0���ٴ�0�˶���-790
    if (index == 0) {
        ad_banner.style.left = 0 + 'px';
    }
    // 1.1 �ȰѸ���֮ǰ��a�ָ�Ĭ����ʽȥ��active����
    links[index].className = '';
    // 2 ����index ++
    index++;
    // 3 ����Ŀ��ֵ
    var v = index * -590;
    // 4 �����˶�ul
    move(ad_banner, v);
    // 5.��++֮�����һ��ͻ����ʾ����������active
    // ����ǵ�����һ�������indexΪ0 ����Ϊ������һ��͵�0����һ���ģ�
    if (index == 7) {
        index = 0;
    }
    links[index].className = 'active';
};


// ������2�������ఴťʵ���ֲ���
// 1. ����ఴťע���¼�
btnLeft.onclick = function () {
    console.log('11');
     //2. �ѵ�ǰ��ʾ���ֲ����Ӧ��a�ָ�Ĭ����ʽ,ȥ������active
    links[index].className = '';
    // 3. index--
    index--;
    // 4. ����Ƿ�С��0����С��0�������л������һ�����ul��leftֵΪ-5530px�������˶�����6�6 * -790��
    if (index < 0) {
        ad_banner.style.left = '-4130px'
        index = 6;
    }
    // 5. ����Ŀ��ֵ
    var v = index * -590;
    // 6. ����ul����Ŀ��ֵ
    move(ad_banner, v);
    // 7. ��һ���aҪͻ����ʾ,��������active
    links[index].className = 'active';
};


// ������3�����С�㰴ťʵ���ֲ���
// 1. ��ÿһ��С�㰴ť���һ������num��ʾ������һ��������
for (var i = 0; i < links.length; i++) {
    links[i].num = i;
}
// 2. ������Ϊcontrol��divע���¼�
control.onclick = function (e) {
    // 3. ͨ���¼������target��ȡ���ȴ�����Ԫ��
    var t = e.target;
    // 4. ͨ��nodeName����Ƿ���A
    if (t.nodeName == 'LI') {
        // 5. ����A��ʼ�����ֲ�
        // 5.1 ��index�����֮ǰ����ʾ���Ӧ��aȥ������active
        links[index].className = '';
        // 5.2 �ı�indexΪ��ǰ�����aԪ�ص�num����
        index = t.num;
        // 5.3 ����Ŀ��ֵ
        var v = index * -590;
        // 5.4 �˶�ul����Ŀ��ֵ
        move(ad_banner, v);
        // 5.5 �ı�����ʾ���Ӧ��aҪ����active����
        links[index].className = 'active';
    }

};

// ������4���Զ��ֲ���
var flag = setInterval(function () {
    // ÿ���3�����һ���Ҳఴť�ĵ���¼�����
    btnRight.onclick();
}, 3000);


// ������5��������banner��ֹͣ�ֲ���
ad.onmouseenter = function () {
    clearInterval(flag);
};

// ������6������뿪banner�������ֲ���
ad.onmouseleave = function () {
    flag = setInterval(function () {
        // ÿ���3�����һ���Ҳఴť�ĵ���¼�����
        btnRight.onclick();
    }, 3000);

};



//���ݵ���
// ҳ�������ʱ�򣬻�ȡ��ҳ�������ȥ�ľ���
$(window).scroll(function () {
  // ��ȡ��ҳ�������ȥ�ľ���
  var scrollTop = $(window).scrollTop();
  // 1. ��ҳ�������ȥ�ľ��� > 0 ��ʾ ����
  //    ��ҳ�������ȥ�ľ��� == 0 ���� ����
  if (scrollTop > 0) {
    $('.subnav').show();
  } else {
    $('.subnav').hide();
  }

    if (scrollTop >= $('.mei').offset().top) {
    // �ҵ�������Ӧ��¥�㣬����
    $('.subnav ul li:eq(3)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else if (scrollTop >= $('.fu').offset().top) {
    // ����
    $('.subnav ul li:eq(2)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else if (scrollTop >= $('.dian').offset().top) {
    // ����
    $('.subnav ul li:eq(1)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else if (scrollTop >= $('.jia').offset().top) {
    // һ��
    $('.subnav ul li:eq(0)')
      .addClass('current')
      .siblings()
      .removeClass('current');
  } else {
    // �������¥���λ�ã�ȥ������
    $('.subnav ul li').removeClass('current');
  }
});

// 3. ���������ʱ�򣬶����ķ�ʽ����ҳ���������Ӧ��¥��
$('.subnav ul li:eq(0)').click(function () {
  // console.log($('.jia').offset().top);
  // ��ҳ���������Ӧ��¥��
  $('html,body').animate({
    scrollTop: $('.jia').offset().top
  })
});


$('.subnav ul li:eq(1)').click(function () {
  // ��ҳ���������Ӧ��¥��
  $('html,body').animate({
    scrollTop: $('.dian').offset().top
  })
});
$('.subnav ul li:eq(2)').click(function () {
    // ��ҳ���������Ӧ��¥��
    $('html,body').animate({
        scrollTop: $('.fu').offset().top
    })
});

$('.subnav ul li:eq(3)').click(function () {
    // ��ҳ���������Ӧ��¥��
    $('html,body').animate({
        scrollTop: $('.mei').offset().top
    })
});

// 4. ������ذ�ť�������ķ�ʽ�ص�����
$('.back').click(function () {
  $('html,body').animate({
    scrollTop: 0
  }, 200);
});