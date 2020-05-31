<template>
        <footer>
      <span>
        <i class="iconfont icon-dagouyouquan" v-if="this.$store.state.Cart.selectAll" @click="clickSelectAll"></i>
        <i class="iconfont icon-yuanquanweixuanfuben" v-else @click="clickSelectAll"></i>全选
      </span>
      <!-- 结算 -->
      <span v-if="manage">总价格:{{total}}元</span>
      <span v-if="manage" class="btn_green" @click="pay">结算</span>

      <!-- 删除 -->
      <span v-if="!manage"></span>
      <span v-if="!manage" class="btn_red" @click="payOrDelete">删除</span>
    </footer>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex';
export default {
    methods:{
        ...mapMutations(["setCartList","clickSelectAll","payOrDelete",]),
        //点击支付按钮事件
        pay(){
          if(this.$store.state.Cart.selectedList.length===0){
            console.log("请选择商品")
          }else{
            this.$router.push("/order")
          }
        }
    },
    computed: {
    ...mapGetters(["total"]),
  },
  props:["manage"]
}
</script>

<style scoped>

footer {
  width: 100%;
  height: 44px;
  position: fixed;
  bottom: 40px;
  left: 0px;
  right: 0px;
  border-top: 1px solid rgb(165, 146, 236);
  display: flex;
  background-color: #fff;
  font-size: 16px;
}
footer span {
  flex: 1;
  line-height: 42px;
}
footer span:nth-child(1) {
  text-align: center;
}
footer span:nth-child(2) {
  text-align: center;
}
footer span:nth-child(3) {
  height: 42px;
  text-align: center;
  border-radius: 20px;
  background-color: rgb(33, 218, 27);
  color: #fff;
}

.btn_red {
  background-color: red !important;
}

i {
  color: rgb(33, 218, 27);
}
</style>