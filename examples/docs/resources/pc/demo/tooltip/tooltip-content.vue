<template>
  <div>
    <tiny-tooltip placement="top">
      <template #content>
        <div class="h50">通过 <span class="red">slot = "content" </span>自定义提示内容</div>
      </template>
      <button class="tiny-button tiny-button--primary">插槽的使用</button>
    </tiny-tooltip>

    <tiny-tooltip placement="top" effect="light">
      <template #content>
        <div><Icon-operationfaild class="red" /> 该网段不可用！可用网段：163</div>
      </template>
      <button class="tiny-button tiny-button--primary">校验错误</button>
    </tiny-tooltip>
  </div>
</template>

<script lang="jsx">
import { Tooltip } from '@opentiny/vue'
import { iconOperationfaild } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTooltip: Tooltip,
    IconOperationfaild: iconOperationfaild()
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.h50 {
  height: 50px;
}

.mr9 {
  margin-right: 9px;
}

.red {
  color: #f23030;
  fill: #f23030;
}
</style>
