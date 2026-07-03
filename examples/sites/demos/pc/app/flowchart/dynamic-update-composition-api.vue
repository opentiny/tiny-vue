<template>
  <div>
    <div class="toolbar">
      <button @click="approve">审批通过</button>
      <button @click="reject">审批驳回</button>
      <button @click="reset">重置流程</button>
    </div>
    <tiny-flowchart :data="data" :config="config" :key="chartKey">
      <template #content="{ node, config: cfg }">
        <div
          v-if="node.info.items && node.info.items.length >= cfg.listThreshold"
          class="dynamic-person-list"
          :style="{ width: cfg.listWidth + 'px' }"
        >
          <div v-for="item in node.info.items" :key="item.key" class="dynamic-person-item">
            <div class="dynamic-person-name">{{ item.name }}</div>
            <div class="dynamic-person-comment" :style="{ color: cfg.colors[item.status] }">{{ item.comment }}</div>
          </div>
        </div>
      </template>
    </tiny-flowchart>
  </div>
</template>

<script setup>
import { TinyFlowchart } from '@opentiny/vue'
import { reactive, ref } from 'vue'

const { createNode, createLink, createItem, createConfig } = TinyFlowchart

const config = createConfig()
config.width = 960
config.height = 260
config.rows = 4
config.cols = 8
config.delay = 15
config.listThreshold = 0 // createItem存在，items数组长度大于此值时显示列表,默认值是1。items数组长度等于1，不显示，所以设置成0。

const currentStep = ref(0)
const chartKey = ref(0)

const initialNodes = [
  createNode(
    'apply',
    2,
    '提交申请',
    '2024-06-01',
    [createItem('1', '张三', '申请人', 1, '已提交', '2024-06-01')],
    1,
    1
  ),
  createNode('dept', 3, '部门审批', '', [createItem('2', '李四', '经理', 3, '待审批', '')], 1, 3),
  createNode('finance', 3, '财务审批', '', [createItem('3', '王五', '财务', 3, '待审批', '')], 1, 5),
  createNode('done', 3, '流程完成', '', null, 1, 7)
]

const initialLinks = [
  createLink('apply', 'dept', '0 r2', 3, 'solid'),
  createLink('dept', 'finance', '0 r2', 3, 'solid'),
  createLink('finance', 'done', '0 r2', 3, 'solid')
]

const data = reactive({
  nodes: JSON.parse(JSON.stringify(initialNodes)),
  links: JSON.parse(JSON.stringify(initialLinks))
})

const approve = () => {
  if (currentStep.value >= data.nodes.length - 1) return
  const curr = data.nodes[currentStep.value]
  curr.info.status = 1
  if (curr.info.items) {
    curr.info.items.forEach((it) => {
      it.status = 1
      it.comment = '已通过'
      it.date = new Date().toISOString().split('T')[0]
    })
  }
  if (currentStep.value < data.links.length) {
    // 替换整个 links 数组，确保 Vue 检测到变化并重新渲染连线
    const links = [...data.links]
    links[currentStep.value] = { ...links[currentStep.value], info: { ...links[currentStep.value].info, status: 1 } }
    data.links = links
    chartKey.value++
  }
  currentStep.value++
  if (currentStep.value < data.nodes.length) {
    const next = data.nodes[currentStep.value]
    next.info.status = 2
    if (next.info.items) {
      next.info.items.forEach((it) => {
        it.status = 2
        it.comment = '审批中'
      })
    }
  }
}

const reject = () => {
  if (currentStep.value >= data.nodes.length - 1) return
  const curr = data.nodes[currentStep.value]
  curr.info.status = 4
  if (curr.info.items) {
    curr.info.items.forEach((it) => {
      it.status = 4
      it.comment = '已驳回'
    })
  }
  if (currentStep.value < data.links.length) {
    // 替换整个 links 数组，确保 Vue 检测到变化并重新渲染连线
    const links = [...data.links]
    links[currentStep.value] = { ...links[currentStep.value], info: { ...links[currentStep.value].info, status: 4 } }
    data.links = links
    chartKey.value++
  }
}

const reset = () => {
  currentStep.value = 0
  // 使用 Object.assign 确保 Vue 3 reactive 系统能检测到变化
  Object.assign(data, {
    nodes: JSON.parse(JSON.stringify(initialNodes)),
    links: JSON.parse(JSON.stringify(initialLinks))
  })
  chartKey.value++
}
</script>

<style scoped>
.toolbar {
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
}
.toolbar button {
  padding: 6px 16px;
  border: 1px solid #d9d9d9;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.toolbar button:hover {
  border-color: #1890ff;
  color: #1890ff;
}
.dynamic-person-list {
  position: absolute;
  bottom: 10px;
  left: 60%;
  transform: translateX(-50%);
  min-width: 80px;
  background: #fff;
  border-radius: 8px;
  padding: 8px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  z-index: 10;
}
.dynamic-person-item {
  padding: 6px 16px;
  text-align: center;
  transition: background 0.2s;
}
.dynamic-person-item:hover {
  background: #fafafa;
}
.dynamic-person-item:not(:last-child) {
  border-bottom: 1px solid #f5f5f5;
}
.dynamic-person-name {
  font-size: 13px;
  font-weight: 600;
  color: #262626;
}
.dynamic-person-comment {
  display: inline-block;
  margin-top: 4px;
  padding: 1px 8px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 500;
}
</style>
