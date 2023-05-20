<template>
  <div>
    <tiny-button @click="showTip">
      手动控制tooltip的显示和隐藏
    </tiny-button>

    <div class="h-[31.25rem] overflow-auto">
      <div class="h-[31.25rem] bg-color-bg-6 overflow-auto">
        <div class="h-[31.25rem] bg-color-info-secondary overflow-auto">
          <div class="h-[31.25rem] bg-color-bg-3">
            <div class="mt-24">
              <tiny-tooltip v-model="showTooltip" content="手动控制模式" :manual="true" :popper-options="{ bubbling: true }">
                <tiny-button type="primary">
                  手动控制模式
                </tiny-button>
              </tiny-tooltip>
            </div>
          </div>

          <div class="h-[50rem]"></div>
        </div>

        <div class="h-[50rem]"></div>
      </div>

      <div class="h-[50rem]"></div>
    </div>
  </div>
</template>

<script>
import { Tooltip, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip,
    TinyButton: Button
  },

  data() {
    return {
      showTooltip: false
    }
  },

  methods: {
    showTip() {
      this.showTooltip = !this.showTooltip
    }
  }
}
</script>

<style lang="css">
body {
  height: 2000px;
}
</style>
