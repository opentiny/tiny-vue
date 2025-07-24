<template>
  <tiny-time-line :data="data" :active="normalActive" :show-divider="true" text-position="right" @click="normalClick">
  </tiny-time-line>
</template>

<script>
import { TinyTimeLine, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine
  },
  data() {
    return {
      normalActive: 0,
      data: [{ name: 'Basic Info' }, { name: 'BOQ Info' }, { name: 'Involved Parties' }, { name: 'Billing' }]
    }
  },
  methods: {
    normalClick(index, node) {
      this.normalActive = index

      TinyModal.message({ message: `节点 index: ${index}; 节点信息：${JSON.stringify(node)}`, status: 'info' })
    }
  }
}
</script>
