<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">点击关闭按钮时触发事件</tiny-button>

    <tiny-modal v-model="value1" type="confirm" show-footer @close="closeClick" :is-form-reset="false">
      <tiny-form :model="createData" label-width="100px">
        <tiny-form-item label="用户名" prop="username">
          <tiny-input v-model="createData.username"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="密码" prop="password">
          <tiny-input v-model="createData.password" show-password></tiny-input>
        </tiny-form-item>
      </tiny-form>
    </tiny-modal>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import {
  Button as TinyButton,
  Modal as TinyModal,
  Notify,
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput
} from '@opentiny/vue'

const value1 = ref(false)
const createData = ref({
  username: '',
  password: ''
})

function closeClick() {
  Notify({
    title: 'closeClick事件',
    message: '点击关闭按钮时触发事件',
    position: 'top-right'
  })
}
</script>
