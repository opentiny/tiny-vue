<template>
  <div class="content">
    <tiny-steps
      :data="stepsData"
      :active="active"
      name-field="reName"
      count-field="reCount"
      status-field="reStatus"
      @click="normalClick"
    ></tiny-steps>
  </div>
</template>

<script lang="jsx">
import { Steps, Modal } from '@opentiny/vue'

export default {
  components: {
    TinySteps: Steps
  },
  data() {
    return {
      active: 1,
      stepsData: [
        {
          reName: '已下单',
          reCount: 0,
          reStatus: 'done'
        },
        {
          reName: '运输中',
          reCount: 1,
          reStatus: 'done'
        },
        {
          reName: '已签收',
          reCount: 0,
          reStatus: 'doing'
        }
      ]
    }
  },
  methods: {
    normalClick(index, node) {
      this.active = index

      Modal.message(`节点index: ${index}; 节点信息: ${JSON.stringify(node)}.`)
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
  max-width: 50%;
  min-width: 700px;
}
</style>
