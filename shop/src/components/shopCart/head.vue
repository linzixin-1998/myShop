<template>
  <!-- 购物车顶部 -->
  <div class="head">
    购物车({{this.$store.state.Cart.cartList.length}})
    <div v-if="manage" @click="clickManage">管理</div>
    <div v-else @click="clickManage">完成</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations([
      "setCartList",
      "clickSelect",
      "clickSelectAll",
      "payOrDelete",
      "addNum",
      "reduceNum"
    ]),
    clickManage(){
        this.$parent.manage=!this.manage
    }
  },
  data() {
      return{

      }
  },
  props:["manage"]
};
</script>


<style scoped>

.head {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;

      background-color: rgb(243, 234, 234);
    color: black;
}
.head div {
  float: right;
  height: 100%;
  font-size: 16px;
  padding-right: 6px;
}
</style>>

