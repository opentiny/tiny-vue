<template>
  <div>
    <tiny-mind-map
      ref="mindmap"
      class="demo-mind-map-event"
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
  </div>
</template>

<script>
import { MindMap, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyMindMap: MindMap
  },
  data() {
    return {
      exampleData: {
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
      },
      loading: false
    }
  },
  methods: {
    onCreate() {
      Modal.message({ message: 'create 事件触发了', status: 'info' })
    },
    onOperation() {
      Modal.message({ message: 'operation 事件触发了', status: 'info' })
    },
    onSelectNode() {
      Modal.message({ message: 'selectNode 事件触发了', status: 'info' })
    },
    onSelectNewNode() {
      Modal.message({ message: 'selectNewNode 事件触发了', status: 'info' })
    },
    onSelectNodes() {
      Modal.message({ message: 'selectNodes 事件触发了', status: 'info' })
    },
    onUnselectNode() {
      Modal.message({ message: 'unselectNode 事件触发了', status: 'info' })
    },
    onUnselectNodes() {
      Modal.message({ message: 'unselectNodes 事件触发了', status: 'info' })
    },
    onExpandNode() {
      Modal.message({ message: 'expandNode 事件触发了', status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-mind-map-event {
  width: 100%;
  height: 400px;
}
</style>
