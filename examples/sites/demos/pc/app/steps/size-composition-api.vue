<template>
  <div class="demo-steps">
    <h3>单链型步骤条：</h3>
    <br /><br />
    <p>mini 尺寸</p>
    <br />
    <tiny-steps vertical line size="mini" :data="data" :active="active" @click="normalClick"></tiny-steps>
    <br /><br />
    <p>small 尺寸</p>
    <br />
    <tiny-steps vertical line size="small" :data="data" :active="active" @click="normalClick"></tiny-steps>
    <br /><br />
    <p>medium 尺寸</p>
    <br />
    <tiny-steps vertical line size="medium" :data="data" :active="active" @click="normalClick"></tiny-steps>
    <br /><br />
    <p>large 尺寸</p>
    <br />
    <tiny-steps vertical line size="large" :data="data" :active="active" @click="normalClick"></tiny-steps>
    <br />
    <br /><br />

    <h3 class="title">条形步骤条：</h3>
    <br /><br />
    <p>medium 尺寸</p>
    <br />
    <tiny-steps vertical advanced size="medium" :data="data" :active="active" @click="normalClick"></tiny-steps>
    <br /><br />
    <p>large 尺寸</p>
    <br />
    <tiny-steps vertical advanced size="large" :data="data" :active="active" @click="normalClick"></tiny-steps>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Steps as TinySteps } from '@opentiny/vue'

const active = ref(0)
const data = ref([
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
])

const normalClick = (index, node) => {
  active.value = index
}
</script>

<style scoped>
.demo-steps h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
}

.demo-steps .title {
  margin-top: 30px;
}

.demo-steps p {
  text-indent: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
