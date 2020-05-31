<template>
  <div class="content">
    <!-- 顶部返回   标题 -->
    <div class="head">
      <i class="iconfont icon-fanhui" @click="back"></i>
      <span>帮助</span>
    </div>

    <!-- 图标 -->
    <div class="icon">
      <div class="icon_img"></div>
    </div>
    <!-- 表单 -->
    <div class="form">
      <input type="number" placeholder="请输入账号" v-model="username" />
      <input type="password" placeholder="请输入密码" v-model="password"  />

      <div class="btn" @click="zhuc">注册</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "123456",
      password: "123456"
    };
  },
  methods: {
    //返回上一页面
    back() {
      this.$router.go(-1);
    },
    async zhuc() {
        if (this.username === "" && this.password === "") {
        console.log("账号或密码不能为空");
      } else {
        //发送网络请求注册账号
        const { data: res } = await this.$http.post("/login", { username: this.username, password: this.password });
        console.log(res)
        //判断注册是否成功
        if(res===null){
            Toast('注册失败');
        }else{
            Toast('注册成功!');
            this.$router.push("/login");
        }
        
      }
    }
    
  }
};
</script>


<style scoped>
input {
  border: none;
  height: 35px;
  border-bottom: 1px solid rgb(63, 147, 226);
  margin-top: 15px;
  outline: none;
}

i {
  font-size: 20px;
  width: 20px;
  height: 100%;
}

a {
  text-decoration: none;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.head {
  width: 100%;
  height: 30px;
  display: flex;
}
.head span {
  flex: 1;
  text-align: right;
  font-size: 17px;
}
.icon {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon_img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(/static/yifu.jpg) no-repeat;
  background-size: 100%;
}
.form {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
}
.form div {
  line-height: 44px;
  width: 100%;
  height: 44px;
  font-size: 12px;
}

.form div a:nth-child(1) {
  float: left;
  margin-left: 10px;
}
.form div a:nth-child(2) {
  float: right;
  margin-right: 10px;
}
.form .btn {
  text-align: center;
  border-radius: 50px;
  margin-top: 10px;
  font-size: 20px;
  background-color: rgb(236, 158, 56);
  color: #fff;
}
</style>