<template>
  <tiny-mind-map
    ref="mindmap"
    class="mindmap"
    @create="onCreate"
    @operation="onOperation"
    @select-node="onSelectNode"
    @select-new-node="onSelectNewNode"
    @select-nodes="onSelectNodes"
    @unselect-node="onUnselectNode"
    @unselect-nodes="onUnselectNodes"
    @expand-node="onExpandNode"
    v-model="exampleData"
  />
</template>

<script setup>
import { Notify, MindMap as TinyMindMap } from '@opentiny/vue'
import { ref } from 'vue'

const exmpleData = ref({
  'nodeData': {
    'id': 'c9ee6647385c42de',
    'topic': '前端修仙指南',
    'root': true,
    'children': [
      {
        'topic': 'Handfirst html and css',
        'id': 'c9ee977189f3b1f1'
      },
      {
        'topic': '高程',
        'id': 'c9ee9a4e8f3f83c5'
      },
      {
        'topic': 'Javascript权威指南',
        'id': 'c9ee9b8e87958282'
      },
      {
        'topic': '算法 第四版',
        'id': 'c9eea19c874d331f'
      },
      {
        'topic': '大话数据结构',
        'id': 'c9eea8d788441a71'
      },
      {
        'topic': '算法导论',
        'id': 'c9eeac4c84aaba37'
      },
      {
        'topic': '编译原理',
        'id': 'c9eeadee881cf229'
      },
      {
        'topic': '宫水三叶的刷题日记',
        'id': 'c9eec88a85d8ff76'
      }
    ]
  }
})
const onCreate = () => {
  Notify({
    type: 'info',
    message: '触发事件create',
    duration: 1000
  })
}
const onOperation = () => {
  Notify({
    type: 'info',
    message: '触发事件operation',
    duration: 1000
  })
}
const onSelectNode = () => {
  Notify({
    type: 'info',
    message: '触发事件selectNode',
    duration: 1000
  })
}
const onSelectNewNode = () => {
  Notify({
    type: 'info',
    message: '触发事件selectNewNode',
    duration: 1000
  })
}
const onSelectNodes = () => {
  Notify({
    type: 'info',
    message: '触发事件selectNodes',
    duration: 1000
  })
}
const onUnselectNode = () => {
  Notify({
    type: 'info',
    message: '触发事件unselectNode',
    duration: 1000
  })
}
const onUnselectNodes = () => {
  Notify({
    type: 'info',
    message: '触发事件unselectNodes',
    duration: 1000
  })
}
const onExpandNode = () => {
  Notify({
    type: 'info',
    message: '触发事件expandNode',
    duration: 1000
  })
}
</script>

<style scoped>
.mindmap {
  width: 100%;
  height: 300px;
}
</style>
