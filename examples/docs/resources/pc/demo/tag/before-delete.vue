<template>
  <div>
    <p>
      <tiny-switch v-model="beforeDeleteValue"></tiny-switch>
      before-change 返回 {{ beforeDeleteValue }} 时 {{ beforeDeleteText }}
      <br>
    </p>
    <tiny-tag v-for="tag in tags" :key="'tiny-tag1-' + tag.name" closable :type="tag.type" @close="close(tag)" :before-delete="beforeDelete">{{ tag.name }}</tiny-tag>
  </div>
</template>

<script>
import { Tag, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag,
    TinySwitch: Switch
  },
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      beforeDeleteValue: false
    }
  },
  computed: {
    beforeDeleteText() {
      return this.beforeDeleteValue ? '可执行 close 事件，点击删除图标可以删除标签' : '将拦截 close 事件的执行，点击删除图标将无法删除标签'
    }
  },
  methods: {
    close(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    },
    beforeDelete(done) {
      setTimeout(() => {
        this.beforeDeleteValue && done()
      })
    }
  }
}
</script>

<style scoped>
.tiny-tag + .tiny-tag {
  margin-left: 10px;
}
</style>
