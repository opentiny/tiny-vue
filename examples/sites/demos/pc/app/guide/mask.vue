<template>
  <div>
    <tiny-button plain class="guide-box" @click="stepStart">新手引导</tiny-button>
    <tiny-guide :mask="mask" :show-step="showStep" :dom-data="domData"></tiny-guide>
  </div>
</template>

<script>
import { TinyGuide, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyGuide,
    TinyButton
  },
  data() {
    return {
      showStep: false,
      mask: true,
      domData: [
        {
          title: '新手引导标题',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案',
          domElement: '.guide-box',
          button: [
            {
              text: '完成',
              action: 'complete'
            }
          ]
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
