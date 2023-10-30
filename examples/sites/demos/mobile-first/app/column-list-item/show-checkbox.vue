<template>
  <div>
    <tiny-column-list-item v-model="value" show-checkbox label="1" class="mb-3">
      <template #column1>
        <ul>
          <li class="text-sm mb-1 text-color-text-primary font-medium sm:mb-1.5">智能手机智能手机</li>
          <li class="mb-1 sm:mb-1.5 text-color-fill-secondary">
            <span>品牌：</span><span class="text-color-text-primary">手机</span>
          </li>
          <li class="text-color-fill-secondary">
            <span>编码：</span><span class="text-color-text-primary">HYFVFHJGG1354</span>
          </li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-fill-secondary">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span class="text-color-text-primary">256G</span></li>
          <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span class="text-color-text-primary">1</span></li>
          <li><span>尺寸：</span><span class="text-color-text-primary">6.5英寸</span></li>
        </ul>
      </template>
    </tiny-column-list-item>
    <tiny-column-list-item v-model="value" show-checkbox label="2">
      <template #column1>
        <ul>
          <li class="text-sm text-color-text-primary font-medium mb-1 sm:mb-1.5">智能手机智能手机</li>
          <li class="mb-1 sm:mb-1.5 text-color-fill-secondary">
            <span>品牌：</span><span class="text-color-text-primary">手机</span>
          </li>
          <li class="text-color-fill-secondary">
            <span>编码：</span><span class="text-color-text-primary">HYFVFHJGG1354</span>
          </li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-fill-secondary">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span class="text-color-text-primary">256G</span></li>
          <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span class="text-color-text-primary">1</span></li>
          <li><span>尺寸：</span><span class="text-color-text-primary">6.5英寸</span></li>
        </ul>
      </template>
    </tiny-column-list-item>
  </div>
</template>

<script>
import { ColumnListItem } from '@opentiny/vue'

export default {
  components: {
    TinyColumnListItem: ColumnListItem
  },
  data() {
    return {
      value: ['1']
    }
  }
}
</script>
