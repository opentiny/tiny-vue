<template>
  <div>
    <tiny-button type="primary" @click="stepStart">开始引导</tiny-button>
    <tiny-divider color="var(--ti-common-color-line-dividing)"></tiny-divider>
    <tiny-guide :show-step="showStep" :dom-data="domData"></tiny-guide>
    <div>
      <tiny-button plain class="guide-box1">基础新手引导</tiny-button>
      <tiny-button plain class="guide-box2">带滚动条新手引导</tiny-button>
    </div>
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
          title: '新手引导标题1',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案',
          domElement: '.guide-box1',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ]
        },
        {
          title: '新手引导标题2',
          text: '<div class="scrollBox" style="height:254px">这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案</div>',
          domElement: '.guide-box2',
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
