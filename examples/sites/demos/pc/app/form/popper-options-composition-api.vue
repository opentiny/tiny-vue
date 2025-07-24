<template>
  <div class="demo-form">
    <div class="scroll-parent">
      <tiny-form ref="formRef" :model="createData" label-width="60px" :popper-options="{ bubbling: true }">
        <tiny-form-item label="姓名" prop="name" required>
          <tiny-input v-model="createData.name"> </tiny-input>
        </tiny-form-item>
        <tiny-form-item label="昵称" prop="nickname" required>
          <tiny-input v-model="createData.nickname"> </tiny-input>
        </tiny-form-item>
        <tiny-form-item label="描述" prop="desc" required>
          <tiny-input v-model="createData.desc" type="textarea"> </tiny-input>
        </tiny-form-item>
        <tiny-form-item>
          <tiny-button type="primary" @click="submitClick"> 提交 </tiny-button>
        </tiny-form-item>
      </tiny-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyForm, TinyFormItem, TinyInput, TinyButton } from '@opentiny/vue'

const createData = ref({
  name: '',
  nickname: '',
  desc: ''
})

const formRef = ref()

function submitClick() {
  formRef.value.validate(() => {
    // empty
  })
}
</script>

<style scoped>
.demo-form {
  width: 420px;
}
.scroll-parent {
  height: 200px;
  overflow: auto;
  padding-right: 40px;
}
</style>
