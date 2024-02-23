<template>
  <div style="height: 330px">
    <span>
      <tiny-button @click="boxVisibility5 = true">内容插槽</tiny-button>
      <tiny-button @click="boxVisibility6 = true">底部插槽</tiny-button>
    </span>

    <tiny-dialog-box
      title="标题1"
      v-if="boxVisibility5"
      :modal-append-to-body="false"
      :visible="boxVisibility5"
      @update:visible="boxVisibility5 = $event"
    >
      <div>自定义内容</div>
    </tiny-dialog-box>
    <tiny-dialog-box
      title="标题1"
      :show-footer="true"
      :modal-append-to-body="false"
      v-if="boxVisibility6"
      :visible="boxVisibility6"
      @update:visible="boxVisibility6 = $event"
    >
      <template #footer>
        <tiny-button>自定义按钮1</tiny-button> &nbsp;&nbsp; <tiny-button>自定义按钮2</tiny-button>
      </template>
    </tiny-dialog-box>
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
      boxVisibility3: false,
      boxVisibility4: false,
      boxVisibility5: false,
      boxVisibility6: false
    }
  },
  methods: {}
}
</script>
