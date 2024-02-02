<template>
  <div class="demo-steps">
    <tiny-steps advanced :data="data" :duration="duration" :active="advancedActive"></tiny-steps>
  </div>
</template>

<script>
import { Steps } from '@opentiny/vue'

export default {
  components: {
    TinySteps: Steps
  },
  data() {
    return {
      duration: 1000,
      advancedActive: 2,
      data: [
        {
          name: '默认 Basic Info',
          status: ''
        },
        { name: '已完成 BOQ Info', status: 'done' },
        { name: '错误 BBQ Info', status: 'error' },
        {
          name: '已禁用 Involved Parties Involved Parties Involved Parties',
          status: 'disabled'
        },
        { name: '默认 Billing1', status: '' }
      ]
    }
  }
}
</script>

<style scoped>
.demo-steps {
  width: 650px;
}
</style>
