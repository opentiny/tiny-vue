<template>
  <tiny-teleport to="body" :disabled="!isFullscreen">
    <tiny-grid :data="tableData" :style="fullscreenStyle" @toolbar-button-click="toolbarButtonClick">
      <template #toolbar>
        <tiny-grid-toolbar :buttons="toolbarButtons"></tiny-grid-toolbar>
      </template>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </tiny-teleport>
</template>

<script setup>
import { Teleport as TinyTeleport } from '@opentiny/vue-common'
import { ref, nextTick } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, GridToolbar as TinyGridToolbar } from '@opentiny/vue'

const isFullscreen = ref(false)
const fullscreenStyle = ref('')

const toolbarButtons = [
  { code: 'enterFullscreen', name: '进入全屏模式' },
  { code: 'exitFullscreen', name: '退出全屏模式' }
]

const tableData = ref([
  {
    id: '1',
    name: 'GFD科技有限公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW科技有限公司',
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
  }
])

const toolbarButtonClick = ({ code, $grid }) => {
  isFullscreen.value = false
  fullscreenStyle.value = ''

  if (code === 'enterFullscreen') {
    isFullscreen.value = true
    fullscreenStyle.value = 'position:fixed;width:100vw;height:100vh;z-index:9999;top:0;left:0;'
  }

  nextTick(() => {
    $grid.recalculate()
  })
}
</script>
