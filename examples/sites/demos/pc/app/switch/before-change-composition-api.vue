<template>
  <tiny-switch v-model="value" :before-change="beforeChange"></tiny-switch>
</template>

<script setup>
import { ref } from 'vue'
import { TinySwitch, TinyModal } from '@opentiny/vue'

const value = ref(false)

function beforeChange(done) {
  TinyModal.message({
    message: '开关切换功能已被拦截，必须调用 done 方法才能执行开关状态的切换，2s 后将自动调用 done 方法切换开关状态',
    status: 'info'
  })
  setTimeout(done, 2000)
}
</script>
