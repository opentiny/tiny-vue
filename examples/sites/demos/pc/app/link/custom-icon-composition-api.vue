<template>
  <div>
    <tiny-link>
      <template #icon>
        <tiny-icon-fillet-external-link class="tiny-svg-link"></tiny-icon-fillet-external-link> </template
      >链接按钮</tiny-link
    >
    <tiny-link disabled>
      <template #icon>
        <tiny-icon-fillet-external-link class="tiny-svg-size"></tiny-icon-fillet-external-link> </template
      >链接按钮</tiny-link
    >
    <tiny-link :underline="false" :icon="IconEdit">编辑</tiny-link>
    <tiny-link :underline="false" :icon="IconEdit" disabled>禁用</tiny-link>
    <tiny-link :underline="false">查看<tiny-icon-view class="tiny-svg-size"></tiny-icon-view> </tiny-link>
    <tiny-link :underline="false">
      <template #icon> <tiny-icon-del class="tiny-svg-size"></tiny-icon-del> </template>删除</tiny-link
    >
  </div>
</template>

<script setup>
import { Link as TinyLink } from '@opentiny/vue'
import { IconEditor, iconView, IconDeleteL, iconFilletExternalLink } from '@opentiny/vue-icon'

const IconEdit = IconEditor()
const TinyIconView = iconView()
const TinyIconDel = IconDeleteL()
const TinyIconFilletExternalLink = iconFilletExternalLink()
</script>

<style scoped>
.tiny-link {
  margin-right: 8px;
}
</style>
