<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="dataSource" :maxlength="maxlength" @exceed="handleExceed" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TinySearchBox from '@opentiny/vue-search-box'

const tags = ref([])
const maxlength = ref(8)
const dataSource = ref([
  {
    label: '名称',
    field: 'testName',
    replace: true,
    options: [
      {
        label: '不能超过8个字符'
      }
    ]
  }
])

function handleExceed(number) {
  alert(`不能超过${number}个字符`)
}
</script>
