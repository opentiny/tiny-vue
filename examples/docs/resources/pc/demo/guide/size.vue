<template>
  <div>
    <tiny-button plain class="h1" @click="stepStart">新手引导自定义宽高</tiny-button>
    <tiny-guide :show-step="showStep" :dom-data="domData" width="300" height="200"></tiny-guide>
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
          title: '新手引导标题1',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.h1',
          button: [
            {
              text: '下一步',
              action: 'next'
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
