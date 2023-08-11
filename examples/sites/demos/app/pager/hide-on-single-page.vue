<template>
  <div>
    <tiny-switch v-model="isHide"></tiny-switch>
    <tiny-pager :hide-on-single-page="isHide" layout="prev, pager, next" :total="1"></tiny-pager>
  </div>
</template>

<script lang="jsx">
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
