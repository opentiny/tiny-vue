<template>
  <div>
    <tiny-alert size="large" title="通过属性设置自定义 title"></tiny-alert>
    <br />
    <tiny-alert size="large">
      <template #title>通过 slot 设置自定义 title</template>
    </tiny-alert>
    <br />
    <tiny-alert size="large"></tiny-alert>
    <br />
    <tiny-alert size="large" type="success"></tiny-alert>
    <br />
    <tiny-alert size="large" type="error"></tiny-alert>
    <br />
    <tiny-alert size="large" type="warning"></tiny-alert>
  </div>
</template>

<script setup>
import { Alert as TinyAlert } from '@opentiny/vue'
</script>
