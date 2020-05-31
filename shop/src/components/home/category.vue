<template>

<div class="category">
      


    <div class="item" v-for="item in categoryList" :key="item.id"> 
      <img :src="item.imgsrc">
          <p>{{item.cateName}}</p>
    </div>
      
    </div>

</template>

<script>
export default {
    name: 'category',
  data(){
    return {
      categoryList:[
        {id:'1',cateName:'零食',imgsrc:'http://39.97.184.183:8080/img/icon/icon1.png'},
        {id:'2',cateName:'男士',imgsrc:'http://39.97.184.183:8080/img/icon/icon2.png'},
        {id:'3',cateName:'女士',imgsrc:'http://39.97.184.183:8080/img/icon/icon3.png'},
        {id:'4',cateName:'生活用品',imgsrc:'http://39.97.184.183:8080/img/icon/icon4.png'},
        {id:'5',cateName:'T恤',imgsrc:'http://39.97.184.183:8080/img/icon/icon5.png'},
        {id:'6',cateName:'外套',imgsrc:'http://39.97.184.183:8080/img/icon/icon6.png'},
        {id:'7',cateName:'家电',imgsrc:'http://39.97.184.183:8080/img/icon/icon7.png'},
        {id:'8',cateName:'运动裤',imgsrc:'http://39.97.184.183:8080/img/icon/icon8.png'}]
    }
  }
};
</script>
<style scoped>


img{
width:80%;
}

.category{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}


.item{
  width: 20%;
    margin-left: 4%;
    margin-top: 10px;
    text-align: center;
    flex: 20%;
}
p{
  margin: 0px;
  font-size:12px;
  position: relative;
  bottom: 10px;
}
</style>