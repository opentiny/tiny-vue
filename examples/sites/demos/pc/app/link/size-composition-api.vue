<template>
  <div class="tiny-custom">
    <tiny-link :underline="false">默认链接</tiny-link>
    <br />
    <tiny-link :underline="false" size="medium">默认链接</tiny-link>
    <br />
    <tiny-link :underline="false" :icon="TinyIconEdit">编辑</tiny-link>
    <br />
    <tiny-link :underline="false" size="medium" :icon="TinyIconEdit">编辑</tiny-link>
  </div>
</template>

<script setup>
import { Link as TinyLink } from '@opentiny/vue'
import { iconEdit } from '@opentiny/vue-icon'

const TinyIconEdit = iconEdit()
</script>

<style scoped>
.tiny-custom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
}
.tiny-custom-view,
.tiny-custom-del {
  margin-left: 2px;
}
</style>
