<template>
  <tiny-time-line :data="data" :active="active" :show-divider="true" text-position="right" @click="normalClick">
    <template #active-node-desc>
      <div class="active-node-desc">{{ data[active].desc }}</div>
    </template>
  </tiny-time-line>
</template>

<script>
import { TimeLine } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine: TimeLine
  },
  data() {
    return {
      active: 0,
      data: [
        { name: 'Basic Info.', desc: '基本信息必填' },
        { name: 'BOQ Info', desc: '第二步信息' },
        { name: 'Involved Parties', desc: '第三步信息' },
        { name: 'Billing', desc: '最终步骤信息' }
      ]
    }
  },
  methods: {
    normalClick(index, node) {
      this.active = index
    }
  }
}
</script>

<style scoped>
.active-node-desc {
  width: 100px;
  background-color: #fafafa;
  font-size: 12px;
}
</style>
