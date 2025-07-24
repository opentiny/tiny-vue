<template>
  <div>
    <tiny-link>
      <template #icon> <icon-fillet-external-link class="tiny-svg-link"></icon-fillet-external-link> </template
      >链接按钮</tiny-link
    >
    <tiny-link>
      <template #icon> <icon-fillet-external-link class="tiny-svg-size"></icon-fillet-external-link> </template
      >链接按钮</tiny-link
    >
    <tiny-link :icon="IconEdit">编辑</tiny-link>
    <tiny-link :icon="IconEdit">禁用</tiny-link>
    <tiny-link>查看<icon-search class="tiny-svg-size"></icon-search> </tiny-link>
    <tiny-link>
      <template #icon> <icon-del class="tiny-svg-size"></icon-del> </template>删除</tiny-link
    >
  </div>
</template>

<script>
import { TinyLink } from '@opentiny/vue'
import { IconEditor, IconSearch, IconDeleteL, IconFilletExternalLink } from '@opentiny/vue-icon'

export default {
  components: {
    TinyLink,
    IconSearch: IconSearch(),
    IconDel: IconDeleteL(),
    IconFilletExternalLink: IconFilletExternalLink()
  },
  data() {
    return {
      IconEdit: IconEditor()
    }
  }
}
</script>

<style scoped>
.tiny-link {
  margin-right: 48px;
}
</style>
