<template>
  <div>
    <div class="row">
      智能识别溢出：
      <tiny-switch v-model="visible" show-text style="width: 80px">
        <template #open>
          <span>auto</span>
        </template>
        <template #close>
          <span>always</span>
        </template>
      </tiny-switch>
      <div style="margin-top: 16px">
        <tiny-tooltip :visible="visible ? 'auto' : 'always'" content="智能提示的提示内容">
          <div class="ellipsis">我的内容很长很长。。。。</div>
        </tiny-tooltip>

        <tiny-tooltip :visible="visible ? 'auto' : 'always'" content="智能提示的提示内容">
          <div class="ellipsis">内容不超长</div>
        </tiny-tooltip>
      </div>
    </div>
    <div class="row">
      手动控制模式：
      <tiny-switch v-model="manualShow" show-text style="width: 80px">
        <template #open>
          <span>显示</span>
        </template>
        <template #close>
          <span>隐藏</span>
        </template>
      </tiny-switch>
      <div style="margin-top: 16px">
        <tiny-tooltip v-model="manualShow" content="手动控制模式的提示内容" manual>
          <div class="ellipsis">我的内容很长很长。。。。</div>
        </tiny-tooltip>
      </div>
    </div>
    <div class="row">
      禁用控制模式：
      <tiny-switch v-model="disabled" show-text style="width: 80px">
        <template #open>
          <span>禁用</span>
        </template>
        <template #close>
          <span>正常</span>
        </template>
      </tiny-switch>
      <div style="margin-top: 16px">
        <tiny-tooltip content="禁用的提示内容" :disabled="disabled">
          <div class="ellipsis">我的内容很长很长。。。。</div>
        </tiny-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="jsx">
import { Tooltip, Switch } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinySwitch: Switch
  },
  data() {
    return {
      visible: false,
      manualShow: false,
      disabled: false
    }
  }
}
</script>

<style scoped>
.row {
  margin-bottom: 20px;
}
.ellipsis {
  display: inline-block;
  width: 100px;
  height: 20px;
  margin: 0 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.ellipsis:hover {
  background-color: #f1f1f1;
}
</style>
