<template>
      <!-- 购物车列表 -->
    <section >
      <div class="item" v-for="(item,index) in this.$store.state.Cart.cartList" :key="item.id">
        <div class="shop">博雅达图书专卖店<i class="iconfont icon-qianjin"></i></div>
        <div class="good">
        <div class="check">
          <i class="iconfont icon-dagouyouquan" v-if="item.check" @click="clickSelect(index)"></i>
          <i class="iconfont icon-yuanquanweixuanfuben" v-else @click="clickSelect(index)"></i>
        </div>
        <div class="item_content">
         <img v-lazy="item.imgSrc"/>
          <div>{{item.name}}</div>
          <div class="color">{{item.pro}}</div>

          <div class="right">
            <div class="monny">￥{{item.price}}</div>
            <span @click="reduceNum(index)">-</span>
            <span class="num">{{item.num}}</span>
            <span @click="addNum(index)">+</span>
          </div>
        </div>
        </div>
      </div>
    </section>
    
    
</template>

<script>
import {mapMutations,mapGetters} from 'vuex';
export default {
    methods:{
        ...mapMutations(["setCartList","clickSelect","clickSelectAll","payOrDelete","addNum","reduceNum"]),
    }
}
</script>

<style scoped>

section {
  margin-top: 44px;
  margin-bottom: 80px;
}
.item {
  width: 100%;
  margin-top: 4px;
  border: 1px solid rgb(165, 146, 236);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
.shop{
  font-size: 12px;
  padding: 5px 10px;
  font-weight: bold;
  line-height: 100%;
}
.shop i{
  font-size: 14px;
  margin-left: 10px;
}
.good{
    display: flex;
  flex-wrap: wrap;
}
.check {
  height: 100px;
  padding-top: 35px;
  width: 45px;
  text-align: center;
}
i {
  color: rgb(33, 218, 27);
}

.item_content {
  height: 100px;
  flex: 1;
}
.item_content img {
  height: 100px;
  width: 100px;
  float: left;
}

.item_content div {
  height: 50px;
  word-break: break-all;
  font-size: 13px;
  overflow: hidden;
}
.color {
  color: rgb(93, 97, 97);
}
.right {
  float: right;
  display: flex;
  margin-right: 30px;
}

.right span {
  border: 1px solid rgb(165, 146, 236);
  height: 15px;
  width: 15px;
  text-align: center;
  line-height: 15px;
}

.right .num {
  width: 40px;
  border: none;
  border-top: 1px solid rgb(165, 146, 236);
  border-bottom: 1px solid rgb(165, 146, 236);
}

.monny {
  margin-right: 60px;
}

</style>