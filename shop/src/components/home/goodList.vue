<template>

<div class="goodLsit">
    <div class="item" v-for="goods in datalist" :key="goods.id" @click="toGoods(goods.id)">
        <img v-lazy="goods.imgSrc"/>
        <div class="name">{{goods.name}}</div>
        <div class="monny">{{goods.price}}</div>
    </div>
</div>

</template>

<script>
export default {
    name: 'goodLsit',
  data(){
    return {

    }
  },
  methods:{

      //携带商品id跳到good页面
      toGoods(id){
          this.$router.push({ path: '/goods', query:{goodsId:id}});
      },
      
  },
  //组件属性
  props:["datalist"],
};
</script>
<style scoped>
div{
    word-wrap:break-word;
}
.goodLsit{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 40px;
}

.item{
    width: 44%;
    border: 1px solid rgb(165, 146, 236);
    border-radius:10px;
    display: flex;
    flex-direction: column;
    margin: 5px;
    overflow:inherit;
}
.item img{
    width: 80%;
    margin: 10px 5px 10px;
    align-self: center;
}
.name{
    font-size: 12px;
    padding: 0px;
    margin: 5px;
    width: 100%;
    text-overflow: clip;
    
}
.name::before{
    content: "天猫";
    display: inline-block;
    width: 30px;
    height: 15px;
    text-align: center;
    line-height: 15px;
    background-color: red;
    border-radius: 20px;
    color: #fff;
    font-size: 8px;
}
.monny{
 color: red;
 width: 100%;
 margin: 2px;
 font-size: 15px;
 font-style: italic;
}
.monny::before{
    content: "￥";
    color: black;
}
.monny::after{
    content: "   111人付款";
    color: rgb(172, 170, 170);
    font-style:normal;
    font-size: 10px;
}

</style>