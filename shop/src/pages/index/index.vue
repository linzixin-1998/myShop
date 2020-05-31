<template>
  <div id="index">
    <router-view />
    <!-- 底部tabbar区 -->
    <mt-tabbar v-model="selected" class="mui-bar-tab" >
      <mt-tab-item id="/home" >
         <span><i :class="'iconfont icon-'+[selected=='/home'?'shouyefill':'shouye']"></i></span><br/>
        <span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="/category/cate_main">
         <span><i :class="'iconfont icon-'+[selected=='/category/cate_main'?'xinxifill':'xinxi']"></i></span><br/>
        <span>分类</span>
      </mt-tab-item>
      <mt-tab-item id="/shopCart">
        <span><i :class="'iconfont icon-'+[selected=='/shopCart'?'gouwuchefill':'gouwuche']"></i></span><br/>
        <span>购物车</span>
      </mt-tab-item>
      <mt-tab-item id="/my">
         <span><i :class="'iconfont icon-'+[selected=='/my'?'yonghufill':'yonghu']"></i></span><br/>
        <span>个人信息</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>



<script>
export default {
  name: "index",
  created(){
  console.log("asdas")
  },
  data() {
    return {
      selected: "",
      path:['/home','/category/cate_main','/shopCart','/my']
    };
  },
  created(){
  },
  watch:{
    selected:function(newV , oldV){
      this.$router.push(`${newV}`)
    },
    $route(to,from){
    console.log(to.path);
    this.selected=to.path
    }
  },
};
</script>

<style scoped>
#app{
  padding-bottom: 42px;
}
.mui-bar-tab{
  position:fixed;
  height: 40px;
  bottom: 0px;
}
</style>>

