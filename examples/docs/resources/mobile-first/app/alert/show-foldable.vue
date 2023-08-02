<template>
  <div>
    命名插槽：
    <tiny-alert size="large" :closable="false" show-foldable>
      <template #description>
        <div v-for="item in 12">
          {{ msg.length > 160 ? msg.slice(0, 160) + '...' : msg }}
          <tiny-link :underline="false" class="-mt-1">相关操作</tiny-link><br />
        </div>
      </template>
    </tiny-alert>
    <tiny-alert :show-icon="false" size="large" title="slot 自定义内容" class="demo-alert" show-foldable>
      <template #description>
        {{ msg.length > 160 ? msg.slice(0, 160) + '...' : msg }}
        <tiny-link :underline="false" class="-mt-1">相关操作</tiny-link><br />
        {{ msg.length > 160 ? msg.slice(0, 160) + '...' : msg }}
        <tiny-link :underline="false" class="-mt-1">相关操作</tiny-link>
      </template>
    </tiny-alert>
    默认插槽：
    <tiny-alert size="large" show-foldable>
      <div v-for="item in 4">
        <div class="multi-line">{{ msg }}<tiny-link :underline="false" class="-mt-1">相关操作</tiny-link></div>
      </div>
    </tiny-alert>
    <tiny-alert :show-icon="false" size="large" show-foldable :closable="false">
      <div v-for="item in 12">
        <div class="multi-line">{{ msg }} <tiny-link :underline="false">相关操作</tiny-link></div>
      </div>
    </tiny-alert>
  </div>
</template>

<script>
import { Alert, Link } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert,
    TinyLink: Link
  },
  data() {
    return {
      msg: '这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。这是一条普通的消息提示，使用插槽展示多行信息。'
    }
  }
}
</script>
