<template>
  <div class="order">
    <!-- 头部区域 -->
    <div class="head">
      <i class="iconfont icon-fanhui" @click="back"></i>
      确认订单
    </div>

    <!-- 订单内容区 -->
    <div class="content">
      <!-- 订单收货地址 -->
      <div class="address">
        <div>
          林梓鑫
          <span>17817447508</span>
        </div>
        <div>广东省揭阳市揭东区锡场镇柑园脚5巷15号广东省揭阳市揭东区锡场镇柑园脚5巷15号</div>
        <div>收获不便时，可选择免费暂存服务</div>
      </div>
      <!-- 订单商品信息 -->
      <div class="goods" v-for="item in goodList" :key="item.id">
        <div class="goodsContent">
          <img :src="item.imgSrc" />
          <p>{{item.name}}}</p>
          <p>{{item.pro}}</p>
          <p>数量:{{item.num}}</p>
          <p>单价:{{item.price}}</p>
        </div>
        <div class="orderFansi">
          <p>配送方式:{{item.method===undefined?"普通配收":item.method}}</p>
          <p>运费:{{item.method===undefined?"0":item.method}}</p>
        </div>
        <div class="orderXiaoji">
          <p>小计:{{item.unitPrice}}</p>
        </div>
      </div>
    </div>

    <!--底部区域  -->
    <div class="foot">
      <div @click="pay">支付</div>
      <div>
        <span>共{{this.goodList.length}}件，</span>合计:
        <span>￥{{totol}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import {mapMutations,mapGetters} from 'vuex';
export default {
  created() {
    //获取购物车选中商品
    if (this.$store.state.Cart.selectedList !== []) {
      this.goodList = this.$store.state.Cart.selectedList;

      for (var i = 0; i < this.goodList.length; i++) {
        this.goodList[i].unitPrice =
          this.goodList[i].num * 1 * this.goodList[i].price;
      }
    } else {
      return;
    }
  },
  data() {
    return {
      //订单商品列表
      goodList: []
    };
  },
  methods: {
      ...mapMutations(["payOrDelete"]),
    //返回上一页面
    back() {
      this.$router.go(-1);
    },
    async pay(){
        Toast('支付成功!');
        this.payOrDelete();
        const res=await this.$http.post("order",this.goodList)
        console.log(11)
        this.$router.push("/orderList");
    }
  },
  computed: {
    //计算总价格,判断订单商品列表长度，如果等于1，总价格为该商品小计
    //如果不为1，使用数组reduce方法计算总价格
    totol() {
      if (this.goodList.length === 1) {
        return this.goodList[0].unitPrice;
      } else {
        return this.goodList.reduce((prev, curr, index, arr) => {
            //判断当前执行第几次循环，如果为第一次，则prev为this.goodList数组的第一个元素对象
            //如果不等于1，则prev为上次函数执行的返回值
          if (index === 1) {
            return prev.unitPrice + curr.unitPrice;
          } else {
            return prev + curr.unitPrice;
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.order {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

/* 头部区域 */
.head {
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  position: fixed;
  margin: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #fff;
}
.head i {
  font-size: 25px;
}

/* 订单内容 */
.content {
  width: 100%;
  flex: 1;

  margin-top: 40px;
}

.address {
  height: 80px;
  widows: 100%;
  background-color: rgb(244, 242, 247);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 2px;
}
.address div {
  margin-top: 5px;
  margin-left: 10px;
  font-size: 12px;
}
.address div span {
  color: rgb(187, 187, 187);
  font-size: 12px;
  margin-left: 5px;
}
.address div:nth-child(2) {
  margin-right: 40px;
  flex: 1;
}

.address div:nth-child(3) {
  color: red;
  font-size: 12px;
  margin-bottom: 6px;
}

.goods {
  min-height: 100px;
  max-height: 400px;
  margin-top: 20px;
  widows: 100%;
  background-color: rgb(244, 242, 247);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
p {
  margin: 0px;
  margin-bottom: 5px;
}

.goods .goodsContent img {
  width: 100px;
  height: 100px;
  float: left;
}
.goods .goodsContent p:nth-child(3) {
  color: rgb(93, 97, 97);
}
.orderFansi p {
  padding-left: 100px;
}
.orderXiaoji p {
  text-align: right;
}

/* 底部区域 */
.foot {
  width: 100%;
  height: 44px;
  border-top: 1px solid rgb(244, 242, 247);
  position: fixed;
  margin: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  font-size: 14px;
  background-color: #fff;
}

.foot div:nth-child(1) {
  width: 60px;
  float: right;
  height: 30px;
  margin-right: 10px;
  background-color: rgb(236, 158, 56);
  color: #fff;
  border-radius: 20px;
  line-height: 30px;
  margin-top: 6px;
  text-align: center;
}
.foot div:nth-child(2) {
  float: right;
  margin-right: 10px;
  line-height: 30px;
  margin-top: 6px;
  font-size: 13px;
}
.foot div:nth-child(2) span:nth-child(1) {
  color: rgb(187, 187, 187);
}
.foot div:nth-child(2) span:nth-child(2) {
  color: red;
}
</style>