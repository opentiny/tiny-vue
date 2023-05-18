<template>
  <div>
    <div class="block">
      <tiny-popconfirm title="这是气泡标题" content="这是气泡确认框提示内容文本描述，这是两行的样是两行的样式，内容很长很长。">
        <template #reference>
          <tiny-button>悬浮我提示</tiny-button>
        </template>
      </tiny-popconfirm>
    </div>

    <div class="block">
      <tiny-popconfirm type="info" title="这是提示气泡" trigger="click" placement="right" :cancel-button="false" content="内容很短">
        <template #reference>
          <tiny-button>点击弹出，info 信息，右侧显示</tiny-button>
        </template>
      </tiny-popconfirm>
    </div>

    <div class="block">
      <tiny-popconfirm type="warning" title="这是警告气泡" placement="bottom" content="内容很短">
        <template #reference>
          <tiny-button>默认悬浮弹出，warning 警告，下面显示</tiny-button>
        </template>
      </tiny-popconfirm>
    </div>
  </div>
</template>

<script>
import { Popconfirm, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopconfirm: Popconfirm,
    TinyButton: Button
  },
  data() {
    return {
      activeName: 1
    }
  },
  methods: {}
}
</script>

<style scoped>
.block {
  margin-bottom: 100px;
}
</style>
