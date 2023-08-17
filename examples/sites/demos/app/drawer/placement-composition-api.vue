<template>
  <div>
    <tiny-button @click="fn('left')"> left </tiny-button>
    <tiny-button @click="fn('right')"> right </tiny-button>
    <tiny-button @click="fn('top')"> top </tiny-button>
    <tiny-button @click="fn('bottom')"> bottom </tiny-button>

    <tiny-drawer title="标题" :placement="placement" :visible="visible" @update:visible="visible = $event">
      <div style="height: 200px; text-align: center">内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
const placement = ref('right')

function fn(placement) {
  placement.value = placement
  visible.value = true
}
</script>
