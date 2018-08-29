<template>
  <div class="itv-news">
    <template v-for="item in news" v-if="news">
      <p-list :title="item.typeName" type="img" :list="item.data" v-if="item.type === 2" :router="{name:'PageList',params:{type:item.type}}"></p-list>
      <p-list :title="item.typeName" type="hybrid" :list="item.data" :router="{name:'PageList',params:{type:item.type}}" v-else></p-list>
      </template>
  </div>
</template>

<script>
  import PList from '../components/List'
  import Api from '../api'

  export default {
    name: "News",
    components:{PList},
    created(){
      this.getNews();
      this.$bus.title = '新闻中心';
    },
    data() {
      return {
        news:null,
      }
    },
    methods:{
      getNews(){
        Api.getLevel1({
          indexType:3,
          pageNo:0,
          pageSize:3
        }).then(res=>{
          if(res.data.code === 0){
            this.news = res.data.data.list;
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
