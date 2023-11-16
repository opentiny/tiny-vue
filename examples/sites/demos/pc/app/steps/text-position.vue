<template>
  <tiny-time-line :data="data" :active="normalActive" text-position="right" @click="normalClick"> </tiny-time-line>
</template>

<script>
import { TimeLine, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      normalActive: 0,
      data: [
        {
          name: 'Basic Info.'
        },
        {
          name: 'AAAAA'
        },
        {
          name: 'Involved Parties',
          error: true
        },
        {
          name: 'Billing',
          disabled: true
        }
      ],
      normalActive: 0
    }
  },
  methods: {
    normalClick(index, node) {
      this.normalActive = index

      Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
    }
  }
}
</script>

<style>
code {
  padding: 4px;
  background-color: var(--lightless);
}
</style>
