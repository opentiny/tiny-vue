<template>
  <div>
    <tiny-alert size="large" title="slot 自定义内容" class="demo-alert">
      <span>自定义内容</span>
    </tiny-alert>
    <br />
    <tiny-alert size="large" title="slot 自定义交互操作" class="demo-alert">
      <a href="javascript: void(0);">确定</a>
      <a href="javascript: void(0);">取消</a>
    </tiny-alert>
    <br />
    <tiny-alert type="success" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
      <a href="javascript: void(0);">继续提交</a>
      <a href="javascript: void(0);">取消操作</a>
    </tiny-alert>
    <br />
    <tiny-alert type="error" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。"></tiny-alert>
    <br />
    <tiny-alert type="warning" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
      <a href="javascript: void(0);">继续提交</a>
      <a href="javascript: void(0);">取消操作</a>
    </tiny-alert>
  </div>
</template>

<script>
import { Alert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert
  }
}
</script>

<style>
.demo-alert .tiny-alert__opration {
  margin-top: 4px;
}
</style>
