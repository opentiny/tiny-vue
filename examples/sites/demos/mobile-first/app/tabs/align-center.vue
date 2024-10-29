<template>
  <tiny-tabs v-model="activeName">
    <tiny-tab-item title="页签一" name="1"> 页签一内容 </tiny-tab-item>
    <tiny-tab-item title="页签二" name="2"> 页签二内容 </tiny-tab-item>
  </tiny-tabs>
</template>

<script>
import { TinyTabs, TinyTabItem } from '@opentiny/vue'

export default {
  components: {
    TinyTabs,
    TinyTabItem
  },
  data() {
    return { activeName: '1' }
  }
}
</script>
