<template>
  <div class="guide-content">
    <tiny-button @click="stepStart">多步骤新手引导开始</tiny-button>
    <br />
    <tiny-button plain class="guide1-title-steps">新手引导1</tiny-button>
    <br />
    <tiny-button plain class="guide2-title-steps">新手引导2</tiny-button>
    <br />
    <tiny-button plain class="guide3-title-steps">新手引导3</tiny-button>
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
          title: '新手引导标题1',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.guide1-title-steps',
          button: [
            {
              text: '下一步',
              action: 'next',
              classes: 'step'
            }
          ]
        },
        {
          title: '新手引导标题2',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.guide2-title-steps',
          button: [
            {
              text: '上一步',
              action: 'back',
              secondary: true
            },
            {
              text: '下一步',
              action: 'next'
            }
          ]
        },
        {
          title: '新手引导标题3',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.guide3-title-steps',
          button: [
            {
              text: '上一步',
              action: 'back',
              secondary: true
            },
            {
              text: '立即体验',
              action: 'complete',
              secondary: true
            },
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

<style scoped>
.guide-content {
  display: flex;
  flex-direction: column;
}
</style>
