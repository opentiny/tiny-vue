<template>
  <p>默认内容位于序号下方</p>
  <tiny-time-line :data="data" :active="normalActive" type="normal" @click="normalClick">
  </tiny-time-line>

  <p>设置<code>textPosition</code>为<code>right</code>时， 内容位于序号右边。</p>
  <tiny-time-line :data="data" :active="normalActive1" type="normal" text-position="right" @click="normalClick1">
  </tiny-time-line>
</template>

<script lang="jsx">
import {
  TimeLine,
  Modal
} from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      normalActive: 0,
      data: [{
        name: 'Basic Info.'
      }, {
        name: 'AAAAA'
      }, {
        name: 'Involved Parties',
        error: true
      }, {
        name: 'Billing',
        disabled: true
      }],
      normalActive1: 0,
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

<style>
code {
  padding: 4px;
  background-color: var(--lightless);
}
</style>
