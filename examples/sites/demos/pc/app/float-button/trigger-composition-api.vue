<template>
  <div class="parent">
    <tiny-float-button bottom="-15px" right="100px" trigger="click" :icon="IconDel" type="primary">
      <tiny-float-button bottom="0" right="-28px" trigger="" :icon="IconDel"> </tiny-float-button>
    </tiny-float-button>
    <tiny-float-button bottom="-15px" right="180px" trigger="hover" :icon="IconDel" type="primary">
      <tiny-float-button bottom="0" right="-28px" trigger="" :icon="IconDel"> </tiny-float-button>
    </tiny-float-button>
    <tiny-float-button bottom="-15px" right="280px" trigger="click" :open="true" :icon="IconDel" type="primary">
      <tiny-float-button bottom="0px" right="-28px" trigger="" :icon="IconDel"> </tiny-float-button>
    </tiny-float-button>
  </div>
</template>

<script setup>
import { FloatButton as TinyFloatButton } from '@opentiny/vue'
import { iconDel } from '@opentiny/vue-icon'

const IconDel = iconDel()
</script>

<style scoped>
.parent {
  position: relative;
  height: 100px;
}

.tiny-float-button {
  position: absolute;
}
</style>
