<template>
  <div style="height: 330px">
    <span>
      <tiny-button @click="defaultVisable = true">默认属性配置</tiny-button>
      <tiny-button @click="hideVisable = true">隐藏头部</tiny-button>
      <tiny-button @click="btnVisable = true">隐藏关闭按钮</tiny-button>
    </span>

    <tiny-dialog-box
      v-if="defaultVisable"
      :visible="defaultVisable"
      @update:visible="defaultVisable = $event"
      :modal-append-to-body="false"
    >
      <div>自定义内容</div>
    </tiny-dialog-box>

    <tiny-dialog-box
      :modal-append-to-body="false"
      title="标题1"
      :show-header="false"
      :visible="hideVisable"
      v-if="hideVisable"
      @update:visible="hideVisable = $event"
      ><div>自定义内容</div></tiny-dialog-box
    >

    <tiny-dialog-box
      :modal-append-to-body="false"
      title="标题1"
      :show-close="false"
      v-if="btnVisable"
      :visible="btnVisable"
      @update:visible="btnVisable = $event"
      ><div>自定义内容</div></tiny-dialog-box
    >
  </div>
</template>

<script>
import { DialogBox, Button } from '@opentiny/vue'

export default {
  components: {
    TinyDialogBox: DialogBox,
    TinyButton: Button
  },
  data() {
    return {
      hideVisable: false,
      btnVisable: false,
      defaultVisable: false
    }
  },
  methods: {}
}
</script>
