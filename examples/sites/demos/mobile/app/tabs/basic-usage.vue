<template>
  <div class="demo-tabs">
    <tiny-tabs v-model="activeName">
      <tiny-tab-item title="标签1" name="first"> 内容1 </tiny-tab-item>
      <tiny-tab-item title="标签2" name="second"> 内容2 </tiny-tab-item>
      <tiny-tab-item title="标签2" name="third" disabled> 内容3 </tiny-tab-item>
    </tiny-tabs>
  </div>
</template>

<script>
import { Tabs, TabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  },
  data() {
    return {
      activeName: 'second'
    }
  }
}
</script>

<style scoped>
.demo-tabs {
  height: 100%;
  text-align: center;
}
</style>
