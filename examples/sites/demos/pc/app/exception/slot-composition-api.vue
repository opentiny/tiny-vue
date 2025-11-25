<template>
  <tiny-exception type="pagenoperm">
    <template #icon>
      <TinyIconSuccess class="custom-icon" />
    </template>
    <template #content>
      <div class="content">content插槽</div>
      <tiny-button type="primary">自定义按钮</tiny-button>
    </template>
  </tiny-exception>
</template>

<script setup>
import { TinyException, TinyButton } from '@opentiny/vue'
import { IconSuccess } from '@opentiny/vue-icon'

const TinyIconSuccess = IconSuccess()
</script>

<style scoped>
.content {
  padding-bottom: 15px;
  font-size: 16px;
}
.custom-icon {
  width: 50px;
  height: 50px;
}
</style>
