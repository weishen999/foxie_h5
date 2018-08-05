<template>
  <div class="p-page-list">
    <p-list :title="list.content[0].sortName" type="text" :list="list.content" v-if="list"></p-list>
  </div>
</template>

<script>
  import PList from '../components/List'
  import Api from '../api'

  export default {
    name: "pageList",
    components:{PList},
    created(){
      this.getList();
    },
    data() {
      return {
        list:null,
      }
    },
    methods:{
      getList(){
        Api.getLevel2({
          pageNo:0,
          pageSize:20,
          type:this.$route.params.type,
        }).then(res=>{
          this.list = res.data.data;
        }).catch(error => {
          alert('网络错误，请刷新重试');
        })
      },
    }
  }
</script>

<style scoped>

</style>
