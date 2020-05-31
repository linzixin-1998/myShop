<template>

   
    <div class="wrap">
       <!-- 顶部title区 -->
      <mt-header title="分类">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <section class="view">
        <!-- 类别选项卡 -->
        <z-nav class="nav" :cateList="categoryList"></z-nav>
        <!-- 类别内容区 -->
        <router-view :cateId="selectId"/>
      </section>
    </div>

</template>



<script>
import nav from "@/components/category/nav";
import cate_main from "@/components/category/cate_main";
export default {
  components: {
    "z-nav": nav,
  },
  data(){
    return {
      categoryList:[],
      selectId:0
    }
  },

  //页面创建时获取数据
  created(){
    this.getcateGoryList()
  },
  methods:{
    //获取分类列表
    async getcateGoryList(){
      const {data:res}=await this.$http.get("category")
      this.categoryList=res
      console.log(this.categoryList)
    }
  }
};
</script>
<style scoped>


.mint-header{
    position: fixed;
    height: 44px;
    width: 100%;
    top: 0px;
    left: 0px;
    background-color: rgb(243, 234, 234);
    color: black;
}
 .wrap {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-flow: column nowrap;
  flex-flow: column nowrap;
}

.view {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  top: 44px;
}
</style>