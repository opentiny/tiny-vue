<template>
  <div>
    <tiny-button @click="openDrawer('left')"> left </tiny-button>
    <tiny-button @click="openDrawer('right')"> right </tiny-button>
    <tiny-button @click="openDrawer('top')"> top </tiny-button>
    <tiny-button @click="openDrawer('bottom')"> bottom </tiny-button>

    <tiny-drawer title="标题" :placement="placement" v-model:visible="visible">
      <div style="padding: 32px">内容区域</div>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)
const placement = ref('right')

function openDrawer(side) {
  placement.value = side
  visible.value = true
}
</script>
