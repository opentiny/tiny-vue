<template>
  <div>
    <tiny-breadcrumb separator=">">
      <tiny-breadcrumb-item><a href="/">首页</a></tiny-breadcrumb-item>
      <tiny-breadcrumb-item>
        <a href="/aurora_test/#/webcore/v3/zh-CN/component/breadcrumb">
          产品
        </a>
      </tiny-breadcrumb-item>
      <tiny-breadcrumb-item><a href="/"> 软件</a></tiny-breadcrumb-item>
    </tiny-breadcrumb>
    <br />
    <tiny-breadcrumb :separator-icon="IconBoat">
      <tiny-breadcrumb-item><a hrfe="/">首页</a></tiny-breadcrumb-item>
      <tiny-breadcrumb-item>
        <a href="/aurora_test/#/webcore/v3/zh-CN/component/breadcrumb">
          产品
        </a>
      </tiny-breadcrumb-item>
      <tiny-breadcrumb-item><a href="/"> 软件</a></tiny-breadcrumb-item>
    </tiny-breadcrumb>
  </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from '@opentiny/vue'
import { iconBoat } from '@opentiny/vue-icon'

export default {
  components: {
    TinyBreadcrumb: Breadcrumb,
    TinyBreadcrumbItem: BreadcrumbItem
  },
  data() {
    return {
      IconBoat: iconBoat()
    }
  }
}
</script>
