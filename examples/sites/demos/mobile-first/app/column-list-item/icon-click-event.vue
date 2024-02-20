<template>
  <div>
    <tiny-column-list-item
      :image="`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/1.jpg`"
      @icon-click="iconClick"
      :options="options"
    >
      <template #column1>
        <ul>
          <li class="text-sm mb-1 sm:mb-1.5">智能手机智能手机</li>
          <li class="mb-1 sm:mb-1.5 text-color-text-secondary"><span>品牌：</span><span>手机</span></li>
          <li class="text-color-text-secondary"><span>编码：</span><span>HYFVFHJGG1354</span></li>
        </ul>
      </template>
      <template #column2>
        <ul class="text-color-text-secondary">
          <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span>256G</span></li>
          <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span>1</span></li>
          <li><span>尺寸：</span><span>6.5英寸</span></li>
        </ul>
      </template>
      <template #column3>
        <ul class="text-color-text-secondary">
          <li class="mb-1 sm:mb-1.5"><span>最小包装数：</span><span>2</span></li>
          <li class="mb-1 sm:mb-1.5"><span>参考价格：</span><span>8888.55</span></li>
          <li><span>换算率：</span><span>55</span></li>
        </ul>
      </template>
      <template #column4>
        <ul class="text-color-text-secondary">
          <li class="mb-1 sm:mb-1.5"><span>上架时间：</span><span>2023-01-31</span></li>
          <li class="mb-1 sm:mb-1.5"><span>顺序号：</span><span>123456</span></li>
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
      options: [
        {
          text: '删除列表',
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
