// 点击header_position-area-list里面的地址上面的地址会改成这个地址图片也会改动
$(".header_position-area-list li a").on("click", function () {
  // 改变文本
  $(".header_position span").html($(this).text());
  // 获取点击图片的路径
  let ImgSrc = $(this).children("img").attr("src");
  // 改变图片路径
  $(".header_position .oImg").attr("src", ImgSrc);
});
// 点击提交出现提交结果
$(".btn").click(function () {
  if ($("#one").val().trim().length == 0) {
    $(".ts").text("请输入公司名称").show();
    setTimeout(function () {
      $(".ts").hide();
    }, 2000);
  } else if ($("#two").val().trim().length == 0) {
    $(".ts").text("请输入公司地址").show();
    setTimeout(function () {
      $(".ts").hide();
    }, 2000);
  } else if ($("#there").val().trim().length == 0) {
    $(".ts").text("请输入公司职位").show();
    setTimeout(function () {
      $(".ts").hide();
    }, 2000);
  } else if ($("#four").val().trim().length == 0) {
    $(".ts").text("请输入联系人姓名").show();
    setTimeout(function () {
      $(".ts").hide();
    }, 2000);
  } else if ($("#five").val().trim().length == 0) {
    $(".ts").text("请输入联系人手机号").show();
    setTimeout(function () {
      $(".ts").hide();
    }, 2000);
  } else {
    $(".ts").text("提交成功").show();
    setTimeout(function () {
      $(".ts").hide();
    }, 2000);
  }
});
