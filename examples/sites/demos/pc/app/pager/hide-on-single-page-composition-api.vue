<template>
  <div>
    是否隐藏：<tiny-switch v-model="isHide"></tiny-switch>
    <tiny-pager :hide-on-single-page="isHide" :total="1"></tiny-pager>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyPager, TinySwitch } from '@opentiny/vue'

const isHide = ref(false)
</script>
