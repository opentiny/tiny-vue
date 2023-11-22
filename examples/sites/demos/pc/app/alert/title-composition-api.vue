<template>
  <div>
    <tiny-alert size="large" title="通过属性设置自定义 title" description="描述内容"></tiny-alert>
    <br />
    <tiny-alert size="large" description="描述内容">
      <template #title>通过 slot 设置自定义 title</template>
    </tiny-alert>
    <br />
    <tiny-alert size="large" description="描述内容"></tiny-alert>
    <br />
    <tiny-alert size="large" type="success" description="描述内容"></tiny-alert>
    <br />
    <tiny-alert size="large" type="error" description="描述内容"></tiny-alert>
    <br />
    <tiny-alert size="large" type="warning" description="描述内容"></tiny-alert>
  </div>
</template>

<script setup>
import { Alert as TinyAlert } from '@opentiny/vue'
</script>
