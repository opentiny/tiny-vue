<template>
  <div>
    <tiny-grid
      ref="grid"
      :data="tableData"
      seq-serial
      :edit-config="{ trigger: 'click', mode: 'row', showStatus: true, blurOutside }"
    >
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column
        field="name"
        title="名称"
        width="500"
        :show-icon="false"
        :editor="{ component: 'input', autoselect: true }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="area"
        title="区域"
        width="500"
        :show-icon="false"
        :editor="{ component: 'select', options }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="address"
        title="地址"
        width="500"
        :show-icon="false"
        :editor="{ component: 'input', autoselect: true }"
      ></tiny-grid-column>
      <tiny-grid-column
        field="introduction"
        title="公司简介"
        width="500"
        :show-icon="false"
        :editor="{ component: 'input', autoselect: true }"
        show-overflow="ellipsis"
      ></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script>
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
      options: [
        { label: '华北区', value: '华北区' },
        { label: '华东区', value: '华东区' },
        { label: '华南区', value: '华南区' }
      ],
      tableData: [
        {
          id: '1',
          name: 'GFD 科技 YX 公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW 科技 YX 公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    blurOutside({ cell, event, $table }) {
      const { getEventTargetNode, $el } = $table
      const isClickRow = getEventTargetNode(event, $el, 'tiny-grid-body__row').flag
      return isClickRow || this.isScrollBar(event, $el)
    },
    isScrollBar(event, tableElm) {
      const element = event.target

      // 判断是否表格body
      if (element !== tableElm.querySelector('.tiny-grid__body-wrapper')) {
        return false
      }

      const rect = element.getBoundingClientRect()
      const clickX = event.clientX
      const clickY = event.clientY
      // 检查垂直滚动条
      if (element.scrollHeight > element.clientHeight) {
        const scrollbarWidth = element.offsetWidth - element.clientWidth
        if (clickX >= rect.right - scrollbarWidth && clickX <= rect.right) {
          return true // 点击了垂直滚动条
        }
      }

      // 检查水平滚动条
      if (element.scrollWidth > element.clientWidth) {
        const scrollbarHeight = element.offsetHeight - element.clientHeight
        if (clickY >= rect.bottom - scrollbarHeight && clickY <= rect.bottom) {
          return true // 点击了水平滚动条
        }
      }

      return false
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 16px;
  padding: 15px;
  font-weight: bolder;
  color: var(--tv-color-text, #191919);
}
</style>
