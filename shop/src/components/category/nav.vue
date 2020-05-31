<template>
    <section class="nav">
        <div v-for="item in cateList" @click="changselectcate(item.id)" :key="item.id" :class="[selectcate===item.id?'border':'border2']">
            {{item.name}}
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            //激活的类别项
            selectcate:1,
        }
    },
    methods:{
        //根据id改变选项卡
        changselectcate(id){
            this.selectcate=id
            //向父组件传递选择的类别id
            this.$parent.selectId=id
            console.log(this.$parent.selectId)
        }
    },
    //组件属性
    props:['cateList']
}
</script>
<style scoped>
.nav{
    width: 20%;
    margin-top: 44px;
    position: fixed;
    left: 0px;
}
.nav div{
    height: 44px;
    width: 100%;
    line-height: 100%;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.border{
    border-left: 3px solid rgb(55, 86, 221);
    font-size: 16px;
}
.border2{
    border-left: none;
    font-size: 10px;
}


</style>