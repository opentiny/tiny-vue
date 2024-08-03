<template>
  <!-- 可视区域 -->
  <!-- viewHeight是在使用中设置可视区域高度图 -->
  <!-- {{ JSON.stringify(state) }} -->
  <div class="tiny-virtual-scroll" ref="virtualScroll" @scroll="handleScroll" :style="direction === 'vertical'
      ? { 'maxHeight': `${viewSize}px` }
      : { 'maxWidth': `${viewSize}px`, whiteSpace: 'nowrap' }
    ">
    <!-- 调试用，查看direction属性值 -->
    <!-- 内容容器撑起滚动条(使用所有内容高度) -->
    <div class="tiny-virtual-scroll-context" :style="direction === 'vertical'
        ? { 'height': `${state.totalSize}px` }
        : { 'width': `${state.totalSize}px`, display: 'inline-block' }
      ">
      <!-- 实际渲染区域 (translateY实现上下平移的滚动效果-handlescroll来计算) -->
      <div class="tiny-virtual-scroll-wrapper" :style="direction === 'vertical'
          ? { 'transform': `translateY(${state.translate}px)`, flexDirection: 'column' }
          : {
            'transform': `translateX(${state.translate}px)`,
            flexDirection: 'row',
            display: 'flex',
            width: 'max-content'
          }
        ">
        <!-- {{ JSON.stringify(direction) || 'sasas' }} -->
        <!-- 每项内容 -->
        <div class="tiny-virtual-scroll-item"
          :style="direction === 'vertical' ? { 'height': `${itemSize}px` } : { 'width': `${itemSize}px` }"
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
  props: [...props, 'data', 'viewSize', 'itemSize', 'itemIndex', 'direction'],
  // 函数初始化
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
