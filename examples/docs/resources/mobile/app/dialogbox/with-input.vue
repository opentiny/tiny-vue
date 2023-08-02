<template>
  <div class="tiny-mobile-dialog-box-demo">
    <div class="page__hd">
      <h1 class="page__title">Dialog</h1>
      <p class="page__desc">对话框</p>
    </div>
    <div class="cls">
      <tiny-button @click="boxVisibility1 = true" type="primary" size="large">输入类类提示框</tiny-button>
      <tiny-dialog-box :visible="boxVisibility1" @update:visible="boxVisibility1 = $event" :modal-append-to-body="false" title="标题">
        <tiny-input v-model="input" placeholder="请输入内容" clearable></tiny-input>
      </tiny-dialog-box>
    </div>
  </div>
</template>

<script lang="jsx">
import { Button, DialogBox, Input } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox,
    TinyInput: Input
  },
  data() {
    return {
      boxVisibility1: false,
      boxVisibility2: false,
      input: ''
    }
  }
}
</script>

<style>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.cls {
  width: 100%;
  margin-bottom: 20px;
}
.cls input {
  border: 1px solid #ccc;
  height: 30px;
  border-radius: 6px;
}
</style>
