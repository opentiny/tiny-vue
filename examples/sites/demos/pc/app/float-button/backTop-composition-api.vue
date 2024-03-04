<template>
  <div class="parent" ref="dom">
    <div class="child"></div>
    <tiny-float-button
      :back-top="true"
      :visibility-height="199"
      bottom="-200px"
      right="0"
      trigger=""
      :element="dom"
      :icon="IconDel"
    >
    </tiny-float-button>
  </div>
</template>

<script setup>
import { FloatButton as TinyFloatButton } from '@opentiny/vue'
import { iconDel } from '@opentiny/vue-icon'
import { ref } from 'vue'

const IconDel = iconDel()
const dom = ref(null)
</script>

<style scoped>
.parent {
  position: relative;
  height: 100px;
  overflow-y: scroll;
}

.child {
  margin-top: 300px;
}

.tiny-float-button {
  position: absolute;
}
</style>
