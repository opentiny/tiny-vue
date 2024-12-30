<template>
  <div class="content">
    <tiny-button @click="value1 = !value1" :reset-time="0">点击关闭按钮时触发事件</tiny-button>

    <tiny-modal v-model="value1" type="confirm" show-footer @close="closeClick" :is-form-reset="true">
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

<script lang="jsx">
import { TinyButton, TinyModal, TinyForm, TinyFormItem, TinyInput } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyButton,
    TinyModal,
    TinyForm,
    TinyFormItem,
    TinyInput
  },
  data() {
    return {
      value1: false,
      createData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    closeClick() {}
  }
}
</script>
