<template>
  <tiny-grid :data="tableData" @fullscreen="onFullscreen">
    <template #toolbar>
      <tiny-grid-toolbar
        full-screen
        :before-open-full-screen="beforeOpenFullScreen"
        :before-close-full-screen="beforeCloseFullScreen"
      ></tiny-grid-toolbar>
    </template>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { Grid, GridColumn, GridToolbar, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn,
    TinyGridToolbar: GridToolbar
  },
  data() {
    return {
      tableData: [
        {
          id: '1',
          name: 'GFD科技YX公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW科技YX公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGBYX公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: '康康物业YX公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    beforeOpenFullScreen() {
      let doAction = true

      Modal.message({
        message: doAction ? '不阻止全屏' : '阻止全屏',
        status: 'info'
      })

      return doAction
    },
    beforeCloseFullScreen() {
      let doAction = true

      Modal.message({
        message: doAction ? '不阻止退出全屏' : '阻止退出全屏',
        status: 'info'
      })

      return doAction
    },
    onFullscreen(isFull) {
      Modal.message({
        message: isFull ? '全屏了' : '关闭全屏了',
        status: 'info'
      })
      return true
    }
  }
}
</script>
