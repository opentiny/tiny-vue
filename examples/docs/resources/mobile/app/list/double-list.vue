<template>
  <div class="demo">
    <div class="page__hd">
      <h1 class="page__title">List</h1>
      <p class="page__desc">双行列表</p>
    </div>
    <div class="list">
      <tiny-list v-for="(item, index) of dataList" :key="index" :content="item.content" :content-des="item.contentdes">
        <template #suffix>
          <img :src="item.img" style="height: 15px; width: 15px" />
        </template>
      </tiny-list>
    </div>
  </div>
</template>

<script lang="jsx">
import { List } from '@opentiny/vue'

export default {
  components: {
    TinyList: List
  },
  data() {
    return {
      dataList: [
        {
          id: 1,
          content: '主文本，文本较多换行时，列表高度相应增高，文本与列表上下间距不变',
          contentdes: '此处是辅助说明文体，说明文本',
          img: '/static/images/dog2.png'
        },
        {
          id: 2,
          content: '主文本',
          contentdes: '此处是辅助说明文体，说明文本，文本较多换行时，列表高度相应增高，文本与列表上下间距不变',
          img: '/static/images/dog2.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.demo {
  height: 100%;
  overflow: auto;
  background: #f4f4f4;
}
</style>

<style>
.demo .tiny-mobile-list__content-des {
  color: #999;
  font-size: 12px;
  line-height: 1.6;
}
</style>
