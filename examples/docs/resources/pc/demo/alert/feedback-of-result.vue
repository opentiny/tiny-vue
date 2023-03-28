<template>
  <div>
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

<script lang="jsx">
import { Alert } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert
  }
}
</script>
