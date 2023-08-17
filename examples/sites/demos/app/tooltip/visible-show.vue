<template>
  <div>
    <div>
      <button class="tiny-button tiny-button--default" @click="showTip">切换visible</button>
      <span> 当前visible={{ visibleVal }} </span>
    </div>

    <tiny-tooltip :visible="visibleVal" content="我会显示这个提示">
      <div class="ellipsis">我的内容很长很长。。。。</div>
    </tiny-tooltip>
    <tiny-tooltip :visible="visibleVal" content="visibleVal为auto时，我不会显示这个提示">
      <div class="normal">内容不超长</div>
    </tiny-tooltip>
  </div>
</template>

<script lang="jsx">
import { Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip
  },
  data() {
    return {
      visibleVal: 'always'
    }
  },
  methods: {
    showTip() {
      this.visibleVal = this.visibleVal === 'always' ? 'auto' : 'always'
    }
  }
}
</script>

<style scoped>
.ellipsis {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.normal {
  width: 100px;
}
</style>
