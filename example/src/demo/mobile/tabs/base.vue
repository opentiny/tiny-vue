<template>
  <div class="tiny-mobile-tabs-demo">
    <tiny-tabs :active-name="activeName1">
      <tiny-tab-item title="标签1" name="first"> 内容1 </tiny-tab-item>
      <tiny-tab-item title="标签2" name="second"> 内容2 </tiny-tab-item>
      <tiny-tab-item title="标签3" name="third"> 内容3 </tiny-tab-item>
      <tiny-tab-item title="标签4" name="fourth"> 内容4 </tiny-tab-item>
    </tiny-tabs>
    <tiny-tabs v-model="activeName2" :with-add="true" style="margin-top: 50px">
      <tiny-tab-item title="标签1" name="first"> 内容1 </tiny-tab-item>
      <tiny-tab-item title="标签2" name="second"> 内容2 </tiny-tab-item>
      <tiny-tab-item title="标签3" name="third"> 内容3 </tiny-tab-item>
      <tiny-tab-item title="标签4" name="fourth"> 内容4 </tiny-tab-item>
    </tiny-tabs>
    <tiny-tabs v-model="activeName3" :with-add="true" style="margin-top: 50px">
      <tiny-tab-item title="标签1" name="first"> 内容1 </tiny-tab-item>
      <tiny-tab-item title="标签2" name="second"> 内容2 </tiny-tab-item>
      <tiny-tab-item title="标签3" name="third"> 内容3 </tiny-tab-item>
      <tiny-tab-item title="标签4" name="fourth"> 内容4 </tiny-tab-item>
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
      activeName1: 'first',
      activeName2: 'second',
      activeName3: 'third'
    }
  }
}
</script>

<style scoped>
.tiny-mobile-tabs-demo {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
</style>
