<template>
  <div>
    <tiny-alert type="success" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
      <tiny-button size="mini" type="primary" class="mr-2">继续提交</tiny-button>
      <tiny-button size="mini">取消操作</tiny-button>
    </tiny-alert>
    <br />
    <tiny-alert type="error" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。"></tiny-alert>
    <br />
    <tiny-alert type="warning" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
      <tiny-button size="mini" type="primary" class="mr-2">继续提交</tiny-button>
      <tiny-button size="mini">取消操作</tiny-button>
    </tiny-alert>
  </div>
</template>

<script>
import { Alert, Button } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert,
    TinyButton: Button
  }
}
</script>
