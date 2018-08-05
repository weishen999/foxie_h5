<template>
  <div id="app" class="p-wrapper">
    <nav class="p-nav">
      <router-link class="link" :to="{name:'Index'}"><img src="./assets/logo.png" class="logo" title="上海佛教网" alt="上海佛教网"></router-link>
      <!--<i class="search"></i>-->
      <div class="p-nav-wrap">
        <ul class="p-nav-bar">
          <router-link class="p-nav-bar__item" id="Index" :class="{'active':$route.name === 'Index'}" :to="{name:'Index'}">首页</router-link>
          <router-link class="p-nav-bar__item" id="Introduce" :class="{'active':$route.name === 'Introduce'}" :to="{name:'Introduce'}">本会介绍</router-link>
          <router-link class="p-nav-bar__item" id="New" :class="{'active':$route.name === 'News'}" :to="{name:'News'}">新闻中心</router-link>
          <router-link class="p-nav-bar__item" id="Policies" :class="{'active':$route.name === 'Policies'}" :to="{name:'Policies'}">政策法规</router-link>
          <router-link class="p-nav-bar__item" id="Charity" :class="{'active':$route.name === 'Charity'}" :to="{name:'Charity'}">慈善公益</router-link>
          <router-link class="p-nav-bar__item" id="AcquaintingPagoda" :class="{'active':$route.name === 'AcquaintingPagoda'}" :to="{name:'AcquaintingPagoda'}">名寺宝刹</router-link>
        </ul>
      </div>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view class="p-views"></router-view>
    </transition>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
  name: "App",
    mounted(){
      this.$nextTick(()=>{
        this.scrollerNav = new BScroll(".p-nav-wrap", {
          scrollY: false,
          scrollX: true,
          click: true
        });
      })
    },
    data() {
      return {
        scrollerNav: null
      }
    },
    watch: {
      $route() {
        this.scrollerNav.refresh();
        this.scrollerNav.scrollToElement(
          this.$el.querySelector(`#${this.$route.name}`),
          800,
          true,
          true
        );
      },
    }
};
</script>

<style lang="scss">
@import "./styles/custom";

.p-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background: $bg;
  color: $font;
  .p-views{
    margin-top: 87px;
  }
}
.p-nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  height: 56px;
  text-align: center;
  background-color: $primary;
  .link{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .logo {
      object-fit: cover;
    }
  }
  .search {
    position: absolute;
    right: 20px;
    top: 16px;
    width: 24px;
    height: 24px;
    background: url("./assets/search.png") no-repeat;
    background-size: 100% 100%;
  }
  &-bar {
    float: left;
    white-space: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    min-width: 100%;
    background: $white;
    border-bottom: 1px solid $border;
    &__item {
      display: inline-block;
      height: 100%;
      color: $font-second;
      opacity: 0.7;
      padding: 4px 12px;
      text-align: center;
      border-bottom: 2px solid transparent;
      &.active {
        opacity: 1;
        font-weight: bold;
        border-bottom: 2px solid $font-second;
      }
    }
  }
}
</style>
