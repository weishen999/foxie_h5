<template>
  <div class="p-index" v-if="index">
    <swiper class="p-swiper" :options="bacteriaOption">
      <swiper-slide class="item" v-for="(img,i) in index.image">
        <div @click="$router.push({name:'Details',params:{id:img.id}})">
          <img :src="imgURL + img.pic" alt="" v-if="img.pic">
          <img :src="img.pic" alt="" v-else>
          <p class="desc">{{img.title | cut(20)}} <span class="page"><span style="font-weight: bold">{{ i + 1 }}</span>/{{index.image.length}}</span></p>
        </div>
      </swiper-slide>
    </swiper>
    <p-list title="上海佛协" type="text" :list="index.list[10].data" :router="{name:'PageList',params:{type:17}}"></p-list>
    <p-list title="沪佛动态" type="img" :list="index.list[1].data" :router="{name:'PageList',params:{type:2}}"></p-list>
    <p-list title="现任会长" type="alone" :list="index.list[4].data" :router="{name:'Details',params:{id:index.list[4].data[0].id}}"></p-list>
    <p-list title="历届领导" type="horizontal" :list="index.list[5].data" :router="{name:'PageList',params:{type:20}}"></p-list>
    <p-list title="国家政策" type="text" :list="index.list[6].data" :router="{name:'PageList',params:{type:25}}"></p-list>
    <p-list title="寺院场所" type="horizontal-2" class="p-pagoda" :list="index.list[9].data" :router="{name:'PageList',params:{type:22}}"></p-list>
  </div>
</template>

<script>
  import PList from '../components/List'
  import Api from '../api'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "Index",
    components:{ swiper, swiperSlide,PList},
    created(){
      this.$bus.title = '上海佛教网';
      this.getIndex();
    },
    data() {
      return {
        index:null,
        bacteriaOption: {
          loop: true,
          autoplay: true
        },
        imgURL:process.env.DOMAIN
      }
    },
    methods:{
      getIndex(){
        Api.getLevel1({
          indexType:1,
          pageNo:0,
          pageSize:3
        }).then(res=>{
          if(res.data.code === 0){
            this.index = res.data.data;
          } else {
            alert('网络错误，请刷新重试');
          }
        })
      },
    }
  }
</script>

<style lang="scss">
  @import "../styles/variables";
.p-index {
  .header {
    position: fixed;
    height: 56px;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
    text-align: center;
    background-color: $primary;
  }
}
</style>
