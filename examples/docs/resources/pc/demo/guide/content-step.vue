<template>
  <div>
    <tiny-button plain class="box" @click="stepStart">新手引导</tiny-button>
    <tiny-guide :show-step="showStep" :dom-data="domData"></tiny-guide>
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
      showStep: false,
      domData: [
        {
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.box',
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
