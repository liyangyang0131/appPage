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
    // onInit: function (swiper) {//初始化之后执行
    //     swiperAnimateCache(swiper);//隐藏动画元素
    //     swiperAnimate(swiper);//初始化完成开始动画
    // },
    // onSlideChangeEnd: function (swiper) {//回调函数，slider切换结束时执行。
    //     swiperAnimate(swiper);//每个slide切换结束时也运行当前slide动画
    // },
    // onTransitionEnd: function (swiper) {//回调函数，过渡结束时触发，接收Swiper实例作为参数。
    //     swiperAnimate(swiper);
    // },
    // //watchSlidesProgress: true,//开启这个参数来计算每个slide的progress(进度)，Swiper的progress无需设置即开启。
    // onProgress: function (swiper) {//回调函数，当Swiper的progress被改变时执行。接受Swiper实例和progress作为参数（可选）。
    //     for (var i = 0; i < swiper.slides.length; i++) {
    //         var slide = swiper.slides[i];
    //         var progress = slide.progress;
    //         var translate = progress * swiper.height / 4;
    //         scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
    //         var opacity = 1 - Math.min(Math.abs(progress / 2), 0.5);
    //         slide.style.opacity = opacity;
    //         es = slide.style;
    //         es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,' + translate + 'px,-' + translate + 'px) scaleY(' + scale + ')';
    //     }
    // },
    // onSetTransition: function (swiper, speed) {//回调函数，每次当Swiper开始过渡动画时持续执行。transtion获取到的是Swiper的speed值。
    //     for (var i = 0; i < swiper.slides.length; i++) {
    //         es.webkitTransitionDuration =
    //             es.MsTransitionDuration =
    //             es.msTransitionDuration =
    //             es.MozTransitionDuration =
    //             es.OTransitionDuration =
    //             es.transitionDuration = speed + 'ms';
    //     }
    // }

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