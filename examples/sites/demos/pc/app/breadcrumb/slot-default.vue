<template>
  <div>
    <tiny-breadcrumb>
      <tiny-breadcrumb-item>首页</tiny-breadcrumb-item>
      <tiny-breadcrumb-item>
        <a href="/"> 产品 </a>
      </tiny-breadcrumb-item>
      <tiny-breadcrumb-item :to="{ path: '/' }" replace><span>软件</span></tiny-breadcrumb-item>
    </tiny-breadcrumb>
  </div>
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
