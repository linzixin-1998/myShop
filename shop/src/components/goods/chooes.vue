<template>
  <!-- 选择商品参数组件 -->
  <section class="border">
    <div class="bor">
      <p>
        <span class="monny">￥{{goods.price}}</span>
      </p>
      <p>
        <mt-badge size="small" color="red">{{goods.belong}}</mt-badge>
        <span>{{goods.name}}</span>
      </p>
    </div>
    <div class="bor">
      <p>
        <span class="text">发货</span>
        <span>{{goods.address}}</span>
        <span>快递:{{goods.expressPrice}}</span>
        <span class="text right M_right">月销量:{{goods.monthlySales}}</span>
      </p>
      <p>
        <span class="text">活动</span>
        <mt-badge
          size="small"
          color="red"
          v-for="(item,index) in goods.activity"
          :key="index"
        >{{item}}</mt-badge>

        <i class="iconfont icon-qianjin"></i>
      </p>
    </div>
    <div class="bor">
      <div class="F_size M_top" @click="showPopup('para')">
        <span class="text">选择</span>
        <span>配送至:广州市</span>
        <i class="iconfont icon-qianjin"></i>
        <br />
      </div>
      <div class="F_size M_top" @click="showPopup('prop')">
        <span class="text">参数</span>
        <i class="iconfont icon-qianjin"></i>
      </div>
    </div>
    <div class="bor">
      <p class="text">
        <span>评价</span>
      </p>
      <mt-badge
        size="small"
        color="red"
        v-for="(item,index) in goods.evaluate"
        :key="index"
      >{{item}}</mt-badge>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    showPopup(type){
      this.$parent.chang(type)
    }
  },
  props:['goods']
};
</script>


<style scoped>
.border {
  border-left: 1px solid rgb(165, 146, 236);
  border-bottom: 1px solid rgb(165, 146, 236);
  border-right: 1px solid rgb(165, 146, 236);
  border-radius: 19px;
}
p {
  margin-bottom: 0px;
  font-size: 15px;
}
.bor {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid rgb(165, 146, 236);

  border-radius: 19px;
  margin-top: 3px;
}
.M_top {
  margin-top: 25px;
}
.text {
  color: rgb(143, 128, 128);
  font-size: 16px;
}
.right {
  float: right;
}
span {
  margin-left: 10px;
}
.M_right {
  margin-right: 10px;
}

.monny {
  color: red;
}
img {
  width: 15px;
}
.F_size {
  font-size: 16px;
}
i {
  float: right;
  color: rgb(143, 128, 128);
  font-size: 16px;
}
</style>