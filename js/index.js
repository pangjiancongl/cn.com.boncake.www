// 点击header_position-area-list里面的地址上面的地址会改成这个地址图片也会改动
$(".header_position-area-list li a").on("click", function () {
  // 改变文本
  $(".header_position span").html($(this).text());
  // 获取点击图片的路径
  let ImgSrc = $(this).children("img").attr("src");
  // 改变图片路径
  $(".header_position .oImg").attr("src", ImgSrc);
});

// 轮播图

let num = 0;
$(".right-go").click(function () {
  num++;
  if (num > 2) {
    num = 0;
  }
  $(".zoom-wrapper-top ul").animate({
    left: -95 * num,
  });
});
$(".left-go").click(function () {
  num--;
  if (num < 0) {
    num = 2;
  }
  $(".zoom-wrapper-top ul").animate({
    left: -95 * num,
  });
});
let timer = setInterval(function () {
  $(".right-go").click();
}, 3000);
$(".top-pro-swiper").mousemove(function () {
  clearInterval(timer);
});
$(".top-pro-swiper").mouseout(function () {
  clearInterval(timer);
  timer = setInterval(function () {
    $(".right-go").click();
  }, 3000);
});
// 商品显示隐藏
$(".zoom-wrappers").css("display", "none");
$(".pr2").click(function () {
  $(".zoom-wrappers").slideToggle(1000);
});

$("#twos li").click(function () {
  $(".sizes").prop("value", $(this).text());
  // console.log($(this).text());
});

// 轮播图
let nun = 0;
// clearInterval(timer);
$(".right-go02").click(function () {
  nun++;
  if (nun > 2) {
    nun = 0;
  }
  $(".zoom-wrapper-tops ul").animate({
    left: -95 * nun,
  });
});
$(".left-go02").click(function () {
  nun--;
  if (nun < 0) {
    nun = 2;
  }
  $(".zoom-wrapper-tops ul").animate({
    left: -95 * nun,
  });
});
$(".top-pro-swipers").mousemove(function () {
  clearInterval(timer);
});
$(".top-pro-swipers").mouseout(function () {
  clearInterval(timer);
  timer = setInterval(function () {
    $(".right-go02").click();
  }, 3000);
});

// 点击开始购物关闭地址选择
$(".begin").click(function () {
  $(".bj").hide();
});
// 点击加入购物车改变购物车商品数累

$(".join-cart").click(function () {
  let a = $(this)
    .parent(".buy-btn")
    .prevAll(".cake-num")
    .children("input")
    .val();

  $(".header-controller-cart-text span b").html(
    Number(a) + Number($(".header-controller-cart-text span b").html())
  );
});
