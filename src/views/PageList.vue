<template>
  <div class="p-page-list">
    <p-list :title="list[0].sortName" type="text" :list="list" v-if="list.length > 0" :pullUpLoadText="pullUpLoadText"></p-list>
    <div class="loading" v-show="loading">
      <img src="../assets/loading.svg">
      <span class="text">加载中...</span>
    </div>
  </div>
</template>

<script>
import PList from "../components/List";
import Api from "../api";
import Bscroll from "better-scroll";

export default {
  name: "pageList",
  components: { PList },
  created() {
    this.getList();
  },
  data() {
    return {
      list: [],
      page: 0,
      total: null,
      loading: false,
      pullUpLoadText: "上拉加载更多..."
    };
  },
  methods: {
    getList() {
      this.loading = true;
      Api.getLevel2({
        pageNo: this.page,
        pageSize: 20,
        type: this.$route.params.type
      }).then(res => {
        setTimeout(() => {
          this.loading = false;
        }, 500);
        res.data.data.content.forEach(element => {
          this.list.push(element);
        });
        this.total = res.data.data.totalElements;
        this.$bus.title = this.list[0].sortName + "列表";
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
                    this.getList();
                  }
                }
              });
            }
          } else {
            this.scroll.refresh();
          }
        });
      });
    }
  }
};
</script>

<style lang="scss">
.p-page-list {
  width: 100%;
  height: 88vh;
  overflow: hidden;
  .loading {
    position: fixed;
    left: 50%;
    top: 40%;
    width: 80px;
    height: 80px;
    background-color: #1f1f1f;
    opacity: 0.7;
    border-radius: 5px;
    z-index: 99999;
    text-align: center;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 60%;
      object-fit: contain;
    }
    .text {
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
