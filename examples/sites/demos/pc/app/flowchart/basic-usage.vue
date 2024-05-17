<template>
  <div class="tiny-demo">
    <button @click="toggleStatus">切换状态</button>
    <tiny-flowchart
      ref="chart"
      :data="chartData"
      :config="chartConfig"
      @click-node="onClickNode"
      @click-link="onClickLink"
      @click-blank="onClickBlank"
    >
      <template #content="params">
        <handler-list class="custom-handler-list" :params="params" />
      </template>
    </tiny-flowchart>
  </div>
</template>

<script>
import { Modal, Popover } from '@opentiny/vue'
import Flowchart from '@opentiny/vue-flowchart'
import { hooks } from '@opentiny/vue-common'
import { iconYes, iconPanelMini, iconChevronDown, iconChevronUp } from '@opentiny/vue-icon'

const { createNode, createLink, createItem, createConfig } = Flowchart

const HandlerDropdown = {
  template: `<div class="tiny-handler-dropdown">
    <div v-for="(handler, i) in params.node.info.items" :key="i" class="tiny-handler-dropdown-item">
      <div class="item-icon">
        <div :style="iconStyle(handler)">
          <icon-yes v-if="check(handler)"></icon-yes>
          <icon-pane v-else></icon-pane>
        </div>
      </div>
      <div class="item-status">{{ handler.status }}</div>
      <div class="item-head">
        <img :src="params.allItem[handler.key]" :style="imgStyle" />
      </div>
      <div class="item-name">{{ handler.name }}</div>
      <div class="item-key">{{ handler.key }}</div>
      <div class="item-role">{{ handler.role }}</div>
      <div class="item-date">{{ handler.date }}</div>
    </div>
  </div>`,
  name: 'TinyHandlerDropdown',
  components: {
    IconYes: iconYes(),
    IconPane: iconPanelMini()
  },
  props: {
    params: Object
  },
  computed: {
    imgStyle() {
      return 'width:16px;height:16px;border-radius:50%;'
    }
  },
  methods: {
    check(handler) {
      const { params } = this
      return typeof params.config.checkItemStatus === 'function' && params.config.checkItemStatus(handler)
    },
    iconStyle(handler) {
      const color = this.check(handler)
        ? 'border-color:#52c41a;background:#52c41a;'
        : 'border-color:#40a9ff;background:#40a9ff;'
      return (
        this.imgStyle +
        'display:flex;align-items:center;justify-content:center;' +
        'border-width:1px;border-style:solid;' +
        color
      )
    }
  }
}

const HandlerList = {
  template: `<tiny-popover
    placement="bottom-start"
    title=""
    v-model="params.showPop"
    width="220"
    trigger="manual"
    popper-class="demo-popover-class1"
    :visible-arrow="false"
  >
    <handler-dropdown class="custom-handler-dropdown" :params="params" />
    <template #reference>
      <div
        class="tiny-handler-list"
        :class="'name-' + params.node.name"
        :style="'border:1px solid ' + params.config.listBorderColor"
      >
        <div class="tiny-handler-list__heads" :style="'width:' + headWidth + 'px'">
          <img
            v-for="(item, i) in heads"
            class="tiny-handler-list__head-img"
            :key="i"
            :src="item.head"
            :style="item.style"
          />
        </div>
        <div
          class="tiny-handler-list__icon"
          :style="'width:' + params.config.listIconSize + 'px;fill:' + params.config.listIconColor"
          @click="toggleStatus"
        >
          <icon-up v-if="params.dropdowns[params.node.name]"></icon-up>
          <icon-down v-else></icon-down>
        </div>
      </div>
    </template>
  </tiny-popover>`,
  name: 'TinyHandlerList',
  components: {
    IconDown: iconChevronDown(),
    IconUp: iconChevronUp(),
    HandlerDropdown,
    TinyPopover: Popover
  },
  props: {
    params: Object
  },
  computed: {
    headWidth() {
      const { params } = this

      return params.config.listWidth - 6 - params.config.listIconSize
    },
    heads() {
      const { params, headWidth } = this
      const { allItem, node, config } = params
      const { headSize } = config
      const { info } = node
      const { items } = info
      const imgStyle = `width:${headSize}px;height:${headSize}px`
      const res = []

      items.map(({ key }, i) => {
        let left

        if (items.length > 1) {
          left = Math.floor(((headWidth - headSize) / (items.length - 1)) * i)
        } else if (items.length === 1) {
          left = Math.floor(headWidth / 2)
        }

        const style = `${imgStyle};left:${left}px`

        res.push({ head: allItem[key], style })
      })

      return res
    }
  },
  methods: {
    toggleStatus() {
      const { params } = this
      params.dropdowns[params.node.name] = !params.dropdowns[params.node.name]
    }
  }
}

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
    createNode('14', 4, '审批审批审批审批审批0123456789asdfghjkl', '2018.08.02', [], 6, 3)
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

const nodeFail = chartData.nodes[chartData.nodes.length - 1]
const linkDash = chartData.links[chartData.links.length - 1]

export default {
  components: {
    TinyFlowchart: Flowchart,
    HandlerList
  },
  data() {
    return {
      chartData: hooks.markRaw(chartData),
      chartConfig: hooks.markRaw(chartConfig),
      flag: false
    }
  },
  methods: {
    toggleStatus() {
      this.flag = !this.flag
      // 1.更改数据
      nodeFail.info.status = this.flag ? 1 : 4
      linkDash.info.style = this.flag ? 'solid' : 'dash'
      linkDash.info.status = this.flag ? 1 : 3
      chartConfig.anchor = this.flag ? 'left' : 'center'
      // 2.刷新流程图
      this.$refs.chart.refresh()
    },
    onClickNode(afterNode, e) {
      Modal.message('click-node')
    },
    onClickLink(afterLink, e) {
      Modal.message('click-link')
    },
    onClickBlank(param, e) {
      Modal.message('click-blank')
    }
  }
}
</script>

<style scoped>
/* HandlerList */
.tiny-handler-list {
  width: calc(100% - 2px);
  height: 100%;
  border-radius: 3px;
  position: relative;
}
.tiny-handler-list__heads {
  position: absolute;
  top: 1px;
  left: 1px;
  height: calc(100% - 2px);
}
.tiny-handler-list__icon {
  position: absolute;
  top: 1px;
  right: 1px;
  height: calc(100% - 2px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.tiny-handler-list__head-img {
  border-radius: 50%;
  position: absolute;
}
/* HandlerDropdown */
.tiny-handler-dropdown {
  width: auto;
  height: auto;
  padding: 6px;
  text-align: initial;
  cursor: pointer;
}
.tiny-handler-dropdown-item + .tiny-handler-dropdown-item {
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px dashed #999;
}
.tiny-handler-dropdown-item {
  font-size: 12px;
  display: grid;
  gap: 4px;
  grid-template-rows: repeat(3, 20px);
  grid-template-columns: 20px 20px 40px auto 40px;
  grid-template-areas:
    'icon status status status status'
    '. head name key role'
    '. date date date date';
  align-items: center;
  justify-content: start;
}
.tiny-handler-dropdown-item .item-icon {
  grid-area: icon;
}
.tiny-handler-dropdown-item .item-status {
  grid-area: status;
  font-weight: bold;
}
.tiny-handler-dropdown-item .item-head {
  grid-area: head;
}
.tiny-handler-dropdown-item .item-name {
  grid-area: name;
}
.tiny-handler-dropdown-item .item-key {
  grid-area: key;
}
.tiny-handler-dropdown-item .item-role {
  grid-area: role;
  background: #d9d9d9;
}
.tiny-handler-dropdown-item .item-date {
  grid-area: date;
  color: #999;
}
.tiny-handler-dropdown-item .item-icon .tiny-svg {
  fill: #fff;
}
.tiny-popover.demo-popover-class1.tiny-popper[x-placement^='bottom'] {
  margin-top: 2px;
  padding: 0;
}
</style>
