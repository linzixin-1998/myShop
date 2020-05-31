<template>
  <section class="cate_main">
    <div v-for="item in goodList" :key="item.id" @click="toGoods(item.id)">
      <img v-lazy="item.imgSrc"/>
      <span>{{item.name}}</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
        //商品列表
      goodList: [],
      //类别id
      id:1
    };
  },

  //组件参数
  props: {"cateId":{default: 1}},


  watch: {
      //监听cateId属性
    cateId: function(val) {
       this.id=val
       this.getGoodsLsit()
    }
  },
  //页面创建时获取商品数据
  created(){
        this.getGoodsLsit()
  },


  methods:{
      //根据类别id获取商品列表
      async getGoodsLsit(){
        const {data:res}=await this.$http.get("category",{params: {id:this.id}})
        this.goodList=res[0].goodsList
      },


      //携带商品id跳到商品页面
      toGoods(id){
          this.$router.push({ path: '/goods', query:{goodsId:id}});
      },
  }

  
};
</script>
<style scoped>
div {
  box-sizing: border-box;
}
.cate_main {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 44px;
  margin-left: 20%;
}

.cate_main div {
  width: 31%;
  border: 1px solid blue;
  margin: 2px;
  text-align: center;
  border-radius: 8px;
}
img {
  width: 100%;
  margin-top: 10px;
}
span {
  width: 100%;
  text-align: center;
  font-size: 14px;
}
</style>