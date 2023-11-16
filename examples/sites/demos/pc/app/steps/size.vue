<template>
  <tiny-steps vertical line size="small" :data="data" :visible-num="4" :active="advancedActive"></tiny-steps>
</template>

<script>
import { Steps, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySteps: Steps
  },
  data() {
    return {
      advancedActive: 1,
      data: [
        {
          name: 'Basic Info',
          status: 'done'
        },
        { name: 'BOQ Info', status: 'done', description: 'done 已完成' },
        { name: 'BBQ Info', status: 'error', description: 'error 错误' },
        {
          name: 'Involved Parties Involved Parties Involved Parties',
          status: 'disabled'
        },
        { name: 'Billing', status: '', description: '默认无状态' }
      ]
    }
  }
}
</script>
