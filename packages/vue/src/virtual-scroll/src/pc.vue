<template>
  <!-- 可视区域 -->
  <!-- viewHeight是在使用中设置可视区域高度图 -->
  <!-- {{ JSON.stringify(state) }} -->
  <div class="tiny-virtual-scroll" ref="virtualScroll" @scroll="handleScroll"
    :style="{ 'maxHeight': `${viewHeight}px` }">
    <!-- 内容容器撑起滚动条(使用所有内容高度) -->
    <div class="tiny-virtual-scroll-context" :style="{ 'height': `${state.totalHeight}px` }">
      <!-- 实际渲染区域 (translateY实现上下平移的滚动效果-handlescroll来计算) -->
      <div class="tiny-virtual-scroll-wrapper" :style="{ 'transform': `translateY(${state.translate}px)` }">
        <!-- {{ JSON.stringify(state) || 'sasas' }} -->
        <!-- 每项内容 -->
        <div class="tiny-virtual-scroll-item" :style="{ 'height': `${itemHeight}px` }"
          v-for="(item, index) in state.visibleData" :key="item[itemIndex] || index">
          <slot :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/virtual-scroll/vue'
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
