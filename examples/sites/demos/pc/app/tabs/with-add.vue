<template>
  <tiny-tabs
    tab-style="card"
    :with-add="true"
    @add="handleAdd"
    style="width: 500px"
    show-more-tabs
    popper-class="custom-class"
  >
    <tiny-tab-item :key="item.name" v-for="item in tabs" :title="item.title" :name="item.name">
      {{ item.content }}
    </tiny-tab-item>
  </tiny-tabs>
</template>

<script lang="jsx">
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
      tabIndex: 2
    }
  },
  methods: {
    handleAdd() {
      TinyModal.message({
        message: '动态增加 Tab ++',
        status: 'success'
      })

      this.tabs.push({
        title: 'Tab ++',
        name: ++this.tabIndex + '',
        content: '动态增加 tabitem'
      })
    }
  }
}
</script>
