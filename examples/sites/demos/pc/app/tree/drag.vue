<template>
  <div>
    <div class="tip">请打开开发者控制台，查看打印的事件消息</div>
    <div class="option-row">
      <span> 监听事件：</span>
      <tiny-radio-group v-model="listenEvent">
        <tiny-radio label="node-drop">node-drop</tiny-radio>
        <tiny-radio label="node-drag-start">node-drag-start</tiny-radio>
        <tiny-radio label="node-drag-enter">node-drag-enter</tiny-radio>
        <tiny-radio label="node-drag-over">node-drag-over</tiny-radio>
        <tiny-radio label="node-drag-leave">node-drag-leave</tiny-radio>
        <tiny-radio label="node-drag-end">node-drag-end</tiny-radio>
      </tiny-radio-group>
    </div>
    <tiny-tree
      :data="data"
      draggable
      :allow-drag="allowDrag"
      :allow-drop="allowDrop"
      @node-drop="nodeDrop"
      @node-drag-start="dragStart"
      @node-drag-enter="dragEnter"
      @node-drag-over="dragOver"
      @node-drag-leave="dragLeave"
      @node-drag-end="dragEnd"
      default-expand-all
    ></tiny-tree>
  </div>
</template>

<script lang="jsx">
import { Tree, RadioGroup, Radio } from '@opentiny/vue'

export default {
  components: {
    TinyTree: Tree,
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup
  },
  data() {
    return {
      listenEvent: 'node-drop',
      data: [
        {
          id: '1',
          label: '数据 1',
          children: [{ id: '1-1', label: '数据 1-1', children: [{ id: '1-1-1', label: '数据 1-1-1' }] }]
        },
        {
          id: '2',
          label: '数据 2',
          children: [
            { id: '2-1', label: '数据 2-1' },
            { id: '2-2', label: '数据 2-2' }
          ]
        },
        {
          id: '3',
          label: '数据 3(不可拖/不可放)',
          children: [{ id: '3-1', label: '数据 3-1' }]
        }
      ]
    }
  },
  methods: {
    // 不允许 数据 3 参与拖动
    allowDrag(node) {
      return !node.data.id.startsWith('3')
    },
    allowDrop(srcNode, targetNode, type) {
      return !targetNode.data.id.startsWith('3')
    },
    nodeDrop(srcNode, targetNode, dropType, event) {
      this.listenEvent == 'node-drop' && console.log('nodeDrop 事件参数：', { srcNode, targetNode, dropType, event })
    },
    dragStart(node, event) {
      this.listenEvent == 'node-drag-start' && console.log('dragStart 事件参数：', { node, event })
    },
    dragEnter(srcNode, targetNode, event) {
      this.listenEvent == 'node-drag-enter' && console.log('dragEnter 事件参数：', { srcNode, targetNode, event })
    },
    dragOver(srcNode, targetNode, event) {
      this.listenEvent == 'node-drag-over' && console.log('dragOver 事件参数：', { srcNode, targetNode, event })
    },
    dragLeave(srcNode, targetNode, event) {
      this.listenEvent == 'node-drag-leave' && console.log('dragLeave 事件参数：', { srcNode, targetNode, event })
    },
    dragEnd(srcNode, targetNode, dropType, event) {
      this.listenEvent == 'node-drag-end' && console.log('dragEnd 事件参数：', { srcNode, targetNode, dropType, event })
    }
  }
}
</script>

<style scoped>
.option-row {
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}
.tiny-radio-group {
  flex-wrap: wrap;
  height: 90px;
}
.option-row > span {
  display: inline-block;
  font-size: 16px;
  width: 100px;
  flex-shrink: 0;
}
.tip {
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 16px;
}
</style>
