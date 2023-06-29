<template>
  <div>
    <div class="callback-content">我是{{ label }}</div>
    <tiny-button plain class="e1" @click="stepStart">展示之前回调</tiny-button>
    <tiny-button plain class="e2">展示回调</tiny-button>
    <tiny-button plain class="e3">隐藏之前回调</tiny-button>
    <tiny-button plain class="e4">隐藏回调</tiny-button>
    <tiny-button plain class="e5">关闭取消回调</tiny-button>
    <tiny-button plain class="e7">销毁/完成回调</tiny-button>

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
      label: '',
      domData: [
        {
          title: '新手引导标题1',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.e1',
          button: [
            {
              text: '展示之前',
              action: 'next'
            }
          ],
          beforeShow: () => {
            this.label = 'beforeShow'
          }
        },
        {
          title: '新手引导标题2',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.e2',
          button: [
            {
              text: '上一步',
              secondary: true,
              action: 'back'
            },
            {
              text: '下一步',
              action: 'next'
            }
          ],
          show: () => {
            this.label = 'show'
          }
        },
        {
          title: '新手引导标题3',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.e3',
          button: [
            {
              text: '上一步',
              secondary: true,
              action: 'back'
            },
            {
              text: '下一步',
              action: 'next'
            }
          ],
          beforeHide: () => {
            this.label = 'beforeHide'
          }
        },
        {
          title: '新手引导标题4',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.e4',
          button: [
            {
              text: '上一步',
              secondary: true,
              action: 'back'
            },
            {
              text: '隐藏',
              action: 'hide'
            },
            {
              text: '下一步',
              action: 'next'
            }
          ],
          hide: () => {
            this.label = 'hide'
          }
        },
        {
          title: '新手引导标题5',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.e5',
          button: [
            {
              text: '上一步',
              secondary: true,
              action: 'back'
            },
            {
              text: '下一步',
              action: 'next'
            }
          ],
          cancel: () => {
            this.label = 'cancel'
          }
        },
        {
          title: '新手引导标题6',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导',
          domElement: '.e6',
          button: [
            {
              text: '上一步',
              secondary: true,
              action: 'back'
            },
            {
              text: '完成',
              action: 'complete'
            }
          ],
          destroy: () => {
            this.label = 'destroy'
          },
          complete: () => {
            this.label = 'complete'
          }
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
.callback-content {
  margin-bottom: 20px;
}
</style>
