<template>
  <div class="tiny-tag-demo">
    <tiny-tag v-for="tag in tags" :key="'tiny-tag1-' + tag.name" closable :type="tag.type" @click="handleClick">
      {{ tag.name }}
    </tiny-tag>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tag as TinyTag, Modal } from '@opentiny/vue'

const tags = ref([
  { name: '标签一', type: '' },
  { name: '标签二', type: 'success' },
  { name: '标签三', type: 'info' },
  { name: '标签四', type: 'warning' },
  { name: '标签五', type: 'danger' }
])

function handleClick() {
  Modal.message('click 事件')
}
</script>
