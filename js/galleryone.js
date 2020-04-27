// 点击header_position-area-list里面的地址上面的地址会改成这个地址图片也会改动
$(".header_position-area-list li a").on("click", function () {
  // 改变文本
  $(".header_position span").html($(this).text());
  // 获取点击图片的路径
  let ImgSrc = $(this).children("img").attr("src");
  // 改变图片路径
  $(".header_position .oImg").attr("src", ImgSrc);
});

var box = new PictureCarousel("#box", {
  direction: "left", //轮播方向：left，right
  interval: 4000, //单位ms,轮播持续时间
  duration: 50, //单位ms,自动切换时间间隔，最佳速度:容器宽度/duration = 25
  autoplay: true, //是否自动播放
  display: 1, //同时显示的滑块数量
  arrow: true, //是否显示左右箭头
  dots: true, //是否显示指示点
  listData: [
    //插入图片等的数据
    { src: "./images/lunbotu01.jpg", alt: "1" },
    { src: "./images/lunbotu01.jpg", alt: "2" },
  ],
});
box.init();
