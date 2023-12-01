<template>
  <div class="tiny-demo-tag-group-effect">
    <div>深色标签 </div>
    <tiny-tag-group :data="items" effect="dark"> </tiny-tag-group>
    <div>浅色标签 </div>
    <tiny-tag-group :data="items" effect="light"> </tiny-tag-group>
    <div>朴素标签 </div>
    <tiny-tag-group :data="items" effect="plain"> </tiny-tag-group>
  </div>
</template>

<script>
import { TagGroup } from '@opentiny/vue'

export default {
  components: {
    TinyTagGroup: TagGroup
  },
  data() {
    return {
      items: [
        { name: '标签一' },
        { type: 'info', name: '标签二' },
        { type: 'success', name: '标签三' },
        { type: 'warning', name: '标签四' },
        { type: 'danger', name: '标签五' },
        { name: '标签六' }
      ]
    }
  }
}
</script>

<style scoped>
.tiny-demo-tag-group-effect > *:not(:last-child) {
  margin-bottom: 12px;
}
</style>