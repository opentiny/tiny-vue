<template>
  <div class="tiny-tag-demo">
    <tiny-tag color="default" text=""> 默认 </tiny-tag>
    <tiny-tag color="red" text="红色" />
    <tiny-tag color="blue" text="蓝色"> </tiny-tag>
    <tiny-tag color="yellow" text="黄色"> </tiny-tag>
    <tiny-tag color="green" text="绿色"> </tiny-tag>
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
