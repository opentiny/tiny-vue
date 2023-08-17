<template>
  <div>
    <tiny-alert size="large" title="通过属性设置自定义 title"></tiny-alert>
    <br />
    <tiny-alert size="large">
      <template #title>通过 slot 设置自定义 title</template>
    </tiny-alert>
  </div>
</template>

<script setup lang="jsx">
import { Alert as TinyAlert } from '@opentiny/vue'
</script>
