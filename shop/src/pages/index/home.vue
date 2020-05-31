<template>
  <div id="home">
    <!-- 顶部搜索区 -->
     <div class="head">
        <i class="iconfont icon-saoma" ></i>
        <div class="search">请输入内容</div>
        <i class="iconfont icon-paizhao"></i>
    </div>

    <!-- 轮播图 -->
    <swipe class="height"></swipe>

    <!-- 导航栏 -->
    <category></category>

    <!-- 推荐商品广告区 -->
    <div class="guanggao"><img src="http://39.97.184.183:8080/img/love.png"></div>
    <!-- 推荐商品列表 -->
    <goodList v-bind:datalist="datalist"></goodList>
  </div>
</template>

<script>
import swipe from "@/components/home/swipe";
import category from "@/components/home/category";
import goodList from "@/components/home/goodList";
export default {
  name: "home",
  components: { swipe, category, goodList },
  created() {
    
  },
  data() {
    return {
      datalist: []
    };
  },
  created(){
    this.getGoodList();
  },
  methods:{
    //获取商品列表数据
    async getGoodList(){
      const {data:res}=await this.$http.get('/goods');
      this.datalist=res;
    }
  }

};
</script>

<style scoped>


.height {
  height: 200px;
  margin-top: 44px !important;
}

.guanggao{
  width: 100%;
  text-align: center;
}
.guanggao img{
  width: 60%;
}

.head{
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    height: 44px;
    width: 100%;
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, .2);
    background-color:#fff;
    z-index: 1;
}

.search{
    flex: 1;
    height: 26px;
    border: 1px solid #ccc;
    margin: 7px 10px;
    border-radius: 35px;
    font-size: 12px;
    position: relative;
    padding-left: 19px;
    color: cadetblue;
    line-height: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
}
i{
    font-size: 26px;
    height: 25px;
    width: 25px;
    margin: 4px 2px;
    border-radius: 50%;
    padding: 4px;
}
</style>