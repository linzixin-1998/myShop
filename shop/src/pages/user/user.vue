<template>
  <div class="content">
    <mt-header title="设置">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="first">
      <span :class="[tokenId&&'touxiang']"></span>
      <span>
        <p>{{name}}</p>
        <p>账号:{{username}}</p>
      </span>
      <span>编辑</span>
    </div>

    <div class="item">
      收获地址
      <i class="iconfont icon-qianjin"></i>
    </div>
    <div class="item">
      账户与安全
      <i class="iconfont icon-qianjin"></i>
    </div>
    <div class="item">
      问题
      <i class="iconfont icon-qianjin"></i>
    </div>
    <div class="zhangwei"></div>
    <div class="btn" @click="Signout" v-if="tokenId">退出登录</div>
    <div class="btn" @click="Signout" v-else>登录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "未登录",
      username: "未登录",
      tokenId:null
    };
  },
   created() {
    //获取缓存数据
    this.getUserData()

  },
  methods: {
    Signout() {
    sessionStorage.clear();
      this.$router.push("/login");
    },
    //根据缓存数据发送网络请求
    async getUserData() {
      this.tokenId = sessionStorage.getItem("id");
      if (this.tokenId === null) {
        return console.log(id);
      } else {
        const { data: res } = await this.$http.get("login", {
          params: {
            id: this.tokenId
          }
        });
        console.log(res);
        if (res !== null) {
          //将返回数据赋值保存
          this.username = res[0].username;
          this.name = res[0].name;
        } else {
          console.log("数据错误!");
        }
      }
    }
  }
};
</script>

<style scoped>
p {
  margin: 0px;
  margin-top: 10px;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.mint-header {
  position: fixed;
  height: 44px;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: rgb(243, 234, 234);
  color: black;
}
.first {
  margin-top: 44px;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid rgb(68, 235, 171);
  display: flex;
  flex-direction: row;
}
.first span:nth-child(1) {
  width: 70px;
  height: 70px;
  border-radius: 50%;

}
.touxiang{
  background: url(http://39.97.184.183:8080/img/yifu.jpg) no-repeat;
  background-size: 100%;
}
.first span:nth-child(2) {
  flex: 1;
}
.first span:nth-child(3) {
  width: 40px;
  height: 20px;
  margin-top: 25px;
  border: 1px solid rgb(236, 158, 56);
  border-radius: 20px;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  color: rgb(236, 158, 56);
}
.item {
  width: 100%;
  height: 40px;
  background-color: #fff;
  line-height: 40px;
  border-bottom: 1px solid rgb(68, 235, 171);
  font-size: 15px;
}
.item i {
  float: right;
}
.zhangwei {
  height: 300px;
}

.btn {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: rgb(236, 158, 56);
  margin-top: 15px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>