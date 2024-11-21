<template>
  <div style="height: 330px">
    <span>
      <tiny-button @click="defaultVisible = true">默认属性配置</tiny-button>
      <tiny-button @click="hideVisible = true">隐藏头部</tiny-button>
      <tiny-button @click="btnVisible = true">隐藏关闭按钮</tiny-button>
    </span>

    <tiny-dialog-box
      v-if="defaultVisible"
      :visible="defaultVisible"
      @update:visible="defaultVisible = $event"
      :modal-append-to-body="false"
    >
      <div>自定义内容</div>
    </tiny-dialog-box>

    <tiny-dialog-box
      :modal-append-to-body="false"
      title="标题1"
      :show-header="false"
      :visible="hideVisible"
      v-if="hideVisible"
      @update:visible="hideVisible = $event"
      ><div>自定义内容</div></tiny-dialog-box
    >

    <tiny-dialog-box
      :modal-append-to-body="false"
      title="标题1"
      :show-close="false"
      v-if="btnVisible"
      :visible="btnVisible"
      @update:visible="btnVisible = $event"
      ><div>自定义内容</div></tiny-dialog-box
    >
  </div>
</template>

<script>
import { TinyDialogBox, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyDialogBox,
    TinyButton
  },
  data() {
    return {
      hideVisible: false,
      btnVisible: false,
      defaultVisible: false
    }
  },
  methods: {}
}
</script>
