scaleW = window.innerWidth / 320;
scaleH = window.innerHeight / 480;
var resizes = document.querySelectorAll('.resize');

for (var j = 0; j < resizes.length; j++) {
    resizes[j].style.width = parseInt(resizes[j].style.width) * scaleW + 'px';
    resizes[j].style.height = parseInt(resizes[j].style.height) * scaleH + 'px';
    resizes[j].style.top = parseInt(resizes[j].style.top) * scaleH + 'px';
    resizes[j].style.left = parseInt(resizes[j].style.left) * scaleW + 'px';
}

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',//设置水平(horizontal)或垂直(vertical)
    //pagination : '.swiper-pagination',//分页器容器的css选择器或HTML标签。
    mousewheelControl: true,//鼠标滚动控制
    on:{
        init(){
            swiperAnimateCache(this); // 隐藏动画元素
            swiperAnimate(this);      // 初始化完成开始动画
        },
        slideChangeTransitionEnd(){
            swiperAnimate(this);  // 每个slider切换结束时也运行当前slide动画
            //this.slideChangeTransitionEnd.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
        }
    }
})

$(function () {
    // 常量
    var music = $('#myMusic')[0];  // 原生
    // 初始化
    init();

    // 方法
    function init() {
        musicPlay();
    }

    // 音乐播放、暂停
    function musicPlay() {
        music.play();
    }
    function musicpause() {
        music.pause();
    }

    // 事件
    // 音乐
    $('.bgMusic').tap(function (e) {
        $(this).toggleClass('musicStop');
        if ($(this).hasClass('musicStop')) {
            musicpause();
        } else {
            musicPlay();
        }
        e.stopPropagation();
    })
})