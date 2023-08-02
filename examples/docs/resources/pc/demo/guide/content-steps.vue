<template>
  <div>
    <tiny-button plain @click="stepStart">新手引导开始</tiny-button>
    <tiny-button plain class="box11">新手引导1</tiny-button>
    <tiny-button plain class="box22">新手引导2</tiny-button>
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
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.box11',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ],
          classes: 'only-content'
        },
        {
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.box22',
          button: [
            {
              text: '上一步',
              action: 'back',
              secondary: true
            },
            {
              text: '完成',
              action: 'complete'
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
