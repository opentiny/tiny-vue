<template>
  <div>
    <div>
      指南
      <tiny-divider direction="vertical" status="success"> </tiny-divider>
      组件
      <tiny-divider direction="vertical" status="success"> </tiny-divider>
      主题
      <tiny-divider direction="vertical" status="success"> </tiny-divider>
      资源
    </div>
    <br />
    <br />
    <div class="divider-wrap">
      Web 开发
      <tiny-divider direction="vertical"> </tiny-divider>
      卡片开发
      <tiny-divider direction="vertical"> </tiny-divider>
      移动开发
      <tiny-divider direction="vertical"> </tiny-divider>
      设计工具
    </div>
  </div>
</template>

<script>
import { Divider } from '@opentiny/vue'

export default {
  components: {
    TinyDivider: Divider
  }
}
</script>
