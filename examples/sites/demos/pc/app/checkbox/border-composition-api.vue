<template>
  <tiny-checkbox v-model="checked" border>
    <tiny-tooltip content="备选项1 提示文字 提示文字" effect="light" placement="top">
      <div class="content-overflow">备选项1 提示文字 提示文字</div>
    </tiny-tooltip>
  </tiny-checkbox>
</template>

<script setup>
import { ref } from 'vue'
import { Checkbox as TinyCheckbox, Tooltip as TinyTooltip } from '@opentiny/vue'

const checked = ref(false)
</script>

<style scoped>
.content-overflow {
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
}
</style>
