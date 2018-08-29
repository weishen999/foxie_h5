<template>
  <div class="itv-introduce">
    <template v-for="item in introduce" v-if="introduce">
      <p-list title="领导成员" :list="item.data" v-if="item.type === 0">
        <img :src="imgURL + item.pic" alt="">
      </p-list>
      <p-list :title="item.typeName" type="alone" :list="item.data" v-if="item.type === 19" :router="{name:'PageList',params:{type:item.type}}"></p-list>
      <p-list :title="item.typeName" type="horizontal" :list="item.data" v-if="item.type === 20" :router="{name:'PageList',params:{type:item.type}}"></p-list>
      <p-list :title="item.typeName" type="hybrid" :list="item.data" v-if="item.type >=11 && item.type <=13" :router="{name:'PageList',params:{type:item.type}}"></p-list>
    </template>
  </div>
</template>

<script>
  import PList from '../components/List'
  import Api from '../api'

  export default {
    name: "Introduce",
    components:{PList},
    created(){
      this.getIntroduce();
      this.$bus.title = '本会介绍';
    },
    data() {
      return {
        introduce:null,
        imgURL:process.env.DOMAIN
      }
    },
    methods:{
      getIntroduce(){
        Api.getLevel1({
          indexType:2,
          pageNo:0,
          pageSize:3
        }).then(res=>{
          if(res.data.code === 0){
            this.introduce = res.data.data.list;
          } else {
            alert('网络错误，请刷新重试');
          }
        })
      },
    }
  }
</script>

<style lang="scss">

</style>
