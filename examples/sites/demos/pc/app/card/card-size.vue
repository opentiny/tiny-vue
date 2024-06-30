<template>
  <div class="card-wrap">
    <tiny-card title="这是mini尺寸卡片" size="mini" :options="options">
      <p>这是一段长文本内容，这是一段长文本内容</p>
    </tiny-card>
    <br />
    <tiny-card title="这是small尺寸卡片" size="small" :options="options">
      <p>这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容</p>
    </tiny-card>
    <br />
    <tiny-card title="这是medium尺寸卡片" size="medium" :options="options">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="这是large尺寸卡片" size="large" :options="options">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
  </div>
</template>

<script>
import { Card } from '@opentiny/vue'
import { IconDel, IconWriting, IconAscending, IconShare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyCard: Card
  },
  data() {
    return {
      options: [
        {
          text: '删除列表',
          icon: IconDel()
        },
        {
          text: '编辑',
          icon: IconWriting(),
          disabled: true
        },
        {
          text: '排序',
          icon: IconAscending()
        },
        {
          text: '分享',
          icon: IconShare(),
          disabled: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-wrap {
  background: #f5f5f5;
  padding: 16px;
}
</style>
