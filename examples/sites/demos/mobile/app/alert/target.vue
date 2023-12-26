<template>
  <div class="alert-target-demo">
    <div class="alert-wrap" ref="target">
      <tiny-tabs activeName="first" activeColor="blue">
        <tiny-tab-item title="标签1" name="first"> 内容1 </tiny-tab-item>
        <tiny-tab-item title="标签2" name="second"> 内容2 </tiny-tab-item>
        <tiny-tab-item title="标签3" name="third"> 内容3 </tiny-tab-item>
      </tiny-tabs>
    </div>
    <tiny-alert target="target">展示在标签栏上</tiny-alert>
  </div>
</template>

<script>
import { Alert, Tabs, TabItem } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert,
    TinyTabs: Tabs,
    TinyTabItem: TabItem
  }
}
</script>

<style>
.alert-wrap .tiny-mobile-alert {
  margin-bottom: 8px;
}
</style>
