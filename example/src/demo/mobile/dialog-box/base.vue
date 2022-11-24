<template>
  <div class="tiny-mobile-dialog-box-demo">
    <div class="page__hd">
      <h1 class="page__title">Dialog</h1>
      <p class="page__desc">对话框</p>
    </div>
    <div class="cls">
      <tiny-button @click="boxVisibility1 = true" type="primary" size="large"
        >有标题类提示框</tiny-button
      >
      <tiny-dialog-box
        :visible="boxVisibility1"
        @update:visible="boxVisibility1 = $event"
        :modal-append-to-body="false"
        title="标题"
      >
        <span>单行文本单行文本单行文本</span>
      </tiny-dialog-box>
    </div>
    <div class="cls">
      <tiny-button @click="boxVisibility3 = true" size="large"
        >有标题多行提示框</tiny-button
      >
      <tiny-dialog-box
        :visible="boxVisibility3"
        @update:visible="boxVisibility3 = $event"
        :modal-append-to-body="false"
        title="标题"
      >
        <span>
          弹窗内容正文三个和尚刚好是个好时光还是三个和尚风格还是更换。</span
        >
      </tiny-dialog-box>
    </div>
    <div class="cls">
      <tiny-button @click="boxVisibility2 = true" type="danger" size="large"
        >无标题类提示框</tiny-button
      >
      <tiny-dialog-box
        :visible="boxVisibility2"
        @update:visible="boxVisibility2 = $event"
        :modal-append-to-body="false"
        :show-header="false"
      >
        <span>单行文本单行文本单行文本</span>
      </tiny-dialog-box>
    </div>
    <div class="cls">
      <tiny-button @click="boxVisibility4 = true" type="danger" size="large"
        >无标题多行提示框</tiny-button
      >
      <tiny-dialog-box
        :visible="boxVisibility4"
        @update:visible="boxVisibility4 = $event"
        :modal-append-to-body="false"
        :show-header="false"
      >
        <span>
          弹窗内容正文三个和尚刚好是个好时光还是三个和尚风格还是更换。。</span
        >
      </tiny-dialog-box>
    </div>
  </div>
</template>

<script>
import { Button, DialogBox } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      boxVisibility1: false,
      boxVisibility2: false,
      boxVisibility3: false,
      boxVisibility4: false
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
</style>
