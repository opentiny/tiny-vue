<template>
  <div>
    <tiny-button plain class="over" @click="stepStart">新手引导</tiny-button>
    <tiny-guide
      :show-step="showStep"
      :dom-data="domData"
      :main-axis="50"
      :modal-overlay-opening-padding="size"
      :modal-overlay-opening-radius="size"
    ></tiny-guide>
  </div>
</template>

<script>
import { Guide, Button } from '@opentiny/vue'

export default {
  components: {
    TinyGuide: Guide,
    TinyButton: Button
  },
  data() {
    return {
      size: 20,
      showStep: false,
      domData: [
        {
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.over',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ],
          classes: 'only-content'
        }
      ]
    }
  },
  methods: {
    stepStart() {
      this.showStep = !this.showStep
    }
  }
}
</script>
