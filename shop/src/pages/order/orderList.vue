<template>
  <div class="orderList">
    <div class="head">
        <div @click="goHome"> <i class="iconfont icon-fanhui"></i>首页</div>
        <div>订单详情</div>
        <div></div>
     </div>
    <div class="content">
      <div class="item" v-for="item in orderList" :key="item.key">
        <div class="good">
          <div>
            <img :src="item[0].imgSrc" />
          </div>
          <div>
            <p>{{item[0].name}}</p>
            <p>{{item[0].pro}}</p>
          </div>
          <div>
            <span>￥{{item[0].price+".00"}}</span>
            <span>×{{item[0].num}}</span>
          </div>
        </div>
        <div class="operation">
          <div class="pay">应付￥1000.00;已付￥1000.00</div>
          <div class="btn_grop">
            <div class="btn">更多信息</div>
            <div class="btn">物流信息</div>
            <div class="btn">确认订单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            orderList:[]
        }
    },
    methods:{
        //发送请求获取订单列表,并将获取数剧并赋值给orderList
         async getOrderList(){
            const {data:res}=await this.$http.get("order");
             this.orderList=res.reverse();
             console.log(res)
            
        },
        //返回首页
        goHome(){
            this.$router.push("home");
        }
    },
    created(){
        //调用getOrderList获取数据
        this.getOrderList();
    }
};
</script>

<style scoped>
.orderList {
  font-size: 10px;
}
p {
  margin: 10px 10px 20px 10px;
  text-align: left;
}
span {
  text-align: right;
  display: block;
  width: 80%;
  margin: 30px 5px 0px 0px;
}
.head {
  width: 100%;
  height: 40px;
  background-color: rgb(243, 234, 234);
  text-align: center;
  line-height: 40px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  justify-content: space-between;
}
.head div:nth-child(1){
    line-height: 40px;
    font-size: 15px;
}
.content {
  margin-top: 50px;
}
.item {
  width: 100%;
  height: 150px;
  border: 1px solid rgb(165, 146, 236);
  border-radius: 12px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.good {
  display: flex;
}
.good div {
  height: 100px;
  text-align: center;
}

.good div:nth-child(1) {
  flex: 1;
}
.good div:nth-child(2) {
  flex: 1.5;
  border-right: 1px solid rgb(180, 176, 176);
  border-left: 1px solid rgb(180, 176, 176);
}
.good div:nth-child(2) p:nth-child(2) {
  color: rgb(93, 97, 97);
}
.good div:nth-child(3) {
  flex: 0.5;
}
.good div:nth-child(3) span:nth-child(1) {
  color: red;
}
.good div:nth-child(3) span:nth-child(2) {
  margin: 10px 5px 0px 0px;
}
img {
  height: 90%;
  width: 90%;
  margin-top: 10px;
}
.operation{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.pay{
    text-align: right;
}
.btn_grop{
    width: 100%;
    text-align: right;
}
.btn{
  border-radius: 10px;
  background-color: rgb(236, 158, 56);
  width: 60px;
  display: inline-block;
  text-align: center;
  line-height: 20px;
  height: 20px;
  color: #fff;
}
</style>