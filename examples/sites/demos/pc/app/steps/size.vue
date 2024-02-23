<template>
  <div class="demo-steps">
    <h3>单链型步骤条：</h3>
    <p>mini 尺寸</p>
    <tiny-steps vertical line size="mini" :data="data" :active="active" @click="normalClick"></tiny-steps>
    <p>small 尺寸</p>
    <tiny-steps vertical line size="small" :data="data" :active="active" @click="normalClick"></tiny-steps>
    <p>medium 尺寸</p>
    <tiny-steps vertical line size="medium" :data="data" :active="active" @click="normalClick"></tiny-steps>
    <p>large 尺寸</p>
    <tiny-steps vertical line size="large" :data="data" :active="active" @click="normalClick"></tiny-steps>

    <h3 class="title">条形步骤条：</h3>
    <p>medium 尺寸</p>
    <tiny-steps advanced size="medium" :data="data" :active="active" @click="normalClick"></tiny-steps>
    <p>large 尺寸</p>
    <tiny-steps advanced size="large" :data="data" :active="active" @click="normalClick"></tiny-steps>
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
      active: 1,
      data: [
        {
          name: 'Basic Info',
          status: 'done'
        },
        { name: 'BOQ Info', status: 'doing' },
        { name: 'BBQ Info', status: 'error' },
        {
          name: 'Involved Parties',
          status: 'disabled'
        },
        { name: 'Billing', status: '' }
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
.demo-steps h3 {
  font-size: 16px;
  font-weight: bold;
}

.demo-steps .title {
  margin-top: 30px;
}

.demo-steps p {
  text-indent: 20px;
}
</style>
