<template>
  <div>
    <tiny-button type="primary" @click="stepStart">开始引导</tiny-button>
    <tiny-divider color="var(--ti-common-color-line-dividing)"></tiny-divider>
    <div>
      <tiny-button plain class="guide1-content-steps">新手引导1</tiny-button>
      <tiny-button plain class="guide2-content-steps">新手引导2</tiny-button>
    </div>
    <tiny-guide :show-step="showStep" :dom-data="domData"></tiny-guide>
  </div>
</template>

<script>
import { Guide, Button, Divider } from '@opentiny/vue'

export default {
  components: {
    TinyGuide: Guide,
    TinyButton: Button,
    TinyDivider: Divider
  },
  data() {
    return {
      showStep: false,
      domData: [
        {
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.guide1-content-steps',
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
          domElement: '.guide2-content-steps',
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
