<template>
  <div class="tiny-tag-demo">
    <tiny-tag color="default" text="默认" />
    <tiny-tag color="default"> 默认默认默认默认默认默认默认默认</tiny-tag>
  </div>
</template>

<script setup>
import { TinyTag } from '@opentiny/vue-mobile'
</script>

<style>
.tiny-tag-demo {
  padding: 10px;
}

.tiny-mobile-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
