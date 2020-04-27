// 点击header_position-area-list里面的地址上面的地址会改成这个地址图片也会改动
$(".header_position-area-list li a").on("click", function () {
  // 改变文本
  $(".header_position span").html($(this).text());
  // 获取点击图片的路径
  let ImgSrc = $(this).children("img").attr("src");
  // 改变图片路径
  $(".header_position .oImg").attr("src", ImgSrc);
});
// 账号登录和手机登录验证切换
$(".name").click(function () {
  $(".two").hide();
  $(".one").show();
  $(this).css("color", "#d3b145");
  $(".password").css("color", "#333");
});

$(".password").click(function () {
  $(this).css("color", "#d3b145");
  $(".name").css("color", "#333");
  $(".one").hide();
  $(".two").show().css("color", "#d3b145");
});

$(".register-code a").click(function () {
  if ($(".dragverifytext").text() == "验证通过") {
    if ($(".phone").val().trim().length == 11) {
      // 倒计时
      // 1.获取元素: 按钮
      let oBtn = document.querySelector(".btn");
      // 2.设置倒计时总时间
      let time = 60;
      // 3.设置定时器的名字
      let timer = null;
      // 4.给按钮添加点击事件
      oBtn.onclick = function () {
        // 4.1 按钮就要禁用了
        this.disabled = true;
        // 4.2 开始定时器了
        timer = setInterval(function () {
          // 4.2.1 判断总时间是不是倒计时到0了 如果倒计时到0   停定时器  按钮恢复原状
          if (time <= 0) {
            // 按钮不禁用
            // console.log(this);
            oBtn.disabled = false;
            // 清除定时器
            clearInterval(timer);
            // 按钮恢复原状
            oBtn.innerHTML = "获取验证码";
            // bug解决: 如果为0了 再次点击会不动 复原总的时间
            time = 10;
          } else {
            // 4.2.2 如果没到0 倒计时 递减  还要告诉用户还剩多少秒
            oBtn.innerHTML = `还剩下${time}秒`;
            time--;
          }
        }, 1000);
      };
    } else {
      alert("请输入正确的手机号");
    }
  } else {
    alert("滑动验证");
  }
});
// 点击登录的时候
$(".login-btn").click(function () {
  if ($(".one").css("display") == "none") {
    if ($(".dragverifytext").text() == "验证通过") {
      if ($(".register-code input").val().trim().length == 0) {
        alert("请输入验证码");
      }
    } else {
      alert("滑动验证");
    }
  } else {
    if (
      $(".one input").val().trim().length == 0 ||
      $(".one input:last-child").val().trim().length == 0
    ) {
      alert("账号密码不能为空");
    }
  }
});
