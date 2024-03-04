<template>
  <div>
    <tiny-alert>
      <template #description>这是一条普通的消息提示 <tiny-button type="text">相关操作</tiny-button></template>
    </tiny-alert>
    <tiny-alert type="warning">
      <template #description>
        <div class="multi-line">{{ msg }}</div>
      </template>
    </tiny-alert>
    <tiny-alert type="error">
      <template #description>
        {{ msg.length > 160 ? msg.slice(0, 160) + '...' : msg }} <tiny-button type="text">相关操作</tiny-button>
      </template>
    </tiny-alert>

    <tiny-alert size="large" title="slot 自定义内容" class="demo-alert">
      <span>自定义内容</span>
    </tiny-alert>
    <br />
    <tiny-alert size="large" title="slot 自定义交互操作" class="demo-alert">
      <tiny-button size="mini" type="primary" class="mr-2">确定</tiny-button>
      <tiny-button size="mini">取消</tiny-button>
    </tiny-alert>
    <br />
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
  },
  data() {
    return {
      msg: '这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。'
    }
  }
}
</script>

<style>
/* IE下不支持 */
.multi-line {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.demo-alert .tiny-alert__opration {
  margin-top: 6px;
}
</style>
