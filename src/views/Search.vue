<template>
  <div class="p-search">
    <div class="p-input">
      <input type="text" v-model="val" placeholder="请输入搜索内容">
      <span class="search" @click="getSearch">搜索</span>
    </div>
    <div class="p-page-list">
      <p-list title="搜索结果" type="text" :list="list" v-if="list.length > 0" :pullUpLoadText="pullUpLoadText"></p-list>
      <p v-if="list.length === 0" class="p-nothing">暂无结果</p>
      <div class="loading" v-show="loading">
        <img src="../assets/loading.svg">
        <span class="text">加载中...</span>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api";
import PList from "../components/List";
import Bscroll from "better-scroll";

export default {
  name: "Search",
  components: { PList },
  created() {
    this.$bus.title = "搜索";
  },
  data() {
    return {
      val: "",
      list: [],
      page: 0,
      total: null,
      loading: false,
      pullUpLoadText: "上拉加载更多..."
    };
  },
  methods: {
    getSearch() {
      this.loading = true;
      Api.getSearch({
        pageNo: 0,
        pageSize: 20,
        searchName: this.val
      }).then(res => {
        if (res.data.code === 0) {
          setTimeout(() => {
            this.loading = false;
          }, 500);
          res.data.data.content.forEach(element => {
            this.list.push(element);
          });
          this.total = res.data.data.totalElements;
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(".p-page-list", {
                click: true,
                scrollY: true
              });
              if (this.list.length === this.total) {
                this.pullUpLoadText = "没有更多了";
              } else {
                this.scroll.on("touchEnd", pos => {
                  if (this.scroll.maxScrollY > pos.y + 50) {
                    if (this.list.length === this.total) {
                      this.pullUpLoadText = "没有更多了";
                    } else {
                      this.page++;
                      this.getSearch();
                    }
                  }
                });
              }
            } else {
              this.scroll.refresh();
            }
          });
        } else {
          alert("网络错误，请刷新重试");
        }
      });
    }
  },
  watch: {
    val() {
      this.list = [];
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
.p-search {
  margin-top: 87px !important;
  .p-page-list {
    height: 80vh;
    overflow: visible;
  }
  .p-input {
    position: fixed;
    top: 56px;
    left: 50%;
    z-index: 10;
    transform: translateX(-50%);
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $white;
    margin: auto;
    overflow: hidden;
    border-bottom: 1px solid $border;
    input {
      height: 100%;
      padding: 0 20px;
      flex: 1;
      font-size: 14px;
    }
    .search {
      height: 100%;
      width: 80px;
      background: $border;
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>
