<template>
  <div>
    <div>
      <h2 style="font-size: 16px; margin: 12px 0 24px 8px">基本用法</h2>
      <div>
        <tiny-tabs v-model="activeName1" :with-add="true" :swipeable="true">
          <tiny-tab-item title="标签1" name="first"> 内容1 </tiny-tab-item>
          <tiny-tab-item title="标签2" name="second"> 内容2 </tiny-tab-item>
          <tiny-tab-item title="标签3" name="third"> 内容3 </tiny-tab-item>
          <tiny-tab-item title="标签4" name="fourth"> 内容4 </tiny-tab-item>
          <tiny-tab-item title="标签5" name="five"> 内容5 </tiny-tab-item>
          <tiny-tab-item title="标签6" name="six"> 内容6 </tiny-tab-item>
          <tiny-tab-item title="标签7" name="serven"> 内容7 </tiny-tab-item>
          <tiny-tab-item title="标签8" name="eight"> 内容8 </tiny-tab-item>
        </tiny-tabs>
      </div>
    </div>
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
      activeName1: 'third',
      activeName2: 'second',
      activeName3: 'second',
      activeName4: 'second',
      activeName5: '1'
    }
  }
}
</script>
