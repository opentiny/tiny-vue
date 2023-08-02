<template>
  <tiny-detail-page v-model="value"></tiny-detail-page>
</template>

<script lang="jsx">
import { DetailPage } from '@opentiny/vue'

export default {
  components: {
    TinyDetailPage: DetailPage
  },
  data() {
    return {
      value: [
        {
          label: '标题1',
          value: '测试文本1'
        },
        {
          label: '标题2',
          value: '测试文本2',
          hidden: true
        },
        {
          label: '标题3',
          value: '测试文本3'
        },
        {
          label: '标题4',
          value: '测试文本4'
        },
        {
          label: '标题5',
          value: '测试文本5'
        }
      ]
    }
  }
}
</script>
