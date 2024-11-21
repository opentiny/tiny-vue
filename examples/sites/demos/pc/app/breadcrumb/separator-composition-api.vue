<template>
  <div>
    <tiny-breadcrumb separator=">">
      <tiny-breadcrumb-item><a href="#">首页</a></tiny-breadcrumb-item>
      <tiny-breadcrumb-item>
        <a href="#"> 产品 </a>
      </tiny-breadcrumb-item>
      <tiny-breadcrumb-item><a href="#"> 软件</a></tiny-breadcrumb-item>
    </tiny-breadcrumb>
    <br />
    <tiny-breadcrumb :separator-icon="iconChevronRight">
      <tiny-breadcrumb-item><a hrfe="#">首页</a></tiny-breadcrumb-item>
      <tiny-breadcrumb-item>
        <a href="#"> 产品 </a>
      </tiny-breadcrumb-item>
      <tiny-breadcrumb-item><a href="#"> 软件</a></tiny-breadcrumb-item>
    </tiny-breadcrumb>
  </div>
</template>

<script setup>
import { TinyBreadcrumb, TinyBreadcrumbItem } from '@opentiny/vue'
import { IconChevronRight } from '@opentiny/vue-icon'

const iconChevronRight = IconChevronRight()
</script>
