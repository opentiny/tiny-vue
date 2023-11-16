<template>
  <div class="tiny-tag-demo">
    <tiny-tag color="rgba(82,196,26,0.8)" hit>自定义背景色</tiny-tag>
    <tiny-tag type="success" hit>标签二</tiny-tag>
    <tiny-tag type="info" hit>标签三</tiny-tag>
    <tiny-tag type="warning" hit>标签四</tiny-tag>
    <tiny-tag type="danger" hit>标签五</tiny-tag>
  </div>
</template>

<script lang="jsx">
import { Tag } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  }
}
</script>
