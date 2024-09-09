<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出与关闭事件">弹出与关闭事件</tiny-button>
    <tiny-dialog-box
      v-model:visible="boxVisibility"
      title="添加备注"
      width="30%"
      @open="open"
      @close="close"
      @opened="opened"
      @closed="closed"
    >
      <tiny-form label-position="top">
        <tiny-form-item label="备注描述">
          <tiny-input type="textarea" v-model="createData.quantity" :maxlength="1000" show-word-limit></tiny-input>
        </tiny-form-item>
      </tiny-form>
      <template #footer>
        <tiny-button @click="boxVisibility = false">取消</tiny-button>
        <tiny-button type="primary" @click="boxVisibility = false">确定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import {
  Button as TinyButton,
  DialogBox as TinyDialogBox,
  Notify,
  Input as TinyInput,
  Form as TinyForm,
  FormItem as TinyFormItem
} from '@opentiny/vue'

const boxVisibility = ref(false)

const createData = ref({
  quantity: '这是描述'
})

function open() {
  Notify({
    title: '窗口弹出',
    message: getTime(new Date()),
    offset: 0
  })
}

function opened() {
  Notify({
    title: '窗口弹出动画完成',
    message: getTime(new Date()),
    offset: 0
  })
}

function close() {
  Notify({
    title: '窗口关闭',
    message: getTime(new Date()),
    offset: 0
  })
}

function closed() {
  Notify({
    title: '窗口关闭动画完成',
    message: getTime(new Date()),
    offset: 0
  })
}

function getTime(now) {
  return [now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()].join(':')
}
</script>
