<template>
  <tiny-detail-page
    v-model="value"
    title="表头详情"
    text-split="-"
    dialog-title="表头设置"
    label-title="表头名称"
    value-title="是否隐藏"
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
          value: '描述1'
        },
        {
          label: '标题2',
          value: '描述2'
        },
        {
          label: '标题3',
          value: '描述3'
        },
        {
          label: '标题4',
          value: '描述4'
        },
        {
          label: '标题5',
          value: '描述5'
        }
      ]
    }
  }
}
</script>
