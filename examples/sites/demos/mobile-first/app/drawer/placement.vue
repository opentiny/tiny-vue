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

<script>
import { Drawer, Button } from '@opentiny/vue'

export default {
  components: {
    TinyDrawer: Drawer,
    TinyButton: Button
  },
  data() {
    return {
      visible: false,
      placement: 'right'
    }
  },
  methods: {
    fn(placement) {
      this.placement = placement
      this.visible = true
    }
  }
}
</script>
