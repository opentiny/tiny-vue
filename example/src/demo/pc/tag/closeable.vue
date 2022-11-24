<template>
  <div>
    <tiny-tag
      v-for="tag in tags"
      :key="'tiny-tag1-' + tag.name"
      closable
      :type="tag.type"
      @close="handleClose1(tag)"
      >{{ tag.name }}</tiny-tag
    >
  </div>
</template>

<script>
import { Tag } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  },
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  methods: {
    handleClose1(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    }
  }
}
</script>

<style scoped>
.tiny-tag + .tiny-tag {
  margin-left: 10px;
}
</style>
