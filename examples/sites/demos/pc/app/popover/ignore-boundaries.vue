<template>
  <div class="container">
    <tiny-popover
      placement="top"
      title="标题"
      :popper-options="{ ignoreBoundaries: true }"
      width="200"
      trigger="manual"
      v-model="visible"
      :append-to-body="false"
    >
      <tiny-popover
        placement="top"
        title="标题"
        :popper-options="{ ignoreBoundaries: true }"
        width="200"
        trigger="manual"
        v-model="visible1"
        :append-to-body="false"
      >
        <tiny-popover
          placement="top"
          title="标题"
          width="200"
          trigger="manual"
          v-model="visible2"
          :append-to-body="false"
          :popper-options="{ ignoreBoundaries: true }"
        >
          <template #reference>
            <div>
              <tiny-button @click="visible2 = !visible2">子级弹框2</tiny-button>
            </div>
          </template>
        </tiny-popover>
        <template #reference>
          <tiny-button @click="visible1 = !visible1">子级弹框1</tiny-button>
        </template>
      </tiny-popover>
      <template #reference>
        <tiny-button class="btn-fjtc" @click="visible = !visible">父级弹框</tiny-button>
      </template>
    </tiny-popover>
  </div>
</template>

<script>
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  },
  data() {
    return {
      visible: false,
      visible1: false,
      visible2: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.visible = true
      setTimeout(() => {
        this.visible1 = true
        setTimeout(() => {
          this.visible2 = true
        }, 1000)
      }, 1000)
    }, 500)
  }
}
</script>

<style scoped>
.container {
  margin: 200px;
}
</style>
