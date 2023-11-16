<template>
  <tiny-time-line :active="active" :show-divider="true" text-position="right" space="280px">
    <tiny-timeline-item v-for="(item, i) in data" :node="item" @click="normalClick(i)">
      <template #description>
        <div class="my-description">
          {{ item.description }}
        </div>
      </template>
    </tiny-timeline-item>
  </tiny-time-line>
</template>

<script setup>
import { ref } from 'vue'
import { TimeLine as TinyTimeLine } from '@opentiny/vue'

const active = ref(0)
const data = ref([
  { name: 'Basic Info.', description: '基本信息必填' },
  { name: 'BOQ Info', description: '第二步信息' },
  { name: 'Involved Parties', description: '第三步信息' },
  { name: 'Billing', description: '最终步骤信息' }
])

const normalClick = (index, node) => {
  active.value = index
}
</script>

<style scoped>
.my-description {
  width: 100px;
  background-color: #fafafa;
  font-size: 12px;
}
</style>
