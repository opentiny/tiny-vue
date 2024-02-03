<template>
  <tiny-time-line :data="data" :active="active" @click="click" vertical>
    <template #left="{ slotScope: { name } }">
      <span class="custom-left">
        {{ name }}
      </span>
    </template>
    <template #right="{ slotScope: { time } }">
      <span class="custom-right">
        {{ time }}
      </span>
    </template>
  </tiny-time-line>
</template>

<script setup>
import { ref } from 'vue'
import { TimeLine as TinyTimeLine } from '@opentiny/vue'

const active = ref(1)
const data = ref([
  { name: '已下单', time: '2019-11-11 00:01:30' },
  { name: '运输中', time: '2019-11-12 14:20:15' },
  { name: '已签收', time: '2019-11-14 20:45:50' }
])

function click(index) {
  active.value = index
}
</script>

<style scoped>
.custom-left {
  padding-right: 16px;
  text-align: right;
}

.custom-right {
  margin-left: 15px;
  margin-bottom: 50px;
}
</style>
