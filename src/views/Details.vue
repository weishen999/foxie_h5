<template>
  <div class="itv-details">
    <h1 class="title">{{content.title}}</h1>
    <p class="desc">来源：{{ content.sortName }}  时间：{{content.updateTime}}</p>
    <div v-html="content.description"></div>
  </div>
</template>

<script>
  import Api from '../api'

  export default {
    name: "Details",
    created(){
      this.getDetails();
    },
    data() {
      return {
        content:'',
      }
    },
    methods:{
      getDetails(){
        console.log(this.$route.params.id);
        Api.getDetails({
          id:this.$route.params.id
        }).then(res=>{
          this.content = res.data.data;
        }).catch(error => {
          alert('网络错误，请刷新重试');
        })
      },
    }
  }
</script>

<style lang="scss">
  @import "../styles/variables";
.itv-details{
  padding: 16px;
  background: $white;
  min-height: 87vh;
  .title{
    font-size: 18px;
    font-weight: bold;
  }
  .desc{
    padding: 12px 0;
    font-size: 12px;
    color: $font-three;
    font-weight: bold;
  }
}
</style>
