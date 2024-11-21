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
import { TinyTabs, TinyTabItem } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyTabs,
    TinyTabItem
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
