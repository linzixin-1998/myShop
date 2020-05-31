<template>
  <div>
    <!-- 头部搜索框 -->
    <z-head class="head"></z-head>

    <!-- 轮播图 -->
    <z-swipe class="height"></z-swipe>
    <!-- 商品选择内容区 -->
    <z-chooes v-bind:goods="this.goodsdata"></z-chooes>

    <!-- 商品图片内容 -->
    <z-contents></z-contents>

    <!-- 商品底部操作区 -->
    <z-foot class="foot" v-on:onclick="chang"></z-foot>


    <mt-popup  v-model="popupVisible" position="bottom" :lockScroll='true' >
        <!-- 商品参数 -->
        <div v-if="paraVisiable" class="para">
          <!-- 商品基本信息 -->
            <div class="item">
              <img :src="goodsdata.imgSrc"/>
              <p>￥100元</p>
              <p>库存1000件</p>
              <p>已选:</p>
            </div>
            <!-- 可选参数 -->
            <div class="para_content">
              <div class="para_item" v-for="item in pro" :key="item.index">
                <div>{{item.name}}</div>
                <div :class="[item.select===item2?'select2':'select']"  v-for="item2 in item.value" :key="item2.index" @click="checkPara(item,item2)">{{item2}}</div>
                <hr>
              </div>
            </div>
            <!-- 按钮 -->
              <div class="btn" @click="tijiao">确认</div>
        </div>
        <!-- 商品属性 -->
        <div v-if="propVisiable" class="prop">
            <div class="title">商品属性</div>
            <div class="para_content">
            </div>
        </div>
    </mt-popup>
  </div>
  
</template>


<script>
import head from "@/components/goods/head";
import swipe from "@/components/home/swipe";
import foot from "@/components/goods/foot";
import chooes from "@/components/goods/chooes";
import contents from "@/components/goods/contents";
export default {
  components: {
    "z-head": head,
    "z-swipe": swipe,
    "z-foot": foot,
    "z-chooes": chooes,
    "z-contents": contents
  },
  data() {
    return {
      //商品数据
      goodsdata:{},
      //控制底部上拉内容的显示与否
      popupVisible: false,
      //控制上拉内容中的参数列表显示与否
      paraVisiable:false,
      //控制上拉内容的属性列表显示与否
      propVisiable:false,
      //当前商品id
      goodsId:0,
      pro:[
        {name:"颜色",value:["绿色","白色","黑色"],select:"白色"},
        {name:"尺码",value:["40","41","42"],select:"40"}
      ],
      selectPro:[]
        

    };
  },
  methods: {
    //监听底部上拉内容的显示事件
    chang(msg) {
      //判断是要显示属性列表还是参数列表
      if(msg=='para'){
          this.paraVisiable=true
          this.propVisiable=false
      }else{
          this.paraVisiable=false
          this.propVisiable=true
      }
      //显示上拉内容
      this.popupVisible = true;
    },
    //根据商品id获取数据
    async getGood(){
      const {data:res}=await this.$http("/goods",{params: {id:this.goodsId}})
      this.goodsdata=res[0];
      console.log(res[0])
    },
    //点击商品可选参数时，将该参数设为可选项
    checkPara(obj,item){
      obj.select=item
    },
    //将当前所选参数保存
    async tijiao(){
      this.selectPro=this.pro.map((item,index)=>item.select);
      //console.log(this.selectPro);
      //将this.selectPro传给z-chooes组件，以供z-chooes显示所选参数
      //构建一条商品信息
     
      let good={num:1,check:false};
      for(name in this.goodsdata){
        if(name==="name"||name==="imgSrc"||name==="price"){
          good[name]=this.goodsdata[name];
        }
      }
      good.pro=this.selectPro.join(";");
      //发送网络请求添加商品信息到购物车
      const {data:res}=await this.$http.post("shopCart",good);
      console.log(res)
      //console.log(good)
      this.popupVisible=false;
    }
  },
  created(){
    //页面创建时根据商品id获取数据
    this.goodsId=this.$route.query.goodsId
    this.getGood();
  }
};
</script>


<style scoped>
hr{
  width: 95%;
}
.mint-popup-bottom {
  height: 60%;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  font-size: 16px;
}

.foot {
  position: fixed;
  bottom: 0px;
  right: 0px;
  left: 0px;
  border-top: #000 solid 1px;
}
.height{
  height: 300px;
  margin-top: 44px !important;
}

/* 商品参数 */
.para{
height: 100%;
display: flex;
flex-direction: column;
}
.item{
  height: 100px;
}
.item img{
  height: 70px;
    margin-top: 10px;
    margin-left: 10px;
  float: left;
}
.item p{
  margin: 0px;
  margin-left: 10px;
  margin-top: 5px;
  font-size: 12px;
}
 
.item p:nth-child(2){
  margin-top: 10px;
  color: red;
}
.item p:nth-child(3){
  color: rgb(95, 98, 100);
}

/* 商品属性 */
.prop{
height: 100%;
display: flex;
flex-direction: column;
}

.title{
  text-align: center;
}
.para_content{
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.para_item{
  width: 100%;
}
.para_item div{
    margin-left: 10px;
}
.select{
    height: 24px;
    border:1px solid #000;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    color: #000;
    margin-top: 5px;
    margin-bottom: 5px;
    float: left;
    padding:0px 6px;
}
.select2{
    height: 24px;
    border:1px solid rgb(68, 71, 230);
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    background-color: red;
    color: #fff;
    margin-top: 5px;
    margin-bottom: 5px;
    float: left;
    padding:0px 6px;
}
.btn{
    width: 95%;
    height: 40px;
    border-radius: 20px;
    background-color:  rgb(236, 158, 56);
    margin-top: 15px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    margin-left: 2.5%;
}
</style>