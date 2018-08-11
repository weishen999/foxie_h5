<template>
  <div class="p-list-wrapper">
    <h2>{{title}} <span class="more" @click="$router.push(router)" v-if="$route.name !== 'PageList'">更多></span></h2>
    <slot>
      <!-- 图类型 -->
      <ul class="p-list img" v-if="type === 'img'">
        <li class="img__item" v-for="item in list" @click="$router.push({name:'Details',params:{id:item.id}})">
          <img class="img" :src="imgURL + item.pic" alt="">
          <div class="info">
            <p>{{ item.remark | cut(20) }}</p>
            <time>{{ item.updateTime }}</time>
          </div>
        </li>
      </ul>
      <!-- 文字类型 -->
      <ul class="p-list text" v-if="type === 'text'">
        <li class="img__item" v-for="item in list" :key="item.id" @click="$router.push({name:'Details',params:{id:item.id}})">
          {{ item.remark}}
        </li>
      </ul>
      <!-- 人物介绍 -->
      <div class="p-list alone" v-if="type === 'alone'">
        <img class="img" :src="imgURL + list[0].pic" alt="">
        <p class="desc">{{list[0].remark | cut(75)}}</p>
      </div>
      <!-- 左右滑动 -->
      <ul class="p-list horizontal" v-if="type === 'horizontal'">
        <slot name="horizontal">
          <li class="img__item" v-for="item in list" @click="$router.push({name:'Details',params:{id:item.id}})">
            <img class="img" :src="imgURL + item.pic" alt="">
            <div class="info">
              <h3>{{item.title}}</h3>
              <p>{{ item.remark | cut(45)}}</p>
            </div>
          </li>
        </slot>
      </ul>
      <!-- 左右滑动2 -->
      <ul class="p-list horizontal-2" v-if="type === 'horizontal-2'">
        <li class="img__item" v-for="item in list" @click="$router.push({name:'Details',params:{id:item.id}})">
          <img class="img" :src="imgURL + item.pic" alt="">
          <div class="info">
            <h3>{{item.title | cut(8)}}</h3>
            <p>{{ item.remark | cut(30)}}</p>
          </div>
        </li>
      </ul>
      <!-- 图文混合 -->
      <ul class="p-list hybrid" v-if="type === 'hybrid'">
        <li class="img__item hybrid--img" v-for="(item,index) in list" v-if="index === 0" @click="$router.push({name:'Details',params:{id:item.id}})">
          <img class="img" :src="imgURL + item.pic" alt="">
          <div class="info">
            <p>{{ item.remark | cut(20)}}</p>
            <time>{{ item.updateTime }}</time>
          </div>
        </li>
        <li class="img__item hybrid--text" v-for="item in list" @click="$router.push({name:'Details',params:{id:item.id}})">
          {{ item.remark }}
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
  export default {
    name: "List",
    props: {
      title: {
        type: String
      },
      router: {
        type: Object
      },
      type: {
        type: String,
        default: "text",
        validator: function (value) {
          return ["text", "img", "hybrid", "alone", 'horizontal', 'horizontal-2'].indexOf(value) !== -1;
        }
      },
      list: {
        type: Array
      },
    },
    data() {
      return {
        imgURL: process.env.DOMAIN
      }
    },
  };
</script>

<style lang="scss">
  @import "../styles/variables";

  .p-list-wrapper {
    margin-top: 10px;
    padding: 8px 16px;
    background: $white;
    h2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      font-size: 16px;
      font-weight: bold;
      &:before {
        position: absolute;
        content: "";
        left: -10px;
        top: 50%;
        width: 3px;
        height: 80%;
        background: $primary;
        transform: translateY(-50%);
      }
      .more {
        font-size: 12px;
        color: $font-three;
      }
    }
    .p-list {
      padding: 10px;
    }
    .img {
      .img__item {
        display: flex;
        font-size: 16px;
        .img {
          display: inline-block;
          width: 120px;
          height: 72px;
          border-radius: 4px;
          background: $bg;
          object-fit: cover;
        }
        .info {
          display: inline-flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 10px;
          height: 72px;
          width: 64%;
          time {
            font-size: 12px;
            color: $font-three;
          }
        }
        & + .img__item {
          padding-top: 10px;
        }
      }
    }
    .text {
      .img__item {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 5px 0;
        & + .img__item {
          border-top: 1px solid $border;
        }
      }
    }
    .alone {
      display: flex;
      font-size: 16px;
      .img {
        display: inline-block;
        width: 120px;
        height: 160px;
        background: $bg;
        object-fit: contain;
      }
      .desc {
        display: flex;
        margin-left: 10px;
        width: 55%;
      }
    }
    .horizontal {
      white-space: nowrap;
      overflow-x: scroll;
      .img__item {
        display: inline-flex;
        flex-direction: column;
        width: 160px;
        height: 200px;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid $border;
        .img {
          width: 100%;
          height: 90px;
          object-fit: cover;
          background: $bg;
        }
        & + .img__item {
          margin-left: 6px;
        }
        .info {
          padding: 8px;
          p {
            color: $font-three;
            font-size: 12px;
            white-space: pre-wrap;
          }
        }
      }
    }
    .horizontal-2 {
      white-space: nowrap;
      overflow-x: scroll;
      .img__item {
        display: inline-flex;
        align-items: center;
        width: 240px;
        height: 93px;
        padding: 8px 10px;
        border: 1px solid $border;
        border-radius: 4px;
        .img {
          display: inline-block;
          width: 68px;
          height: 68px;
          background: $bg;
          object-fit: cover;
        }
        .info {
          margin-left: 10px;
          width: 64%;
          overflow-y: scroll;
          h3{
            font-size: 14px;
          }
          p {
            font-size: 12px;
            color: $font-three;
            white-space: pre-wrap;
          }
        }
        & + .img__item {
          margin-left: 6px;
        }
      }
    }
    .hybrid {
      &--img {
        display: flex;
        font-size: 16px;
        .img {
          display: inline-block;
          width: 120px;
          height: 72px;
          border-radius: 4px;
          background: $bg;
          object-fit: cover;
        }
        .info {
          display: inline-flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 10px;
          height: 72px;
          width: 64%;
          time {
            font-size: 12px;
            color: $font-three;
          }
        }
        & + .img__item {
          padding-top: 10px;
        }
      }
      &--text {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        & + .img__item {
          padding: 5px 0;
          border-top: 1px solid $border;
        }
      }
    }
  }
</style>
