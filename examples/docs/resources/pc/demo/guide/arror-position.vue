<template>
  <div>
    <div class="guide-content">
      <tiny-alert
        class="pos"
        :closable="false"
        type="success"
        size="large"
        description="提交结果页用于反馈一系列操作任务的处理结果。"
      >
      </tiny-alert>
    </div>
    <div class="guide-title">
      <tiny-button plain @click="stepStart1">默认</tiny-button>
      <tiny-button plain @click="stepStart2">上居中</tiny-button>
      <tiny-button plain @click="stepStart3">右居中</tiny-button>
      <tiny-button plain @click="stepStart4">独立位置上居中</tiny-button>
    </div>
    <tiny-guide :show-step="showStep1" :dom-data="data1"></tiny-guide>
    <tiny-guide :show-step="showStep2" :dom-data="data2" pop-position="top"></tiny-guide>
    <tiny-guide :show-step="showStep3" :dom-data="data3" pop-position="right"></tiny-guide>
    <tiny-guide :show-step="showStep4" :dom-data="data4"></tiny-guide>
  </div>
</template>
<script>
import { Alert, Button, Guide } from '@opentiny/vue'

export default {
  components: {
    TinyAlert: Alert,
    TinyButton: Button,
    TinyGuide: Guide
  },
  data() {
    return {
      showStep1: false,
      showStep2: false,
      showStep3: false,
      showStep4: false,
      data1: [
        {
          title: '新手引导标题1',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.pos',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ]
        }
      ],
      data2: [
        {
          title: '新手引导标题2',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.pos',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ]
        }
      ],
      data3: [
        {
          title: '新手引导标题3',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.pos',
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ]
        }
      ],
      data4: [
        {
          popPosition: 'top',
          title: '新手引导标题4',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.pos',
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
    },
    stepStart4() {
      this.showStep4 = !this.showStep4
    }
  }
}
</script>
<style scoped>
.guide-title {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 600px;
}
.guide-content {
  width: 600px;
}
</style>
