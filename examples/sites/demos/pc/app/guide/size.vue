<template>
  <div>
    <tiny-button plain class="auto-size" @click="stepStart">新手引导自定义宽高</tiny-button>
    <tiny-guide :show-step="showStep" :dom-data="domData" width="300" height="200"></tiny-guide>
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
      domData: [
        {
          title: '新手引导标题 1',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.auto-size',
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
