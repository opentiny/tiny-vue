<template>
  <div>
    <tiny-link :underline="false" :icon="IconEdit"> 编辑 </tiny-link>
    <tiny-link :underline="false" :icon="IconEdit" disabled> 禁用 </tiny-link>
    <tiny-link :underline="false"> 查看<tiny-icon-view class="tiny-svg-size"></tiny-icon-view> </tiny-link>
    <tiny-link :underline="false">
      <template #icon>
        <tiny-icon-del class="tiny-svg-size"></tiny-icon-del>
      </template>
      删除
    </tiny-link>
  </div>
</template>

<script setup lang="jsx">
import { Link as TinyLink } from '@opentiny/vue'
import { iconEdit, iconView, iconDel } from '@opentiny/vue-icon'

const IconEdit = iconEdit()

const TinyIconView = iconView()
const TinyIconDel = iconDel()
</script>

<style>
.tiny-link {
  margin-right: 8px;
}
</style>
