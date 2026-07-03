<template>
  <div>
    <p>示例1：使用 drawLink 完全自定义绘制</p>
    <tiny-flowchart :data="data1" :config="config1" />

    <p>示例2：包含悬停时连线样式的效果</p>
    <div class="example2-wrapper">
      <tiny-flowchart :key="refreshKey2" :data="data2" :config="config2" />
    </div>
  </div>
</template>

<script setup>
import { TinyFlowchart } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'
import { ref, onMounted, onUnmounted } from 'vue'

const { createNode, createLink, createConfig } = TinyFlowchart

// ==================== 示例1：drawLink 完全自定义绘制 ====================
const chartConfig1 = createConfig()
chartConfig1.width = 960
chartConfig1.height = 260
chartConfig1.rows = 4
chartConfig1.cols = 8

// 使用 drawLink 完全接管绘制，不依赖 styleLink
chartConfig1.drawLink = ({ ctx, afterLink }) => {
  const link = afterLink.raw
  const colorMap = { 1: '#12cff8', 2: '#1ff9ff', 3: '#1a1a1a', 4: '#ff4d4f' }

  ctx.strokeStyle = colorMap[link.info.status] || '#999'
  ctx.lineWidth = link.info.status === 2 ? 3 : 2

  if (link.info.style !== 'solid') {
    ctx.setLineDash([4, 4])
  } else {
    ctx.setLineDash([])
  }

  afterLink.p.forEach((p) => {
    const parts = p.split(',')
    const cmd = parts[0]
    const coords = parts.slice(1).map(Number)

    if (cmd === 'm') {
      ctx.moveTo(coords[0], coords[1])
    } else if (cmd === 'l') {
      ctx.lineTo(coords[0], coords[1])
    } else if (cmd === 'a') {
      ctx.arcTo(coords[0], coords[1], coords[2], coords[3], coords[4])
    }
  })
}

const chartData1 = {
  nodes: [
    createNode('a', 1, '已通过', '2024-06-01', [], 1, 1),
    createNode('b', 2, '进行中', '2024-06-02', [], 1, 3),
    createNode('c', 3, '待处理', '', [], 1, 5),
    createNode('d', 4, '已失败', '2024-06-03', [], 1, 7)
  ],
  links: [
    createLink('a', 'b', '0 r2', 1, 'solid'),
    createLink('b', 'c', '0 r2', 2, 'solid'),
    createLink('c', 'd', '0 r2', 3, 'dash')
  ]
}

const data1 = hooks.markRaw(chartData1)
const config1 = hooks.markRaw(chartConfig1)

// ==================== 示例2：styleLink + 外部悬停检测 ====================
const refreshKey2 = ref(0)
const mousePos2 = ref({ x: -1, y: -1 })

const chartConfig2 = createConfig()
chartConfig2.width = 960
chartConfig2.height = 260
chartConfig2.rows = 4
chartConfig2.cols = 8

// 示例2的 styleLink，只查询示例2自己的 canvas
chartConfig2.styleLink = (ctx, afterLink) => {
  const link = afterLink.raw
  const key = `${link.from}-${link.to}`

  // 关键：只查询示例2 wrapper 内的 canvas，避免和示例1冲突
  const canvas = document.querySelector('.example2-wrapper .tiny-flow-chart__canvas')
  if (!canvas) {
    const colorMap = { 1: '#52c41a', 2: '#1890ff', 3: '#d9d9d9', 4: '#ff4d4f' }
    ctx.strokeStyle = colorMap[link.info.status] || '#999'
    ctx.lineWidth = link.info.status === 2 ? 3 : 2
    if (link.info.style !== 'solid') {
      ctx.setLineDash([4, 4])
    } else {
      ctx.setLineDash([])
    }
    return
  }

  const rect = canvas.getBoundingClientRect()
  const mx = mousePos2.value.x - rect.left
  const my = mousePos2.value.y - rect.top

  const nodeY = 97.5
  const nodeX = { a: 180, b: 420, c: 660, d: 900 }
  let isHover = false

  if (Math.abs(my - nodeY) <= 25) {
    if (key === 'a-b' && mx >= nodeX.a && mx <= nodeX.b) isHover = true
    else if (key === 'b-c' && mx >= nodeX.b && mx <= nodeX.c) isHover = true
    else if (key === 'c-d' && mx >= nodeX.c && mx <= nodeX.d) isHover = true
  }

  if (isHover) {
    ctx.setLineDash([])
    ctx.strokeStyle = '#faacff'
    ctx.lineWidth = 8
    ctx.shadowColor = 'rgba(250, 173, 20, 0.6)'
    ctx.shadowBlur = 20
  } else {
    const colorMap = { 1: '#52c41a', 2: '#1890ff', 3: '#d9d9d9', 4: '#ff4d4f' }
    ctx.strokeStyle = colorMap[link.info.status] || '#999'
    ctx.lineWidth = link.info.status === 2 ? 3 : 2
    if (link.info.style !== 'solid') {
      ctx.setLineDash([4, 4])
    } else {
      ctx.setLineDash([])
    }
  }
}

const chartData2 = {
  nodes: [
    createNode('a', 1, '已通过', '2024-06-01', [], 1, 1),
    createNode('b', 2, '进行中', '2024-06-02', [], 1, 3),
    createNode('c', 3, '待处理', '', [], 1, 5),
    createNode('d', 4, '已失败', '2024-06-03', [], 1, 7)
  ],
  links: [
    createLink('a', 'b', '0 r2', 1, 'solid'),
    createLink('b', 'c', '0 r2', 2, 'solid'),
    createLink('c', 'd', '0 r2', 3, 'dash')
  ]
}

const data2 = hooks.markRaw(chartData2)
const config2 = hooks.markRaw(chartConfig2)

// 示例2的悬停检测，完全独立
const onMouseMove2 = (e) => {
  mousePos2.value = { x: e.clientX, y: e.clientY }
}

let timer2 = null
const startHoverLoop2 = () => {
  timer2 = setInterval(() => {
    refreshKey2.value++
  }, 80)
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove2)
  startHoverLoop2()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove2)
  clearInterval(timer2)
})
</script>
