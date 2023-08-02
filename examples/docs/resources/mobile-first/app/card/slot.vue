<template>
  <div>
    <tiny-card title="内容区为默认插槽">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="标题右侧插槽-title-right">
      <template #title-right>
        <tiny-tag type="success" size="mini" effect="light">大数据</tiny-tag>
      </template>
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="标题左侧插槽-title-left">
      <template #title-left>
        <tiny-tag type="success" size="mini" effect="dark">云计算</tiny-tag>
      </template>
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
    </tiny-card>
    <br />
    <tiny-card title="底部插槽-footer">
      <p>
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
        这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，这是一段长文本内容，
      </p>
      <template #footer>
        <div class="flex">
          <img src="static/images/user-head.png" class="h-9 w-9" alt="user-head" />
          <div class="pl-4">
            <p class="text-sm">刘小华</p>
            <p class="text-xs text-color-text-secondary">2023-03-20 10:10:10</p>
          </div>
        </div>
      </template>
    </tiny-card>
  </div>
</template>

<script>
import { Card, Tag } from '@opentiny/vue'
import { IconDel, IconWriting, IconAscending, IconShare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyCard: Card,
    TinyTag: Tag
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
