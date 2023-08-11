<template>
  <p>mini尺寸:</p>
  <tiny-time-line
    :data="data"
    :active="normalActive"
    type="normal"
    size="mini"
    text-position="right"
    @click="normalClick"
  >
  </tiny-time-line>

  <p>默认尺寸:</p>
  <tiny-time-line :data="data" :active="normalActive" type="normal" text-position="right" @click="normalClick">
  </tiny-time-line>
</template>

<script lang="ts">
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
          name: 'Basic Info. sdfsdjgh jiojfoisjlksdfks sdfksdljk sjviosdjvii bin sfdihsdi tin sdfsdsd '
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
      normalActive1: 0
    }
  },
  methods: {
    normalClick(index, node) {
      this.normalActive = index

      Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
    },
    normalClick1(index, node) {
      this.normalActive1 = index

      Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
    }
  }
}
</script>
