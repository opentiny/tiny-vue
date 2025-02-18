<template>
  <div>
    <tiny-button @click="openDrawer('left')"> left </tiny-button>
    <tiny-button @click="openDrawer('right')"> right </tiny-button>
    <tiny-button @click="openDrawer('top')"> top </tiny-button>
    <tiny-button @click="openDrawer('bottom')"> bottom </tiny-button>
    <tiny-drawer
      v-if="placement === 'left' || placement === 'right'"
      title="标题"
      :placement="placement"
      v-model:visible="visible"
      height="600px"
    >
      <div>left 或者 right 内容区域</div>
    </tiny-drawer>

    <tiny-drawer
      v-if="placement === 'top' || placement === 'bottom'"
      title="标题"
      :placement="placement"
      v-model:visible="visible"
      height="400px"
    >
      <div>top 或者 bottom 区域</div>
    </tiny-drawer>
  </div>
</template>

<script>
import { TinyDrawer, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyDrawer,
    TinyButton
  },
  data() {
    return {
      visible: false,
      placement: 'right'
    }
  },
  methods: {
    openDrawer(side) {
      this.placement = side
      this.visible = true
    }
  }
}
</script>
