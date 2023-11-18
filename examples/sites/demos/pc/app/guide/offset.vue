<template>
  <div>
    <tiny-alert class="demo-guide-offset" :closable="false" description="type 为默认值 info"></tiny-alert>
    <tiny-button plain @click="stepStartDefault">默认</tiny-button>
    <tiny-button plain @click="stepStartMainAxis">纵轴偏移 50px</tiny-button>
    <tiny-button plain @click="stepStartCrossAxis">横轴偏移 50px</tiny-button>
    <tiny-button plain @click="stepStartAlignmentAxis">对齐轴偏移 50px</tiny-button>
    <tiny-guide :show-step="showStepDefault" :dom-data="domDataDefault"></tiny-guide>
    <tiny-guide :show-step="showStepMainAxis" :dom-data="domDataMainAxis" :main-axis="50"></tiny-guide>
    <tiny-guide :show-step="showStepCrossAxis" :dom-data="domDataCrossAxis" :cross-axis="50"></tiny-guide>
    <tiny-guide :show-step="showStepAlignmentAxis" :dom-data="domDataAlignmentAxis" :alignment-axis="50" pop-position="bottom-start"></tiny-guide>
  </div>
</template>

<script>
import { Guide, Button, Alert } from '@opentiny/vue'

export default {
  components: {
    TinyGuide: Guide,
    TinyButton: Button,
    TinyAlert: Alert
  },
  data() {
    return {
      showStepDefault: false,
      showStepMainAxis: false,
      showStepCrossAxis: false,
      showStepAlignmentAxis: false,
      domDataDefault: [
        {
          title: '新手引导标题1',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.demo-guide-offset',
          button: [
            {
              text: '完成',
              action: 'complete'
            }
          ]
        }
      ],
      domDataMainAxis: [
        {
          title: '新手引导标题2',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.demo-guide-offset',
          button: [
            {
              text: '完成',
              action: 'complete'
            }
          ]
        }
      ],
      domDataCrossAxis: [
        {
          title: '新手引导标题3',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.demo-guide-offset',
          button: [
            {
              text: '完成',
              action: 'complete'
            }
          ]
        }
      ],
      domDataAlignmentAxis: [
        {
          title: '新手引导标题4',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.demo-guide-offset',
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
    stepStartDefault() {
      this.showStepDefault = !this.showStepDefault
    },
    stepStartMainAxis() {
      this.showStepMainAxis = !this.showStepMainAxis
    },
    stepStartCrossAxis() {
      this.showStepCrossAxis = !this.showStepCrossAxis
    },
    stepStartAlignmentAxis() {
      this.showStepAlignmentAxis = !this.showStepAlignmentAxis
    }
  }
}
</script>
