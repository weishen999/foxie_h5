<template>
  <div class="p-ap" v-if="ap">
    <swiper class="p-swiper" :options="bacteriaOption">
      <swiper-slide class="item" v-for="(img,i) in ap.image">
        <div @click="$router.push({name:'Details',params:{id:img.id}})">
          <img :src="imgURL + img.pic" alt="">
          <p class="desc">{{img.remark | cut(20)}} <span class="page"><span style="font-weight: bold">{{ i + 1 }}</span>/{{ap.image.length}}</span></p>
        </div>
      </swiper-slide>
    </swiper>
    <template v-for="item in ap.list" v-if="ap">
      <p-list :title="item.typeName" type="horizontal-2" :list="item.data" v-if="item.type === 14" :router="{name:'PageList',params:{type:item.type}}"></p-list>
      <p-list :title="item.typeName" :list="item.data" v-if="item.type === 15" :router="{name:'PageList',params:{type:item.type}}">
        <img :src="imgURL + item.pic" alt="">
      </p-list>
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
      this.getAp();
    },
    data() {
      return {
        ap:null,
        bacteriaOption: {
          loop: true,
          autoplay: true
        },
        imgURL:process.env.DOMAIN
      }
    },
    methods:{
      getAp(){
        Api.getLevel1({
          indexType:6,
          pageNo:0,
          pageSize:3
        }).then(res=>{
          if(res.data.code === 0){
            this.ap = res.data.data;
          } else {
            alert('网络错误，请刷新重试');
          }
        }).catch(error => {
          alert('网络错误，请刷新重试');
        })
      },
    }
  }
</script>

<style scoped>

</style>
