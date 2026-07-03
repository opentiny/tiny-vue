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

<script>
import { TinyFlowchart } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'

const { createNode, createLink, createConfig } = TinyFlowchart

export default {
  components: { TinyFlowchart },
  data() {
    // 示例1：初始化配置和数据
    const config1 = createConfig()
    config1.width = 960
    config1.height = 260
    config1.rows = 4
    config1.cols = 8

    config1.drawLink = ({ ctx, afterLink }) => {
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

    const data1 = {
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

    // 示例2：初始化配置和数据
    const config2 = createConfig()
    config2.width = 960
    config2.height = 260
    config2.rows = 4
    config2.cols = 8

    const self = this
    config2.styleLink = function (ctx, afterLink) {
      const link = afterLink.raw
      const key = `${link.from}-${link.to}`

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
      const mx = self.mousePos2.x - rect.left
      const my = self.mousePos2.y - rect.top

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

    const data2 = {
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

    return {
      refreshKey2: 0,
      mousePos2: { x: -1, y: -1 },
      data1: hooks.markRaw(data1),
      config1: hooks.markRaw(config1),
      data2: hooks.markRaw(data2),
      config2: hooks.markRaw(config2),
      timer2: null
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.onMouseMove2)
    this.startHoverLoop2()
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove2)
    clearInterval(this.timer2)
  },
  methods: {
    onMouseMove2(e) {
      this.mousePos2 = { x: e.clientX, y: e.clientY }
    },
    startHoverLoop2() {
      this.timer2 = setInterval(() => {
        this.refreshKey2++
      }, 80)
    }
  }
}
</script>
