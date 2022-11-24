<template>
  <tiny-breadcrumb>
    <tiny-breadcrumb-item :to="{ path: '/' }">首页</tiny-breadcrumb-item>
    <tiny-breadcrumb-item>
      <a href="/aurora_test/#/webcore/v3/zh-CN/component/breadcrumb"> 产品 </a>
    </tiny-breadcrumb-item>
    <tiny-breadcrumb-item>软件</tiny-breadcrumb-item>
  </tiny-breadcrumb>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from '@opentiny/vue'

export default {
  components: {
    TinyBreadcrumb: Breadcrumb,
    TinyBreadcrumbItem: BreadcrumbItem
  }
}
</script>
