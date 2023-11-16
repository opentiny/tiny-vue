<template>
  <div>
    是否隐藏：<tiny-switch v-model="isHide"></tiny-switch>
    <tiny-pager :hide-on-single-page="isHide" layout="prev, pager, next" :total="1"></tiny-pager>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Pager as TinyPager, Switch as TinySwitch } from '@opentiny/vue'

const isHide = ref(false)
</script>
