<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">面板选择器</h1>
      <p class="page__desc">弹出式菜单</p>
    </div>
    <tiny-button @click="fn" type="primary"> 面板选择器 </tiny-button>
    <tiny-select-mobile
      v-model="activeName"
      :menus="menus"
      :search-config="searchConfig"
      title="标题"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-select-mobile>
  </div>
</template>

<script>
import { SelectMobile, Button } from '@opentiny/vue'

export default {
  components: {
    TinySelectMobile: SelectMobile,
    TinyButton: Button
  },
  data() {
    const list = [
      {
        id: 1,
        label: '进行中'
      },
      {
        id: 2,
        label: '未开始'
      },
      {
        id: 3,
        label: '已完成'
      },
      {
        id: 4,
        label: '已过期已过期已过期已过期已过期已过期已过期'
      }
    ]

    return {
      activeName: 1,
      boxVisibility: false,
      menus: list,
      searchConfig: {
        options: list
      }
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
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
</style>
