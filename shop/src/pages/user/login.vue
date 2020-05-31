<template>
  <div class="content">
    <!-- 顶部返回   标题 -->
    <div class="head">
      <i class="iconfont icon-fanhui" @click="back"></i>
      <span>帮助</span>
    </div>

    <!-- 登录图标 -->
    <div class="icon">
      <div :class="[username==='123456'&&'icon_img']"></div>
    </div>
    <!-- 登录表单 -->
    <div class="form">
      <input type="number" v-model="username" placeholder="请输入账号" />
      <input type="password" v-model="password" placeholder="请输入密码" />
      <div>
        <a @click="forget">忘记密码</a>
        <a @click="goLogon">用户注册</a>
      </div>
      <div class="btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    //返回上一页面
    back() {
      this.$router.go(-1);
    },
    //跳到注册页面
    goLogon() {
      this.$router.push("/logon");
    },
    //跳到注册页面,忘记密码
    forget() {},
    async login() {
      if (this.username === "" && this.password === "") {
        console.log("账号或密码不能为空");
      } else {
        //发送网络请求校验密码
        //const {data:res}=await this.$http("/goods",{params: {id:this.goodsId}})
        const { data: res } = await this.$http.get("/login", {
          params: { username: this.username, password: this.password }
        });
        //数据返回长度不为零，登录数据验证成功
        //数据返回长度为零，登录数据验证失败，提示用户登录失败
        if(res.length===0){
            Toast('请输入正确账号密码！');
        }else{
            Toast('登录成功!');
            console.log(res)
             sessionStorage.setItem("id",res[0].id)
             this.$router.push("/my");
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
  background: url(http://39.97.184.183:8080/img/yifu.jpg) no-repeat;
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
  color: blue;
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