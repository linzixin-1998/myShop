<template>
  <!-- 个人信息 -->
  <section>
    <div class="information">
      <!-- 头像  昵称  设置 -->
      <div>
        <span @click="goUser">
          <i class="iconfont icon-shezhi"></i>
        </span>
        <span>
          <span :class="[tokenId && 'touxiangImg']"></span>
          <span>
            <p>{{name}}</p>
            <P>{{username}}</P>
          </span>
        </span>
      </div>

      <!-- 收藏  卡包  浏览纪录 关注店铺 -->
      <div>
        <span>
          0
          <p>收藏夹</p>
        </span>
        <span>
          0
          <p>关注店铺</p>
        </span>
        <span>
          0
          <p>足迹</p>
        </span>
        <span>
          0
          <p>红包卡卷</p>
        </span>
      </div>
    </div>

    <!-- 我的订单 -->
    <div class="order">
      <div>
        <span class="my_order">我的订单</span>
        <span class="all_order" @click="goOderList">
          查看全部订单
          <i class="iconfont icon-qianjin"></i>
        </span>
      </div>
      <div class="order_nav">
        <span>
          <div></div>
          <p>待付款</p>
        </span>
        <span>
          <div></div>
          <p>待发货</p>
        </span>
        <span>
          <div></div>
          <p>评价</p>
        </span>
        <span>
          <div></div>
          <p>退款/售后</p>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      name:"未登录",
      username:"未登录",
      tokenId:null
    }
  },
   created() {
    //获取缓存数据
    this.tokenId=sessionStorage.getItem("id");
    this.getUserData()

  },
  methods: {
    //跳到用户页面
    goUser() {
      this.$router.push("/user");
    },

    //根据缓存数据发送网络请求
    async getUserData(){
      let id=sessionStorage.getItem("id")
      if(id===null){
        return console.log(id)
      }else{
        const { data: res } = await this.$http.get("login", {
      params: {
        id: sessionStorage.getItem("id")
      }
    });
    console.log(res)
    if(res!==null){
    //将返回数据赋值保存
    this.username=res[0].username
    this.name=res[0].name
    }else{
      console.log("数据错误!")
    }
      }
    },
    //跳到查看订单列表页面
    goOderList(){
      this.$router.push("orderList")
    }
  }

  //加载时组件时判断用户是否登录
  // beforeRouteEnter (to, from, next) {
  // }
};
</script>
<style scoped>
p {
  margin: 0px;
}

div {
  box-sizing: border-box;
}
.information {
  width: 100%;
  height: 200px;
  background-color: rgb(236, 158, 56);
  display: flex;
  flex-direction: column;
}

.information div:nth-child(1) {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
}
.information div:nth-child(1) span:nth-child(1) {
  width: 100%;
  height: 35px;
  text-align: right;
  line-height: 35px;
}
.information div:nth-child(1) span:nth-child(1) i {
  font-size: 20px;
  margin: 0px 10px;
}

.information div:nth-child(1) span:nth-child(2) {
  width: 100%;
  flex: 1;
  display: flex;
}
/* 头像 */
.information div:nth-child(1) span:nth-child(2) span:nth-child(1) {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: #fff solid 1px;
}

.touxiangImg{
background: url(http://39.97.184.183:8080/img/yifu.jpg) no-repeat;background-size: 100%;
}
/* 昵称 */
.information div:nth-child(1) span:nth-child(2) span:nth-child(2) {
  flex: 1;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.information div:nth-child(1) span:nth-child(2) span:nth-child(2) p {
  margin-left: 10px;
}

.information div:nth-child(2) {
  width: 100%;
  flex: 1;
  display: flex;
}
.information div:nth-child(2) span {
  flex: 1;
  text-align: center;
  font-size: 12px;
  color: #fff;
}

/* 我的订单 */
.order {
  width: 100%;
  height: 120px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border: 1px solid rgb(165, 146, 236);
  border-radius: 10px;
}

.my_order {
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
  float: left;
}

.all_order {
  font-size: 12px;
  color: rgb(108, 192, 192);
  font-weight: 100;
  float: right;
}

.order_nav {
  flex: 1;
  display: flex;
  border-top: 1px solid rgb(165, 146, 236);
}

.order_nav span {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order_nav span p {
  font-size: 14px;
}

.order_nav span div {
  width: 60px;
  height: 60px;
}
.order_nav span:nth-child(1) div{
  background: url(http://39.97.184.183:8080/img/icon/fukuan.png) no-repeat center center;
    background-size: 40px;
}
.order_nav span:nth-child(2) div{
  background: url(http://39.97.184.183:8080/img/icon/shouhuo.png) no-repeat center center;
    background-size: 40px;
}
.order_nav span:nth-child(3) div{
  background: url(http://39.97.184.183:8080/img/icon/pingjia.png) no-repeat center center;
  background-size: 40px;
}
.order_nav span:nth-child(4) div{
  background: url(http://39.97.184.183:8080/img/icon/shou.png) no-repeat center center;
    background-size: 40px;
}
</style>