<template>
<!-- 商品详情底部 -->
    <div class="foot">
        <div class="iconTab"><i class="iconfont icon-dianpu"></i><p>店铺</p></div>
        <div class="iconTab"><i class="iconfont icon-aixinD"></i><p>收藏</p></div>
        <div class="Btn_1">
            <div class="cat" @click="addCar" >加入购物车</div>
            <div class="buy" @click="buy">立即购买</div></div>
    </div>
</template>

<script>
export default {
    methods:{
        addCar(){
            this.$emit('onclick','para')
        },
        buy(){
            this.$emit('onclick','para')
        }

    }
}
</script>


<style scoped>
.foot{
    width: 100%;
    height: 50px;
    border-top: 1px solid rgb(165, 146, 236);
    background-color: #fff;
}
.iconTab{
    height: 100%;
    width: 60px;

float: left;
text-align: center;

}
.iconTab p{
    position: relative;
    bottom: 10px;
    font-size: 12px;
}
.Btn_1{
    height: 80%;
    width: 60%;
    font-size: 15px;
    border-radius: 25px;
    float: right;
    position: relative;
    top: 10%;
    background-color: rgb(53, 40, 40);
    color: #fff;
}
.cat{
    height: 100%;
    width: 50%;
    float: left;
    text-align: center;
    padding-top: 10px;
}
.buy{
    height: 100%;
    width: 50%;
    float: right;
    text-align: center;
    padding-top: 10px;
}
</style>