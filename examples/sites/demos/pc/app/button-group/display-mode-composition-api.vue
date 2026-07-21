<template>
  <div>
    <!-- 默认模式 -->
    <tiny-button-group :data="groupData" v-model="checkedVal" />
    <br />
    <br />

    <!-- 圆角合并模式 -->
    <tiny-button-group :data="groupData" v-model="checkedVal" display-mode="merged" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyButtonGroup } from '@opentiny/vue'

const checkedVal = ref('Button1')
const groupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' }
])
</script>
