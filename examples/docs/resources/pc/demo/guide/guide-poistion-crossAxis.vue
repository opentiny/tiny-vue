<template>
  <div>
    <div class="guide-title">
      <tiny-button plain @click="stepStart1">新手引导1</tiny-button>
      <tiny-button plain @click="stepStart2">新手引导2</tiny-button>
      <tiny-button plain @click="stepStart3">新手引导3</tiny-button>
    </div>
    <div class="guide-content">
      <tiny-input class="c1" v-model="input" placeholder="请输入内容"></tiny-input>
      <tiny-input class="c2" v-model="input" placeholder="请输入内容"></tiny-input>
      <tiny-input class="c3" v-model="input" placeholder="请输入内容"></tiny-input>
    </div>
    <tiny-guide :show-step="showStep1" :dom-data="cdata1" :cross-axis="10" :pop-position="popPosition"></tiny-guide>
    <tiny-guide :show-step="showStep2" :dom-data="cdata2" :cross-axis="20" :pop-position="popPosition"></tiny-guide>
    <tiny-guide :show-step="showStep3" :dom-data="cdata3" :cross-axis="50" :pop-position="popPosition"></tiny-guide>
  </div>
</template>
<script>
import { Guide, Button, Input } from '@opentiny/vue'

export default {
  components: {
    TinyGuide: Guide,
    TinyButton: Button,
    TinyInput: Input
  },
  data() {
    return {
      showStep1: false,
      showStep2: false,
      showStep3: false,
      input: '',
      popPosition: 'top-end',
      cdata1: [
        {
          title: '新手引导标题1',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.c1',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ]
        }
      ],
      cdata2: [
        {
          title: '新手引导标题2',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.c2',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ]
        }
      ],
      cdata3: [
        {
          title: '新手引导标题3',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.c3',
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
.guide-title {
  display: flex;
  justify-content: space-around;
}
.guide-content {
  display: flex;
  justify-content: space-around;
}
</style>
