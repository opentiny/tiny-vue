<template>
  <div class="tiny-demo">
    <tiny-flowchart
      ref="chart"
      :data="chartData"
      :config="chartConfig"
      @click-node="onClickNode"
      @click-link="onClickLink"
      @click-blank="onClickBlank"
    >
      <!-- content 插槽：下拉形式展示，收起时显示紧凑视图，点击展开显示表单列表 -->
      <template #content="params">
        <tiny-popover
          placement="bottom-start"
          trigger="manual"
          width="220"
          popper-class="flowchart-content-popover"
          :visible-arrow="false"
          :model-value="params.dropdowns[params.node.name]"
          @update:model-value="params.dropdowns[params.node.name] = $event"
        >
          <template #default>
            <div class="flowchart-content-slot">
              <div v-for="(item, i) in params.node.info.items" :key="item.key || i" class="content-item">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-role">{{ item.role }}</span>
                <span class="item-status">{{ item.status }}</span>
              </div>
            </div>
          </template>
          <template #reference>
            <div
              class="flowchart-content-trigger"
              :style="{ borderColor: params.config.listBorderColor }"
              @click.stop="params.dropdowns[params.node.name] = !params.dropdowns[params.node.name]"
            >
              <span class="trigger-text">处理人({{ params.node.info.items.length }})</span>
              <component :is="params.dropdowns[params.node.name] ? IconUp : IconDown" class="trigger-icon" />
            </div>
          </template>
        </tiny-popover>
      </template>
    </tiny-flowchart>
  </div>
</template>

<script>
import { TinyModal, TinyPopover, TinyFlowchart } from '@opentiny/vue'
import { iconChevronDown, iconChevronUp } from '@opentiny/vue-icon'
import { hooks } from '@opentiny/vue-common'

const { createNode, createLink, createItem, createConfig } = TinyFlowchart

const IconDown = iconChevronDown()
const IconUp = iconChevronUp()

const handlers = [
  createItem('WX100001', '张三', '转审人', '已转审', '很好', '2018-08-20 12:00', ''),
  createItem('WX100002', '李四', '主管', '已转审', '非常好', '2018-08-20 12:00', ''),
  createItem('WX100003', '王五', '主管', '处理中', '', '', '')
]

const chartData = {
  nodes: [
    createNode('1', 1, '基础信息', '2018.08.02', [], 1, 0),
    createNode('2', 1, '调职补偿', '2018.08.02', handlers, 0, 2),
    createNode('3', 1, '汇总调职补偿', '', [], 1, 4),
    createNode('4', 3, '启动精算', '', [], 4, 5),
    createNode('5', 3, '复核精算', '', [], 4, 6),
    createNode('6', 3, '审核精算', '', [], 4, 7),
    createNode('7', 1, '调职补偿', '2018.08.02', [], 2, 1),
    createNode('8', 1, '复核', '2018.08.02', [], 2, 2),
    createNode('9', 2, '审批', '2018.08.02', [], 2, 3),
    createNode('10', 1, '复核', '2018.08.02', [], 4, 2),
    createNode('11', 2, '审批', '2018.08.02', [], 4, 3),
    createNode('12', 3, '运算调职兑现率', '', [], 4, 4),
    createNode('13', 1, '复核', '2018.08.02', [], 6, 2),
    createNode('14', 4, '审批审批审批审批审批 0123456789asdfghjkl', '2018.08.02', [], 6, 3)
  ],
  links: [
    createLink('1', '2', '0 r0.5 t1 c r1.5', 1),
    createLink('2', '3', '0 r1.5 c b1 r0.5', 3),
    createLink('3', '4', '0 r0.5 c b3 r0.5', 3),
    createLink('4', '5', '', 3),
    createLink('5', '6', '', 3),
    createLink('1', '7', 'r0.5 b1 c r0.5', 1),
    createLink('7', '8', '', 1),
    createLink('8', '9', '', 1),
    createLink('9', '3', '0 r0.5 c t1', 3),
    createLink('10', '11', '', 1),
    createLink('11', '12', '', 3),
    createLink('12', '4', '0 r0.5', 3),
    createLink('13', '14', '', 1),
    createLink('14', '4', '0 r1.5 c t2', 3, 'dash')
  ]
}

const chartConfig = createConfig()

chartConfig.headUrl = `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`

chartConfig.checkItemStatus = (item) => ~['已转审', '已同意'].indexOf(item.status)
chartConfig.adjustPos = (afterNode) => afterNode.raw.name === '2' && (afterNode.y += 1)
// content 插槽需更大展示空间，默认 listWidth 62px 过小会导致文字挤压重叠
chartConfig.listWidth = 150

export default {
  components: {
    TinyFlowchart,
    TinyPopover,
    IconDown,
    IconUp
  },
  data() {
    return {
      chartData: hooks.markRaw(chartData),
      chartConfig: hooks.markRaw(chartConfig)
    }
  },
  methods: {
    onClickNode(_afterNode, _e) {
      TinyModal.message('click-node')
    },
    onClickLink(_afterLink, _e) {
      TinyModal.message('click-link')
    },
    onClickBlank(_param, _e) {
      TinyModal.message('click-blank')
    }
  }
}
</script>

<style scoped>
/* 覆盖 content 插槽容器的固定高度(默认 24px)，否则下拉触发区会被挤压 */
:deep(.tiny-flow-chart__node-item) {
  min-height: 24px !important;
  height: auto !important;
}

/* 下拉触发区：收起时显示的紧凑视图 */
.flowchart-content-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  height: 100%;
  min-height: 22px;
  padding: 0 4px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
}
.flowchart-content-trigger .trigger-text {
  white-space: nowrap;
}
.flowchart-content-trigger .trigger-icon {
  flex-shrink: 0;
}

/* content 插槽：下拉展开后的表单列表 */
.flowchart-content-slot {
  padding: 4px 8px;
  font-size: 12px;
}
.flowchart-content-slot .content-item {
  display: flex;
  gap: 8px;
  padding: 4px 0;
  border-bottom: 1px dashed #e8e8e8;
}
.flowchart-content-slot .content-item:last-child {
  border-bottom: none;
}
.flowchart-content-slot .item-name {
  min-width: 40px;
}
.flowchart-content-slot .item-role {
  min-width: 50px;
  color: #666;
}
.flowchart-content-slot .item-status {
  color: #1890ff;
}

/* 下拉弹层样式 */
:deep(.flowchart-content-popover.tiny-popper) {
  margin-top: 2px;
  padding: 0;
}
</style>
