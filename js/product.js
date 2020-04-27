// 点击header_position-area-list里面的地址上面的地址会改成这个地址图片也会改动
$(".header_position-area-list li a").on("click", function () {
  // 改变文本
  $(".header_position span").html($(this).text());
  // 获取点击图片的路径
  let ImgSrc = $(this).children("img").attr("src");
  // 改变图片路径
  $(".header_position .oImg").attr("src", ImgSrc);
});
// 放大镜

$("#exzoom").exzoom(
  (defaults = {
    navWidth: 76, //列表每个宽度,该版本中请把宽高填写成一样
    navHeight: 76, //列表每个高度,该版本中请把宽高填写成一样
    autoPlay: false, //是否自动播放
    navBorder: 0, //列表边框，没有边框填写0，边框在css中修改
  })
);
// 点击标题，下面的内容就换成相关内容
$(".idea-title li").click(function () {
  let $index = $(this).index();
  $(this).children(".title-item-text").addClass("wei");
  $(this).children(".title-item-en").show();
  $(this).siblings().children(".title-item-en").hide();
  $(this).siblings().children(".title-item-text").removeClass("wei");
  $(".idea-content li").eq($index).siblings("li").hide();
  $(".idea-content li").eq($index).show();
});
