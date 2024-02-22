<template>
  <div>
    <tiny-column-list-item
      v-model="checked"
      :show-checkbox="true"
      image="/static/images/1.jpg"
      :size="size"
      :options="options"
      :flex-grow="[1, 3]"
      class="mb-3"
      @icon-click="iconClick"
    >
      <template #column1>
        <ul>
          <li class="text-sm mb-1 sm:mb-1.5">智能手机智能手机</li>
          <li class="text-color-text-secondary"><span>品牌：</span><span>手机</span></li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-text-secondary pt-0 sm:pt-0.5">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span>256G</span></li>
          <li><span>计量单位：</span><span>1</span></li>
        </ul>
      </template>
    </tiny-column-list-item>
    <tiny-column-list-item image="/static/images/1.jpg" :size="size" :options="options">
      <template #column1>
        <ul>
          <li class="text-sm mb-1 sm:mb-1.5">智能手机智能手机</li>
          <li class="text-color-text-secondary"><span>品牌：</span><span>手机</span></li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-text-secondary pt-0 sm:pt-0.5">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span>256G</span></li>
          <li><span>计量单位：</span><span>1</span></li>
        </ul>
      </template>
      <template #column3>
        <ul class="text-color-text-secondary pt-0 sm:pt-0.5">
          <li class="mb-1 sm:mb-1.5"><span>最小包装数：</span><span>2</span></li>
          <li><span>参考价格：</span><span>8888.55</span></li>
        </ul>
      </template>
      <template #column4>
        <ul class="text-color-text-secondary pt-0 sm:pt-0.5">
          <li class="mb-1 sm:mb-1.5"><span>上架时间：</span><span>2023-01-31</span></li>
          <li><span>顺序号：</span><span>123456</span></li>
        </ul>
      </template>
    </tiny-column-list-item>
  </div>
</template>

<script>
import { ColumnListItem, Modal } from '@opentiny/vue'
import { IconDel, IconWriting, IconAscending, IconShare } from '@opentiny/vue-icon'

export default {
  components: {
    TinyColumnListItem: ColumnListItem
  },
  data() {
    return {
      checked: true,
      size: 'small',
      options: [
        {
          text: '删除',
          icon: IconDel()
        },
        {
          text: '编辑',
          icon: IconWriting()
        },
        {
          text: '排序',
          icon: IconAscending()
        },
        {
          text: '分享',
          icon: IconShare()
        }
      ]
    }
  },
  methods: {
    iconClick(item, index) {
      Modal.message({
        message: `当前点击的是第${index + 1}个图标`,
        status: 'info'
      })
    }
  }
}
</script>
