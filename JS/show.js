window.addEventListener('load', function () {
    var div = document.querySelector('.nr');
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var arr = ['摆烂', '躺着', '躺着吃', '躺着看电视', '发呆', '躺着发呆', '拖地',
        '洗厕所', '看书', '跳操', '运动', '写一首诗', '摸鱼', '随便学点',
        '听音乐', '少玩手机', '早睡', '看电影', '购物', '上街去', '喝水',
        '躺着背单词', '买点水果', '坐五分钟吧', '别翘二郎腿', '冥想', '拉伸'];

    var timer = setInterval(function () {
        div.innerHTML = arr[getRandom(0, arr.length - 1)];
    }, 20)

    div.addEventListener('click', function () {
        clearInterval(timer);
    })
})