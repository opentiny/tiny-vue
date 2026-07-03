<template>
  <div>
    <tiny-flowchart :data="data" :config="config">
      <template #icon="{ node, config: cfg }">
        <div
          class="custom-icon"
          :style="{
            width: cfg.iconSize + 'px',
            height: cfg.iconSize + 'px',
            borderRadius: '50%',
            background: cfg.colors[node.info.status] || '#999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '12px'
          }"
        >
          {{ node.info.status === 1 ? '✓' : node.info.status === 2 ? '◉' : '○' }}
        </div>
      </template>

      <template #label="{ node }">
        <div class="custom-label">
          <div class="label-title">{{ node.info.label }}</div>
          <div v-if="node.info.date" class="label-date">{{ node.info.date }}</div>
        </div>
      </template>

      <template #content="{ node, config: cfg }">
        <div class="custom-content">
          <div
            v-for="item in getNodeItems(node.name)"
            :key="item.key"
            class="person-tag"
            :class="{ done: item.status === 1, doing: item.status === 2 }"
          >
            {{ item.name }} - {{ item.comment }}
          </div>
        </div>
      </template>
    </tiny-flowchart>
  </div>
</template>

<script setup>
import { TinyFlowchart } from '@opentiny/vue'
import { reactive } from 'vue'

const { createNode, createLink, createItem, createConfig } = TinyFlowchart

const config = createConfig()
config.width = 960
config.height = 260 // 减小画布高度，避免下方空白
config.rows = 4 // 减少行数，让节点位置更紧凑
config.cols = 8 // 保持列数
config.listWidth = 80
config.listThreshold = 0 // createItem存在，items数组长度大于此值时显示列表,默认值是1。items数组长度等于1，不显示，所以设置成0。
config.listBorderColor = '#e8e8e8'
config.listIconColor = '#bfbfbf'
config.listIconSize = 22
config.headSize = 22

function getNodeItems(nodeName) {
  const node = data.nodes.find((n) => n.name === nodeName)
  return node?.info?.items || []
}

const data = reactive({
  nodes: [
    createNode(
      'step1',
      1,
      '提交申请',
      '2024-06-01',
      [createItem('1', '张三', '申请人', 1, '已提交', '2024-06-01')],
      1,
      1
    ),
    createNode(
      'step2',
      2,
      '主管审批',
      '2024-06-02',
      [createItem('2', '李四', '审批人', 2, '审批中', '2024-06-02')],
      1,
      3
    ),
    createNode('step3', 3, '流程结束', '', null, 1, 5)
  ],
  links: [createLink('step1', 'step2', '0 r2', 1, 'solid'), createLink('step2', 'step3', '0 r2', 2, 'solid')]
})
</script>

<style scoped>
.custom-label {
  text-align: center;
}
.label-title {
  font-size: 13px;
  font-weight: 600;
  color: #333;
}
.label-date {
  font-size: 11px;
  color: #999;
  margin-top: 2px;
}
.custom-content {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}
.person-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  margin: 2px;
  background: #f5f5f5;
  color: #666;
  white-space: nowrap;
}
.person-tag.done {
  background: #f6ffed;
  color: #52c41a;
}
.person-tag.doing {
  background: #e6f7ff;
  color: #1890ff;
}
</style>
