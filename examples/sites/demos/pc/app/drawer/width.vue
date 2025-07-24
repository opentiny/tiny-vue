<template>
  <div>
    <tiny-button @click="openDrawer0" type="primary"> 设置宽度为 900px </tiny-button>
    <tiny-button @click="openDrawer1" plain> 宽度改为 700px </tiny-button>
    <tiny-button @click="openDrawer2" plain> 宽度改为 80% </tiny-button>

    <tiny-drawer title="标题" :width="width" :visible="visible" @update:visible="visible = $event">
      <div>内容区域</div>
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
      width: '900px'
    }
  },
  methods: {
    openDrawer0() {
      this.visible = true
      this.width = '900px'
    },
    openDrawer1() {
      this.width = '700px'
      this.visible = true
    },
    openDrawer2() {
      this.width = '80%'
      this.visible = true
    }
  }
}
</script>
