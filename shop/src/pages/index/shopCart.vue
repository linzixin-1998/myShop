<template>
  <div>
    <!-- 购物车顶部 -->
    <z-head :manage="manage"></z-head>
    <!-- 购物车列表 -->
    <z-content v-if="id_token && ShopCartShow"></z-content>
    <div class="kong" v-else-if="id_token">购物车空空如也</div>
    <div class="kong" v-else>你尚未登录，请先<div class="btn" @click="login">登录</div>！</div>
    <!-- 购物车底部计算区 -->
    <z-footer :manage="manage" v-if="id_token"></z-footer>
  </div>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex';
import head from "@/components/shopCart/head";
import content from "@/components/shopCart/content";
import footer from "@/components/shopCart/footer";

export default {
  components: { "z-head":head, "z-content":content,"z-footer":footer},
  data() {
    return {
      manage: true,
      id_token:""
    };
  },
  methods: {
    ...mapMutations(["setCartList"]),
    //获取购物车列表
    async getShopCartList() {
      //async await异步变同步，再解构赋值出data
      if(this.$store.state.Cart.cartList===""){
        //判断购物车仓库是否为是初始化状态，如果是发送网络请求请求购物车数据
      const { data: res } = await this.$http.get("shopCart");
      this.setCartList(res);
      }
    },
    login(){
      this.$router.push("login")
    }
  },
  created() {
    this.getShopCartList();
    this.id_token=sessionStorage.getItem("id")
    console.log(this.id_token)
  },
  computed:{
    ShopCartShow(){
      if(this.$store.state.Cart.cartList.length===0){
        return false;
      }else{
        return true;
      }
    }
  }
  
  //加载时组件时判断用户是否登录
  // beforeRouteEnter (to, from, next) {
  // }
  
};
</script>



<style scoped>
.kong{
  margin-top: 244px;
  margin-bottom: 40px;
  width: 100%;
  text-align: center;

}
.btn{
    border-radius: 10px;
  background-color: rgb(236, 158, 56);
  width: 60px;
  display: inline-block;
  text-align: center;
  line-height: 25px;
  height: 25px;
  color: #fff;
  font-size: 15px;
}

</style>