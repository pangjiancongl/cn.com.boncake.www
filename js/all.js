// 点击header_position-area-list里面的地址上面的地址会改成这个地址图片也会改动
$(".header_position-area-list li a").on("click", function () {
  // 改变文本
  $(".header_position span").html($(this).text());
  // 获取点击图片的路径
  let ImgSrc = $(this).children("img").attr("src");
  // 改变图片路径
  $(".header_position .oImg").attr("src", ImgSrc);
});

$(".all-series").click(function () {
  $(".bj").show();
});

$(".all-pro").click(function () {
  $(".product li").show();
  $(".product li").css("margin-right", 31);
  for (let i = 0; i < 60; i++) {
    i = i + 3;
    $(`.product li`).eq(i).css("margin-right", 0);
  }

  $(".all-pro").css("background-color", "#333333");
  $(".all-pro").css("color", "#fff");
  // $(".product ul").addClass("no");
  $(".all-series span").text("所有系列");
});
$(".theme-series li").click(function () {
  name = $(this).attr("class");
  $(`.${name}s`).siblings("li").hide();
  $(`.${name}s`).show();
  $(`.${name}s`).css("margin-right", 31);
  $(`.${name}s`).eq(3).css("margin-right", 0);
  $(`.${name}s`).eq(7).css("margin-right", 0);
  $(".bj").hide();
  $(".all-pro").css("background-color", "#f3f2f1");
  $(".all-pro").css("color", "#000");

  let a = $(this).children(".series-desc").children("div:first-child").text();

  $(".all-series span").text(a);
});
