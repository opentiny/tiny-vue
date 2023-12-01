<template>
  <div>
    是否隐藏：<tiny-switch v-model="isHide"></tiny-switch>
    <tiny-pager :hide-on-single-page="isHide" layout="prev, pager, next" :total="1"></tiny-pager>
  </div>
</template>

<script>
import { Pager, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyPager: Pager,
    TinySwitch: Switch
  },
  data() {
    return {
      isHide: false
    }
  }
}
</script>
