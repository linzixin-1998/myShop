<template>

    <div class="border">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swipeData" :key=item.id>
          <img :src="item.imgsrc" :alt="item.imgsrc" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

</template>

<script>
export default {
    name: 'swipe',
  data(){
    return {
        swipeData:[
        {id:1,imgsrc:"http://39.97.184.183:8080/img/yifu.jpg"},
        {id:2,imgsrc:'http://39.97.184.183:8080/img/yifu.jpg'},
        {id:3,imgsrc:'http://39.97.184.183:8080/img/yifu.jpg'}
        ]
    }
  }
};
</script>
<style scoped>
img {
  height: 100%;
  width: 100%;

}
.border{

    margin: 10px 20px;
}
</style>