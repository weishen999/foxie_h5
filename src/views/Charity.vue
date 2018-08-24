<template>
  <div class="p-charity" v-if="charity">
    <swiper class="p-swiper" :options="bacteriaOption">
      <swiper-slide class="item" v-for="(img,i) in charity.image">
        <div @click="$router.push({name:'Details',params:{id:img.id}})">
          <img :src="imgURL + img.pic" alt="">
          <p class="desc">{{img.remark | cut(20)}} <span class="page"><span style="font-weight: bold">{{ i + 1 }}</span>/{{charity.image.length}}</span></p>
        </div>
      </swiper-slide>
    </swiper>
    <template v-for="item in charity.list" v-if="charity">
      <p-list :title="item.typeName" type="horizontal" :list="item.data" v-if="item.type === 1" :router="{name:'PageList',params:{type:item.type}}"></p-list>
      <p-list :title="item.typeName" type="text" :list="item.data" v-if="item.type === 36" :router="{name:'PageList',params:{type:item.type}}"></p-list>
    </template>
  </div>
</template>

<script>
  import PList from '../components/List'
  import Api from '../api'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: "Charity",
    components:{ swiper, swiperSlide,PList},
    created(){
      this.$bus.title = '慈善公益';
      this.getCharity();
    },
    data() {
      return {
        charity:null,
        bacteriaOption: {
          loop: true,
          autoplay: true
        },
        imgURL:process.env.DOMAIN
      }
    },
    methods:{
      getCharity(){
        Api.getLevel1({
          indexType:5,
          pageNo:0,
          pageSize:3
        }).then(res=>{
          if(res.data.code === 0){
            this.charity = res.data.data;
          } else {
            alert('网络错误，请刷新重试');
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
