<template>
  <tiny-tabs style="width: 400px" show-more-tabs more-show-all panel-max-height="300px" panel-width="150px">
    <template #moreIcon>
      <tiny-icon-popup />
    </template>
    <tiny-tab-item :key="item.name" v-for="item in tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script lang="jsx">
import { TinyTabs, TinyTabItem } from '@opentiny/vue'
import { iconPopup } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTabs,
    TinyTabItem,
    TinyIconPopup: iconPopup()
  },
  data() {
    return {
      tabs: []
    }
  },
  created() {
    // 创建 tabs
    for (let i = 1; i < 101; i++) {
      const title = `Tab ${i}`
      this.tabs.push({
        title,
        name: i + '',
        content: `${title} content `
      })
    }
  }
}
</script>
