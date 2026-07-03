<template>
  <div>
    <div class="log-panel">
      <div v-for="(log, i) in logs" :key="i" class="log-item">{{ log }}</div>
      <div v-if="logs.length === 0" class="log-empty">点击节点、连线或空白区域查看事件</div>
    </div>
    <tiny-flowchart
      :data="data"
      :config="config"
      @click-node="handleNodeClick"
      @click-link="handleLinkClick"
      @click-blank="handleBlankClick"
    />
  </div>
</template>

<script setup>
import { TinyFlowchart, Modal } from '@opentiny/vue'
import { reactive, ref } from 'vue'

const { createNode, createLink, createConfig } = TinyFlowchart

const config = createConfig()
config.width = 960
config.height = 260

const logs = ref([])

const handleNodeClick = (param, e) => {
  Modal.message({
    status: 'info',
    message: `点击节点: ${param.raw.name} (${param.raw.info.label}) - 状态: ${param.raw.info.status}`
  })
}

const handleLinkClick = (param, e) => {
  Modal.message({
    status: 'info',
    message: `点击连线: ${param.raw.from} → ${param.raw.to} - 样式: ${param.raw.info.style}`
  })
}

const handleBlankClick = (param, e) => {
  Modal.message({
    status: 'info',
    message: `点击空白: 坐标 (${Math.round(e.x)}, ${Math.round(e.y)})`
  })
}

const data = reactive({
  nodes: [
    createNode('a', 1, '步骤 A', '2024-06-01', null, 1, 1),
    createNode('b', 2, '步骤 B', '2024-06-02', null, 1, 3),
    createNode('c', 3, '步骤 C', '', null, 1, 5)
  ],
  links: [createLink('a', 'b', '0 r2', 1, 'solid'), createLink('b', 'c', '0 r2', 2, 'solid')]
})
</script>

<style scoped>
.log-panel {
  margin-bottom: 16px;
  padding: 12px;
  background: #f6f8fa;
  border-radius: 6px;
  max-height: 120px;
  overflow-y: auto;
}
.log-item {
  font-size: 12px;
  color: #333;
  padding: 2px 0;
  border-bottom: 1px solid #eee;
}
.log-empty {
  font-size: 12px;
  color: #999;
  text-align: center;
  padding: 8px 0;
}
</style>
