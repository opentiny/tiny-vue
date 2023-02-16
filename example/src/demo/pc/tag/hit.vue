<template>
  <div>
    <tiny-tag :hit="true">标签一</tiny-tag>
    <tiny-tag type="success" :hit="true">标签二</tiny-tag>
    <tiny-tag type="info" :hit="true">标签三</tiny-tag>
    <tiny-tag type="warning" :hit="true">标签四</tiny-tag>
    <tiny-tag type="danger" :hit="true">标签五</tiny-tag>
  </div>
</template>

<script>
import { Tag } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  }
}
</script>
