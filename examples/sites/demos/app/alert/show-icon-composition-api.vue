<template>
  <div>
    <tiny-alert description="show-icon 默认值为 true，显示图标"></tiny-alert>
    <tiny-alert :show-icon="false" description="show-icon 设置为 false，不显示图标"></tiny-alert>
  </div>
</template>

<script setup lang="jsx">
import { Alert as TinyAlert } from '@opentiny/vue'
</script>
