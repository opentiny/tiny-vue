<template>
  <tiny-breadcrumb size="medium" @select="breadcrumbClick">
    <tiny-breadcrumb-item :to="{ path: '/' }" @select="breadcrumbItemClick" label="首页"></tiny-breadcrumb-item>
    <tiny-breadcrumb-item>
      <a href="/"> 产品 </a>
    </tiny-breadcrumb-item>
    <tiny-breadcrumb-item :to="{ path: '/breadcrumb' }"> 软件 </tiny-breadcrumb-item>
  </tiny-breadcrumb>
</template>

<script>
import { Breadcrumb, BreadcrumbItem, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyBreadcrumb: Breadcrumb,
    TinyBreadcrumbItem: BreadcrumbItem
  },
  methods: {
    breadcrumbClick: (value) => {
      Notify({
        type: 'info',
        title: 'tiny-breadcrumb 触发选择面包屑事件',
        message: JSON.stringify(value),
        position: 'top-right',
        duration: 3000
      })
    },
    breadcrumbItemClick: (value) => {
      Notify({
        type: 'info',
        title: 'tiny-breadcrumb-item 触发选择面包屑事件',
        message: JSON.stringify(value),
        position: 'top-right',
        duration: 3000
      })
    }
  }
}
</script>
