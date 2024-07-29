<template>
  <!-- 可视区域 -->
  <!-- viewHeight是在使用中设置可视区域高度图 -->
  <div class="virtual-scroll" ref="virtualScroll" @scroll="handleScroll" :style="{ 'minHeight': `${viewHeight}px` }">
    <!-- 内容容器撑起滚动条(使用所有内容高度) -->
    <div class="virtual-scroll-context" :style="{ 'minHeight': `${totalHeight}px` }">
      <!-- 实际渲染区域 (translateY实现上下平移的滚动效果-handlescroll来计算) -->
      <div class="virtual-scroll-wrapper" :style="{ transform: `translateY($translate)px` }">
        <!-- 每项内容 -->
        <div class="virtual-scroll-item" :style="{ 'height': `${itemHeight}px` }" v-for="(item, index) in visibleData"
          :key="item[itemIndex] || index">
          <slot :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/virtual-scroll/vue'

// 通用方式来引入
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  // 组件可能发出的事件
  // emits: ['update:modelValue'],
  // 组件接受的属性
  props: [...props, 'data', 'viewHeight', 'itemHeight', 'itemIndex'],
  // 函数初始化
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
