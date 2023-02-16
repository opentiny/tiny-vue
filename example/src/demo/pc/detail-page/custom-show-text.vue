<template>
  <tiny-detail-page
    v-model="value"
    title="数据："
    text-split="--"
    dialog-title="个性化"
    label-title="文本字段"
    value-title="勾选隐藏"
    tips="不能全部隐藏"
    save-button="修改数据"
    cancel-button="取消修改"
  ></tiny-detail-page>
</template>

<script>
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
