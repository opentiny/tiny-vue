<template>
  <div>
    <p>示例1：卡片式分支流程</p>
    <tiny-flowchart :data="chartData1" :config="chartConfig1" @click-node="onClickNode1" @click-link="onClickLink1">
      <template #icon="{ afterNode }">
        <div class="icon-anchor">
          <div v-if="afterNode.raw.name === '0'" class="node-circle node-start">开始</div>
          <div v-else-if="afterNode.raw.name === '6'" class="node-circle node-end">✓</div>
          <div
            v-else
            class="node-card"
            :class="{
              'card-blue': afterNode.raw.info.status === 2,
              'card-red': afterNode.raw.info.status === 4,
              'card-gray': afterNode.raw.info.status === 3
            }"
          >
            <div class="card-title" :title="afterNode.raw.info.label">{{ afterNode.raw.info.label }}</div>
            <div class="card-sub" :title="afterNode.raw.info.date">{{ afterNode.raw.info.date }}</div>
          </div>
        </div>
      </template>
      <template #label>
        <span style="display: none"></span>
      </template>
    </tiny-flowchart>

    <p>示例2：标准网格路径流程</p>
    <tiny-flowchart :data="chartData2" :config="chartConfig2" />
  </div>
</template>

<script>
import { TinyFlowchart } from '@opentiny/vue'
import { hooks } from '@opentiny/vue-common'

const { createNode, createLink, createConfig } = TinyFlowchart

export default {
  components: { TinyFlowchart },
  data() {
    // ==================== 示例1：卡片式分支流程 ====================
    const config1 = createConfig()
    config1.width = 860
    config1.height = 480
    config1.rows = 6
    config1.cols = 8
    config1.labelSpacing = 0
    config1.labelHeight = 1

    config1.styleLink = (ctx, afterLink) => {
      const colors = { 1: '#52c41a', 2: '#1890ff', 3: '#bfbfbf', 4: '#ff4d4f' }
      ctx.strokeStyle = colors[afterLink.raw.info.status] || '#999'
      ctx.lineWidth = 2
      if (afterLink.raw.info.style !== 'solid') {
        ctx.setLineDash([4, 4])
      }
    }

    const data1 = {
      nodes: [
        createNode('0', 1, '开始', '', null, 0, 3),
        createNode('1', 1, '申请人', '张三', null, 1, 3),
        createNode('2', 1, '制单会计', '协同：张三、张四、张五', null, 2, 3),
        createNode('3', 2, '应付会计', '张四 0035837', null, 3, 1),
        createNode('4', 4, '应付会计', '张四 0035837', null, 3, 5),
        createNode('5', 3, '复核会计', '自定义内容-5', null, 4, 3),
        createNode('6', 1, '结束', '', null, 5, 3)
      ],
      links: [
        createLink('0', '1', '', 1, 'solid'),
        createLink('1', '2', '', 1, 'solid'),
        createLink('2', '3', '0 b1 l2', 1, 'solid'),
        createLink('2', '4', '0 b1 r2', 1, 'solid'),
        createLink('3', '5', '0 b1 r2', 3, 'solid'),
        createLink('4', '5', '0 b1 l2', 3, 'solid'),
        createLink('5', '6', '', 3, 'dash')
      ]
    }

    // ==================== 示例2：标准网格路径流程 ====================
    const config2 = createConfig()
    config2.width = 960
    config2.height = 470
    config2.rows = 10
    config2.cols = 10

    const data2 = {
      nodes: [
        createNode('start', 1, '提交报销', '2024-06-01', null, 2, 2),
        createNode('check', 2, '金额审核', '2024-06-02', null, 4, 2),
        createNode('pass', 1, '直接通过', '2024-06-03', null, 6, 1),
        createNode('extra', 2, '额外审批', '2024-06-03', null, 6, 3),
        createNode('end', 1, '流程结束', '2024-06-04', null, 8, 2)
      ],
      links: [
        createLink('start', 'check', '0 b2', 1, 'solid'),
        createLink('check', 'pass', '0 b1 c l1 c b1', 1, 'solid'),
        createLink('check', 'extra', '0 b1 c r1 c b1', 2, 'dashed'),
        createLink('pass', 'end', '0 b1 c r1 c b1', 1, 'solid'),
        createLink('extra', 'end', '0 b1 c l1 c b1', 2, 'solid')
      ]
    }

    return {
      chartData1: hooks.markRaw(data1),
      chartConfig1: hooks.markRaw(config1),
      chartData2: hooks.markRaw(data2),
      chartConfig2: hooks.markRaw(config2)
    }
  },
  methods: {
    onClickNode1(afterNode) {
      console.log('示例1点击节点:', afterNode.raw.info.label)
    },
    onClickLink1(afterLink) {
      console.log('示例1点击连线:', afterLink.raw.from, '→', afterLink.raw.to)
    }
  }
}
</script>

<style scoped>
/* 示例1样式 */
.icon-anchor {
  position: relative;
  width: 1px;
  height: 1px;
}
.node-circle {
  position: absolute;
  left: -12px;
  top: -24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.node-start {
  border: 2px solid #52c41a;
  background: #fff;
  color: #333;
}
.node-end {
  background: #52c41a;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
}
.node-card {
  position: absolute;
  left: -70px;
  top: -28px;
  width: 160px;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background: #fff;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
}
.card-blue {
  border-color: #1890ff;
  background: #e6f7ff;
}
.card-red {
  border-color: #ff4d4f;
  background: #fff1f0;
}
.card-gray {
  border-color: #bfbfbf;
  background: #f5f5f5;
}
.card-title {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
}
.card-sub {
  font-size: 12px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  margin-top: 4px;
}
</style>
