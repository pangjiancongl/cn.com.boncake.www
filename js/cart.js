// 点击header_position-area-list里面的地址上面的地址会改成这个地址图片也会改动
$(".header_position-area-list li a").on("click", function () {
  // 改变文本
  $(".header_position span").html($(this).text());
  // 获取点击图片的路径
  let ImgSrc = $(this).children("img").attr("src");
  // 改变图片路径
  $(".header_position .oImg").attr("src", ImgSrc);
});

// 全选
let flag = true;
$(".cart-checkbox-label i").click(function () {
  $(this).toggleClass("btn");
});
$("tbody i").click(function () {
  if ($("tbody i").length == $("tbody .btn").length) {
    $(".oBtn").addClass("btn");
  } else {
    $(".oBtn").removeClass("btn");
  }
});

$(".oBtn").click(function () {
  if (flag) {
    $(".cart-checkbox-label i").addClass("btn");
    flag = false;
  } else {
    $(".cart-checkbox-label i").removeClass("btn");
    flag = true;
  }
});

//   下拉菜单留言
$(".mock-select").click(function () {
  $(".mock-option").show();
});
$(".text").click(function () {
  $(".mock-select span").text($(this).text());
  $(".mock-option").hide();
});
$(".bt").click(function () {
  $(".mock-select span").text($(this).prevAll("input").val());
  $(".mock-option").hide();
});

//   数量增加
$(".number-group img").click(function () {
  $(".number-group input").val(Number($(".number-group input").val()) + 1);
  $(".moneyss").text(Number($(".p-subtotal span").text()) + 198);
  $(".p-subtotal>span").text(Number($(".p-subtotal span").text()) + 198);
  $(".fen").text(Number($(".p-subtotal span").text()));
});

$(".numbers").blur(function () {
  // $(".td-price span").text(198 * Number($(".numbers").val()));
  $(".p-subtotal span").text(198 * Number($(".numbers").val()));
  $(".moneyss").text(Number($(".p-subtotal span").text()));
  $(".fen").text(Number($(".p-subtotal span").text()));
});

//   点击x隐藏商品

$(".x img").click(function () {
  $(this).parents("tr").hide();
  console.log(1);
});

$(".single-parts-title span").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  let $index = $(this).index();
  console.log($index);
  $(".single-parts-goods").eq($index).show();
  $(".single-parts-goods").eq($index).siblings(".single-parts-goods").hide();
});
