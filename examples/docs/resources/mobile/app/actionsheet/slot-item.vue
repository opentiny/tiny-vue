<template>
  <div class="tiny-mobile-action-sheet-demo action-sheet-slot">
    <div class="page__hd">
      <h1 class="page__title">上滑列表</h1>
      <p class="page__desc">弹出式菜单</p>
    </div>
    <tiny-button @click="fn" type="primary" size="large">上滑列表</tiny-button>
    <tiny-action-sheet v-model="activeName" :menus="menus" :visible="boxVisibility" @update:visible="boxVisibility = $event">
      <template #item="data">
        <div>
          {{ data.item.label }}
        </div>
      </template>
    </tiny-action-sheet>
  </div>
</template>

<script lang="jsx">
import { ActionSheet, Button } from '@opentiny/vue'

export default {
  components: {
    TinyActionSheet: ActionSheet,
    TinyButton: Button
  },
  data() {
    return {
      activeName: 1,
      boxVisibility: false,
      menus: [
        {
          id: 1,
          label: '我是小花,我是小花,我是小花,我是小花,我是小花,我是小花,我是小花'
        },
        {
          id: 2,
          label: '我是小树'
        },
        {
          id: 3,
          label: '我是小草'
        },
        {
          id: 4,
          label: '我是小叶',
          warn: true
        }
      ]
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    }
  }
}
</script>

<style>
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
