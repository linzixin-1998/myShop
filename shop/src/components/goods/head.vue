<template>
    <div class="head">
        <i class="iconfont icon-fanhui" @click="back"></i>
        <div class="search">请输入内容</div>
        <i></i>
    </div>

</template>


<script>
export default {
    data(){
        return{

        }
    },

    methods:{
        back(){
            this.$router.go(-1)
        }
    }

}
</script>

<style scoped>

.head{
    position: fixed;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    height: 44px;
    width: 100%;
    max-width: 540px;
    min-width: 320px;
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, .2);
    background-color: #fff;
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
    font-size: 28px;
    height: 26px;
    width: 26px;
    margin: 4px 0px;
    border-radius: 50%;
}
</style>