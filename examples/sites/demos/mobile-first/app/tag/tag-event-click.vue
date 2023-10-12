<template>
  <div class="demo-tag-event-click">
    <tiny-tag v-for="tag in tags" :key="'tiny-tag1-' + tag.name" closable :type="tag.type" @click="handleClick">
      {{ tag.name }}
    </tiny-tag>
  </div>
</template>

<script>
import { Tag, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  },
  data() {
    return {
      tags: [
        { type: 'success', name: '标签一' },
        { type: 'warning', name: '标签二' },
        { type: 'alerting', name: '标签三' },
        { type: 'error', name: '标签四' },
        { type: 'info', name: '标签五' },
        { type: 'default', name: '标签六' }
      ]
    }
  },
  methods: {
    handleClick() {
      Modal.message('click 事件')
    }
  }
}
</script>

<style scoped>
.demo-tag-event-click .tiny-tag + .tiny-tag {
  margin-left: 10px;
}
</style>
