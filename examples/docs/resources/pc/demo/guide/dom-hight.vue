<template>
  <div class="tiny-hight-content">
    <tiny-guide :show-step="showStep" :dom-data="domData">
      <template #main>
        <tiny-button plain @click="stepStart">引导</tiny-button>
        <tiny-button plain class="hight1">新手引导1</tiny-button>
        <tiny-button plain class="hight2">新手引导2</tiny-button>
        <tiny-button plain class="hight3">新手引导3</tiny-button>
        <tiny-alert class="hight4" :closable="false" description="type 为默认值 info"></tiny-alert>
        <div class="hight11 tiny-hight-content-item">
          <tiny-alert
            type="success"
            size="large"
            :closable="false"
            description="提交结果页用于反馈一系列操作任务的处理结果。"
          >
            <tiny-button size="mini" type="primary">继续提交</tiny-button>
            <tiny-button size="mini">取消操作</tiny-button>
          </tiny-alert>
        </div>
      </template>
    </tiny-guide>
  </div>
</template>
<script>
import { Guide, Alert, Button } from '@opentiny/vue'

export default {
  components: {
    TinyGuide: Guide,
    TinyAlert: Alert,
    TinyButton: Button
  },
  data() {
    return {
      showStep: false,
      value: false,
      domData: [
        {
          title: '新手引导标题',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.hight1',
          hightBox: ['.hight11', '.hight3', '.hight4'],
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
              text: '下一步',
              action: 'next'
            }
          ]
        },
        {
          title: '新手引导标题',
          text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案',
          domElement: '.hight3',
          hightBox: ['.hight11'],
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
    stepStart() {
      this.value = !this.value
      this.showStep = !this.showStep
    }
  }
}
</script>
<style scoped>
.tiny-hight-content {
  height: 500px;
  widows: 500px;
}
.tiny-hight-content-item {
  margin-top: 200px;
}
.hight4 {
  width: auto;
  height: 36px;
}
</style>
