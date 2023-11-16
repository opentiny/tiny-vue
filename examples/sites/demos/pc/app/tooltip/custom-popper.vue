<template>
  <div>
    <div class="row">
      弹出小箭头：
      <tiny-switch v-model="visibleArrow" show-text style="width: 80px" @change="key++">
        <template #open>
          <span>显示</span>
        </template>
        <template #close>
          <span>隐藏</span>
        </template>
      </tiny-switch>
    </div>
    <div class="row">
      鼠标进入：
      <tiny-switch v-model="enterable" show-text style="width: 80px" @change="key++">
        <template #open>
          <span>可进入</span>
        </template>
        <template #close>
          <span>不可入</span>
        </template>
      </tiny-switch>
    </div>
    <div class="row">自定义类名popper1, 让字体变大</div>
    <div style="margin-top: 16px">
      <tiny-tooltip
        content="我是提示内容"
        :visible-arrow="visibleArrow"
        :enterable="enterable"
        popper-class="popper1"
        :key="key"
      >
        <div class="ellipsis">鼠标悬浮在这里</div>
      </tiny-tooltip>
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
      visibleArrow: true,
      enterable: true,
      key: 0
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

<style>
.popper1 {
  font-size: 20px !important;
}
</style>
