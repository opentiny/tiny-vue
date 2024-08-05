<template>
  <div class="demo-split">
    <tiny-split v-model="split2">
      <template #left>
        <div class="demo-split-pane">自定义左面板</div>
      </template>
      <template #trigger>
        <div class="trigger-line">
          <div class="trigger-line__inner"></div>
          <tiny-icon-pause class="trigger-line__icon" />
        </div>
      </template>
      <template #right>
        <div class="demo-split-pane">自定义右面板</div>
      </template>
    </tiny-split>
  </div>
</template>

<script lang="jsx">
import { Split } from '@opentiny/vue'
import { IconPause } from '@opentiny/vue-icon'

export default {
  components: {
    TinySplit: Split,
    TinyIconPause: IconPause()
  },
  data() {
    return {
      split2: 0.4
    }
  }
}
</script>

<style scoped>
.demo-split {
  height: 200px;
  border: 1px solid #d9d9d9;
  margin-bottom: 20px;
}

.demo-split-pane {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}

.trigger-line {
  position: relative;
  width: 5px;
  height: 100%;
  cursor: pointer;
}
.trigger-line__inner {
  height: 100%;
  width: 1px;
  margin-left: 2px;
  background: #c2c2c2;
}

.trigger-line__icon {
  position: absolute;
  top: 50%;
  left: -7px;
  font-size: 18px;
  fill: #c2c2c2;
}
.trigger-line__icon:hover {
  fill: #777;
}
</style>
