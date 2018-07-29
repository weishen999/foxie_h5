<template>
  <div class="p-index" v-if="index">
    <swiper class="p-swiper" :options="bacteriaOption">
      <swiper-slide class="item" v-for="(img,i) in index.image">
        <img :src="img.url" alt="">
        <p class="desc">{{img.remark}} <span class="page"><span style="font-weight: bold">{{ i + 1 }}</span>/{{index.image.length}}</span></p>
      </swiper-slide>
    </swiper>
    <p-list title="护佛动态" type="img" :list="index.list[1].data"></p-list>
    <p-list title="各地法讯" type="img" :list="index.list[2].data"></p-list>
    <p-list title="上海佛协" type="text" :list="index.list[10].data"></p-list>
    <p-list title="现任会长" type="alone" :list="index.list[10].data"></p-list>
    <p-list title="历届领导" type="horizontal" :list="index.list[5].data"></p-list>
    <p-list title="国家政策" type="text" :list="index.list[6].data"></p-list>
    <p-list title="名寺宝刹" type="horizontal-2" class="p-pagoda" :list="index.list[9].data"></p-list>
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
      this.getIndex();
    },
    data() {
      return {
        index:null,
        bacteriaOption: {
          loop: true,
          autoplay: true
        }
      }
    },
    methods:{
      getIndex(){
        Api.getLevel1({
          indexType:1,
          pageNo:1,
          pageSize:3
        }).then(res=>{
          if(res.data.code === 0){
            this.index = res.data.data;
            this.index.list[9].data = [{pic:'',title:'',remark:''}]
          }
        }).catch(error => {
          alert('网络错误，请刷新重试');
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
  .p-swiper {
    height: 210px;
    .swiper-slide {
      height: 210px;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
        background: $bg;
        object-fit: cover;
      }
    }
    .desc{
      position: absolute;
      bottom:0;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      color: $white;
      z-index: 2;
      width: 100%;
      &:before{
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        height: 30px;
        width: 100%;
        background: black;
        opacity: .7;
        z-index: -1;
      }
    }
  }
}
</style>
