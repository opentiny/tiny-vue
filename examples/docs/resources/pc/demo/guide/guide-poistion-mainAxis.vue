<template>
  <div class="guide-content">
    <tiny-button plain class="m1" @click="stepStart1">新手引导1</tiny-button>
    <tiny-button plain class="m2" @click="stepStart2">新手引导2</tiny-button>
    <tiny-button plain class="m3" @click="stepStart3">新手引导3</tiny-button>
    <tiny-guide :show-step="showStep1" :dom-data="m1"></tiny-guide>
    <tiny-guide :show-step="showStep2" :dom-data="m2" :main-axis="50"></tiny-guide>
    <tiny-guide :show-step="showStep3" :dom-data="m3" :main-axis="100"></tiny-guide>
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
      showStep1: false,
      showStep2: false,
      showStep3: false,
      m1: [
        {
          title: '新手引导标题1',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.m1',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ]
        }
      ],
      m2: [
        {
          title: '新手引导标题2',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.m2',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ]
        }
      ],
      m3: [
        {
          title: '新手引导标题3',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.m3',
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
    stepStart1() {
      this.showStep1 = !this.showStep1
    },
    stepStart2() {
      this.showStep2 = !this.showStep2
    },
    stepStart3() {
      this.showStep3 = !this.showStep3
    }
  }
}
</script>
<style scoped>
.guide-content {
  display: flex;
  justify-content: space-around;
}
</style>
