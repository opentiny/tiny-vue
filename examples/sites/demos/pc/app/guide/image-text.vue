<template>
  <div>
    <tiny-button plain class="btn1" @click="stepStart">图文结合新手引导</tiny-button>
    <tiny-guide :show-step="showStep" :dom-data="domData" pop-position="right"></tiny-guide>
  </div>
</template>

<script>
import { Guide, Button } from '@opentiny/vue'

const imgUrl = `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`
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
          title: '图文结合新手引导标题',
          text: `<div><img src="${imgUrl}" style='height:225px;width:100%;padding-bottom:16px' />这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案</div>`,
          domElement: '.btn1',
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
    stepStart() {
      this.showStep = !this.showStep
    }
  }
}
</script>
