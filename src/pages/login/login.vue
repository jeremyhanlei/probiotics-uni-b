<template>
  <view class="container">
    <image src="/static/logo.png" mode="aspecFit" />
    <text class="title">畅益动采购系统商家版</text>
    <view class="form">
      <text>账号</text>
      <input type="text" v-model="username" placeholder="请输入账号" />
      <text>密码</text>
      <input type="password" v-model="password" placeholder="请输入密码" />
      <button type="default" @click="login">登录</button>
    </view>
  </view>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const login = () => {
      // 这里调用uni-app的API发送登录请求
      uni.request({
        url: "你的后端API地址",
        method: "POST",
        data: {
          username: username.value,
          password: password.value,
        },
        success: (res) => {
          if (res.statusCode === 200 && res.data.success) {
            // 登录成功，保存token等信息
            uni.setStorageSync("token", res.data.token);
            // 跳转到首页或其他页面
            uni.switchTab({
              url: "/pages/index/index",
            });
          } else {
            // 登录失败，提示用户
            uni.showToast({
              title: "登录失败",
              icon: "none",
            });
          }
        },
        fail: (err) => {
          uni.showToast({
            title: "网络请求失败",
            icon: "none",
          });
        },
      });
    };

    return {
      username,
      password,
      login,
    };
  },
};
</script>

<style scoped>
.container {
  /* 显示类型设置为Flexbox布局,允许子元素在容器内进行灵活的排列。 */
  display: flex;
  /* 这个属性指定了Flexbox布局的方向为垂直方向，即子元素会从上到下排列。 */
  flex-direction: column;
  /* 这个属性让子元素在交叉轴（在这个例子中是水平轴）上居中对齐。由于flex-direction设置为column，所以子元素会在垂直方向上居中。 */
  align-items: center;
  /* 这个属性使得子元素在主轴（在这个例子中是垂直轴）上居中对齐。这意味着子元素会在垂直方向上排列，并且它们之间的间距会平均分布。 */
  justify-content: center;
  height: 100%;
}

.container image {
  width: 100px;
  height: 100px;
  margin-top: 55px;
}

.title {
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: rgb(30, 145, 126);
}

.form {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.form text {
  /* 字体加粗 */
  font-weight: bold;
}

.form input {
  height: 45px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
  background-color: rgb(247, 247, 247);
  border-radius: 5px;
}

.form button {
  width: 200px;
  background-color: rgb(30, 145, 126);
  margin-top: 25px;
  /* 字体颜色 */
  color: #fff;
}

</style>
