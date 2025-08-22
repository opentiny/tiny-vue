<template>
  <AuiTabItem aui_mode="mobile-first" v-bind="{ name, title }">
    <div :class="rootClass">
      <slot></slot>
    </div>
  </AuiTabItem>
</template>

<script>
import { TinyTabItem as AuiTabItem } from '@opentiny/vue'

export default {
  components: {
    AuiTabItem
  },
  props: { name: String, title: String },
  data() {
    return {
      active: 'one',
      count: 0
    }
  },
  created() {
    setInterval(() => {
      this.count = this.count + 1
      // console.debug('update count', this.count)
      // 尝试强制更新组件
      this.$forceUpdate()
    }, 5000)
  },
  computed: {
    rootClass() {
      // console.debug('rootClass', `mt-${this.count}`)
      return `mt-${this.count}`
    }
  }
}
</script>
