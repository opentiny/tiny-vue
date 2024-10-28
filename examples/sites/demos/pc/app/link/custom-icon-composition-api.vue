<template>
  <div>
    <tiny-link>
      <template #icon>
        <tiny-icon-fillet-external-link class="tiny-svg-link"></tiny-icon-fillet-external-link> </template
      >链接按钮</tiny-link
    >
    <tiny-link>
      <template #icon>
        <tiny-icon-fillet-external-link class="tiny-svg-size"></tiny-icon-fillet-external-link> </template
      >链接按钮</tiny-link
    >
    <tiny-link :icon="IconEdit">编辑</tiny-link>
    <tiny-link :icon="IconEdit">禁用</tiny-link>
    <tiny-link>查看<tiny-icon-search class="tiny-svg-size"></tiny-icon-search> </tiny-link>
    <tiny-link>
      <template #icon> <tiny-icon-del class="tiny-svg-size"></tiny-icon-del> </template>删除</tiny-link
    >
  </div>
</template>

<script setup>
import { TinyLink } from '@opentiny/vue'
import { IconEditor, iconSearch, IconDeleteL, iconFilletExternalLink } from '@opentiny/vue-icon'

const IconEdit = IconEditor()
const TinyIconSearch = iconSearch()
const TinyIconDel = IconDeleteL()
const TinyIconFilletExternalLink = iconFilletExternalLink()
</script>

<style scoped>
.tiny-link {
  margin-right: 48px;
}
</style>
