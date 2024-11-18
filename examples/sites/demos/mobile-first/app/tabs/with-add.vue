<template>
  <tiny-tabs tab-style="card" :editable="false" :with-add="true" @add="handleadd" style="width: 500px" show-more-tabs>
    <tiny-tab-item :key="item.name" v-for="item in tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { TinyTabs, TinyTabItem, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyTabs,
    TinyTabItem
  },
  data() {
    return {
      tabs: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content '
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      tabIndex: 2,
      maxCount: 10
    }
  },
  methods: {
    handleadd() {
      // 如果tabItem数量小于指定值就可以新增
      if (this.tabs.length < this.maxCount) {
        const name = `${++this.tabIndex}`
        const title = `Tab ++ ${name}`
        this.tabs.push({ title, name, content: '动态增加tabitem - ' + name })
      } else {
        TinyModal.message('tabitem数量已到最大值')
      }
    }
  }
}
</script>
