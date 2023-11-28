<template>
  <div>
    是否显示自定义告警组件：<tiny-switch v-model="show"></tiny-switch>
    <tiny-alert description="自定义告警组件" v-show="show" :closable="false">
      <template #close>
        <icon-close-circle @click="show = !show"></icon-close-circle>
      </template>
    </tiny-alert>
    <tiny-alert type="error" description="关闭按钮自定义文本" close-text="关闭"></tiny-alert>
    <tiny-alert type="warning" description="自定义的 close 事件" @close="close"></tiny-alert>
    <tiny-alert :closable="false" description="closable 设置为 false, 不可关闭"></tiny-alert>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button as TinyButton, Alert as TinyAlert, Switch as TinySwitch, Modal } from '@opentiny/vue'
import { iconCloseCircle } from '@opentiny/vue-icon'

const show = ref(true)

const TinyIconCloseCircle = iconCloseCircle()

const close = () => {
  Modal.message('关闭了')
}
</script>
