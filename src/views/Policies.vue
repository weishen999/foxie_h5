<template>
  <div class="itv-policies">
    <template v-for="item in policies" v-if="policies">
      <p-list :title="item.typeName" type="text" :list="item.data" v-if="item.type === 8" :router="{name:'PageList',params:{type:8}}"></p-list>
      <p-list :title="item.typeName" type="text" :list="item.data" v-if="item.type === 9" :router="{name:'PageList',params:{type:9}}"></p-list>
      <p-list :title="item.typeName" type="text" :list="item.data" v-if="item.type === 10" :router="{name:'PageList',params:{type:10}}"></p-list>
    </template>
  </div>
</template>

<script>
  import PList from '../components/List'
  import Api from '../api'

  export default {
    name: "Policies",
    components:{PList},
    created(){
      this.getPolicies();
    },
    data() {
      return {
        policies:null,
      }
    },
    methods:{
      getPolicies(){
        Api.getLevel1({
          indexType:4,
          pageNo:1,
          pageSize:3
        }).then(res=>{
          if(res.data.code === 0){
            this.policies = res.data.data.list;
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
