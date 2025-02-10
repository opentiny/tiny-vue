<template>
  <div class="badge-wrap">
    <tiny-badge :value="value1" is-dot> 小圆点标记 </tiny-badge>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyBadge } from '@opentiny/vue-mobile'

const value1 = ref(2)
</script>

<style>
.badge-wrap {
  padding: 20px;
}
</style>
