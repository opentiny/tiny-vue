<template>
  <div>
    是否隐藏：<tiny-switch v-model="isHide"></tiny-switch>
    <tiny-pager :hide-on-single-page="isHide" :total="1"></tiny-pager>
  </div>
</template>

<script>
import { TinyPager, TinySwitch } from '@opentiny/vue'

export default {
  components: {
    TinyPager,
    TinySwitch
  },
  data() {
    return {
      isHide: false
    }
  }
}
</script>
