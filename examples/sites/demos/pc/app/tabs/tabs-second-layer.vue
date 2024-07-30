<template>
  <tiny-tabs v-model="activeName">
    <tiny-tab-item v-for="items in tabs" :key="items.name" :title="items.title" :name="items.name">
      <tiny-tabs tab-style="button-card">
        <tiny-tab-item v-for="item in items.content" :key="item.name" :title="item.title" :name="item.name">
          <template #title v-if="item.icon">
            <span class="item"> {{ item.title }} </span>
          </template>
          {{ item.content }}
        </tiny-tab-item>
      </tiny-tabs>
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script lang="jsx">
import { Tabs, TabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  data() {
    return {
      activeName: 'first',
      tabs: [
        {
          name: 'first',
          title: '选项一',
          content: [
            {
              name: '系统镜像',
              title: '系统镜像',
              content: '系统镜像'
            },
            {
              name: '应用镜像',
              title: '应用镜像',
              content: '应用镜像'
            },
            {
              name: '私有镜像',
              title: '私有镜像',
              content: '私有镜像'
            },
            {
              name: '共享镜像',
              title: '共享镜像',
              content: '共享镜像'
            }
          ]
        },
        {
          name: 'second',
          title: '选项二',
          content: [
            {
              name: '￥',
              icon: true,
              title: '￥',
              content: '￥'
            },
            {
              name: '$',
              icon: true,
              title: '$',
              content: '$'
            }
          ]
        },
        {
          name: 'third',
          title: '选项三',
          content: [
            {
              name: '云镜像',
              title: '云镜像',
              content: '云镜像'
            }
          ]
        },
        {
          name: 'fourth',
          title: '选项四',
          content: [
            {
              name: '云镜像',
              title: '云镜像',
              content: '云镜像'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.item {
  padding: 0 8px;
  text-align: center;
  font-weight: normal;
}
</style>
