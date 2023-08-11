<template>
  <div>
    <button class="tiny-button tiny-button--default" @click="showTip">手动控制tooltip的显示和隐藏</button>
    <tiny-tooltip v-model="showTooltip" content="手动控制模式" :manual="true">
      <button class="tiny-button tiny-button--primary">手动控制模式</button>
    </tiny-tooltip>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Tooltip as TinyTooltip } from '@opentiny/vue'

const showTooltip = ref(false)

function showTip() {
  showTooltip.value = !showTooltip.value
}
</script>
