<template>
  <div class="itv-introduce">
    <template v-for="item in introduce" v-if="introduce">
      <p-list title="领导成员" :list="item.data" v-if="item.type === 1">
        <img :src="item.pic" alt="">
      </p-list>
      <p-list :title="item.typeName" type="alone" :list="item.data" v-if="item.type === 2" :router="{name:'PageList',params:{type:2}}"></p-list>
      <p-list :title="item.typeName" type="horizontal" :list="item.data" v-if="item.type === 3" :router="{name:'PageList',params:{type:3}}"></p-list>
      <p-list :title="item.typeName" type="hybrid" :list="item.data" v-if="item.type === 18" :router="{name:'PageList',params:{type:18}}"></p-list>
      <p-list :title="item.typeName" type="hybrid" :list="item.data" v-if="item.type === 19" :router="{name:'PageList',params:{type:19}}"></p-list>
      <p-list :title="item.typeName" type="hybrid" :list="item.data" v-if="item.type === 20" :router="{name:'PageList',params:{type:20}}"></p-list>
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
    },
    data() {
      return {
        introduce:null,
      }
    },
    methods:{
      getIntroduce(){
        Api.getLevel1({
          indexType:2,
          pageNo:1,
          pageSize:3
        }).then(res=>{
          if(res.data.code === 0){
            this.introduce = res.data.data.list;
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

<style lang="scss">

</style>
