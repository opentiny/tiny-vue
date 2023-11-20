<template>
  <div>
    <tiny-guide :show-step="showStep" :dom-data="domData" pop-position="top">
      <template #main>
        <tiny-button type="primary" @click="stepStart">开始引导</tiny-button>
        <tiny-divider color="var(--ti-common-color-line-dividing)"></tiny-divider>
        <div>
          <tiny-button plain class="hight1">新手引导1</tiny-button>
          <tiny-button plain class="hight2">新手引导2</tiny-button>
          <tiny-button plain class="hight3">新手引导3</tiny-button>
        </div>
        <div>
          <tiny-alert class="hight4" :closable="false" description="type 为默认值 info"></tiny-alert>
          <tiny-alert class="hight5" type="success" size="large" :closable="false" description="提交结果页用于反馈一系列操作任务的处理结果。">
            <tiny-button size="mini" type="primary">继续提交</tiny-button>
            <tiny-button size="mini">取消操作</tiny-button>
          </tiny-alert>
        </div>
      </template>
    </tiny-guide>
  </div>
</template>

<script>
import { Guide, Alert, Button, Divider } from '@opentiny/vue'

export default {
  components: {
    TinyGuide: Guide,
    TinyAlert: Alert,
    TinyButton: Button,
    TinyDivider: Divider
  },
  data() {
    return {
      showStep: false,
      domData: [
        {
          title: '新手引导标题',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.hight1',
          hightBox: ['.hight5', '.hight3', '.hight4'],
          button: [
            {
              text: '下一步',
              action: 'next'
            }
          ]
        },
        {
          title: '新手引导标题',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.hight2',
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
          title: '新手引导标题',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.hight3',
          hightBox: ['.hight5'],
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
