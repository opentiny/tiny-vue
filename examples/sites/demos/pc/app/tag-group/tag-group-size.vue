<template>
  <div class="tiny-demo-tag-group-size">
    <div>大尺寸标签：medium</div>
    <tiny-tag-group :data="items" size="medium"> </tiny-tag-group>
    <div>默认标签：small</div>
    <tiny-tag-group :data="items" size="small"> </tiny-tag-group>
    <div>超小标签：mini</div>
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
        { type: 'info', name: '标签' },
        { type: 'success', name: '标签' },
        { type: 'warning', name: '标签' },
        { type: 'danger', name: '标签' },
        { name: '标签' }
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
