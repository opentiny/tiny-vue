<template>
  <div class="content">
    是否禁用：<tiny-switch v-model="isDisabled"></tiny-switch>
    <tiny-pager mode="number" :total="100" :disabled="isDisabled" />
    <tiny-pager mode="number" :total="100" size="mini" :disabled="isDisabled" />
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
      isDisabled: false
    }
  }
}
</script>

<style scoped>
.content {
  margin-bottom: 20px;
}
</style>
