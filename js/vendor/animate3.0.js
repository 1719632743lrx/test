
/*
  功能：动画
  参数：
    element 表示要运动的元素  元素对象
    targetValue 表示的是目标值 数字

*/

function move(element, targetValue) {
  //【 清除旧的定时器】
  clearInterval(element.num);
  // 产生新的定时器 不同的时间→ 定时器
  element.num = setInterval(function () {
    // 不停的状态→ 更改div的left值
    // 获取原有的left值
    var v = element.offsetLeft;
    // 判断是否到达目标
    if (v == targetValue) {
      // 清除定时器
      clearInterval(element.num);
      // 结束本次函数的执行
      // return;
    }
    // 加速度  10  8   5  3  1
    // 加速度  -10 -8  -5 -3 -1
    //缓冲运动公式：(目标值-当前值)/基数
    // 判断是否是反方向运动
    var speed = (targetValue - v) / 10;
    if (targetValue < v) {
      speed = Math.floor(speed);
    } else {
      speed = Math.ceil(speed);
    }
    element.style.left = v + speed + 'px';


  }, 10);
};

