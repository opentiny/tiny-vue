<template>
  <div class="tiny-demo-tag-group-size">
    <div>中等标签：medium </div>
    <tiny-tag-group :data="items" size="medium"> </tiny-tag-group>
    <div>小型标签：small </div>
    <tiny-tag-group :data="items" size="small"> </tiny-tag-group>
    <div>超小标签：mini </div>
    <tiny-tag-group :data="items" size="mini"> </tiny-tag-group>
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
        { type: '', name: '标签一' },
        { type: 'info', name: '标签二' },
        { type: 'success', name: '标签三' },
        { type: 'warning', name: '标签四' },
        { type: 'danger', name: '标签五' },
        { type: 'info', name: '标签六' }
      ]
    }
  }
}
</script>

<style scoped>
.tiny-demo-tag-group-size > *:not(:last-child) {
  margin-bottom: 12px;
}
</style>