<template>
  <tiny-grid ref="tinyTableRef" height="300" :optimization="optimizationData">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="city" title="地址"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn } from '@opentiny/vue'

const tinyTableRef = ref()
const optimizationData = {
  animat: false,
  delayHover: 1000,
  scrollX: {
    gt: 100, // 指定大于多少范围时自动启动虚拟滚动（启用 X 虚拟滚动，必须固定所有列宽，否则无法兼容）默认100
    oSize: 2, // 当剩余数据少于指定范围时触发重新渲染 默认自动计算
    rSize: 10, // 每次渲染条数 默认自动计算
    vSize: 10 // 指定可视区域条数
  },
  scrollY: {
    gt: 20, // 指定大于多少范围时自动启动虚拟滚动（启用 Y 虚拟滚动，必须固定所有行高，否则无法兼容）默认500
    oSize: 2, // 当剩余数据少于指定范围时触发重新渲染 默认自动计算
    rSize: 10, // 每次渲染条数 默认自动计算
    vSize: 10, // 指定可视区域条数 默认自动计算
    rHeight: 50, // 指定行高 默认自动计算
    adaptive: true // 自动适配最优的渲染方式 默认true
  }
}

// 生成 1000 条模拟数据
const mockData = () => {
  setTimeout(() => {
    const randomAlphabets = () => {
      return Array.from({ length: Math.ceil(Math.random() * 10) })
        .map(() => String.fromCharCode(65 + Math.floor(26 * Math.random())))
        .join('')
    }

    const data = Array.from({ length: 1000 }).map((item, i) => {
      return {
        id: randomAlphabets() + i + 1,
        name: randomAlphabets() + '科技YX公司',
        city: ['福州', '深圳', '中山', '龙岩', '韶关', '黄冈', '赤壁', '厦门'][Math.floor(Math.random() * 8)],
        employees: Math.ceil(Math.random() * 10000),
        createdDate: '2011-11-11 11:11:11'
      }
    })

    tinyTableRef.value.loadData(data)
  }, 200)
}

mockData()
</script>
