<template>
  <view>
    <view style="width: 90%;margin-left: auto;margin-right: auto;" v-for="(item,index) in blogList" :key="index">
      <view class="title" @click="toPath(item.id)">{{ item.title }}</view>
      <view class="abstract">
        {{ getSummary(item.summary) }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      summaryMaxLength: 50,
    }
  },
  props: {
    blogList: {
      type: Array,
      default: []
    }
  },
  methods: {
    getSummary(summary) {
      if (summary.length <= this.summaryMaxLength) {
        return summary + '...'
      } else {
        return summary.substring(0, this.summaryMaxLength) + '...'
      }
    },
    toPath(id) {
      //跳转非pages.json>tabbar>配置过的页面，使用navigateTo
      //跳转时保留老页面，一般用于需要返回
      uni.navigateTo({
        url: "pages/blog-detail/index?id=" + id
      })
    }
  }
}
</script>

<style>
.title {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 2rem;
  color: black;
}

.abstract {
  margin: 0.25rem 0 8px;
  font-size: 0.75rem;
  line-height: 1.2rem;
  color: #656565;
}
</style>
