<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <transition name="viewer-fade">
    <div
      class="tiny-mobile-image-viewer__wrapper"
      ref="imagePreview"
      :style="{ 'z-index': zIndex }"
      v-show="state.previewVisible"
      v-swipeleft="swipeLeft"
      v-swiperight="swipeRight"
      @click="handleVisible"
    >
      <div class="tiny-mobile-image-viewer__mask"></div>
      <!-- CLOSE -->
      <span class="tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__close" v-if="closeShow" @click.stop="handleVisible">
        <icon-close class="tiny-svg-size" />
      </span>
      <!-- IMAGEINDEX -->
      <div class="tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__index" v-if="showIndex">
        <slot name="index" :value="state.index + 1">
          <span class="tiny-mobile-image-viewer__index--curren">{{ state.index + 1 }}</span>
          <span>/</span>
          <span class="tiny-mobile-image-viewer__index--total">{{ urlList.length }}</span>
        </slot>
      </div>
      <!-- ARROW -->
      <template v-if="!state.isSingle && arrowShow">
        <span
          class="tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__prev"
          :class="{
            'is-disabled': !state.infinite && state.isFirst,
            'is-arrow-disabled': state.arrowStyle === 'N'
          }"
          @click.stop="swipeRight"
        >
          <icon-chevron-left class="tiny-svg-size" />
        </span>
        <span
          class="tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__next"
          :class="{
            'is-disabled': !state.infinite && state.isLast,
            'is-arrow-disabled': state.arrowStyle === 'Y'
          }"
          @click.stop="swipeLeft"
        >
          <icon-chevron-right class="tiny-svg-size" />
        </span>
      </template>
      <!-- ACTIONS -->
      <div class="tiny-mobile-image-viewer__btn tiny-mobile-image-viewer__actions" v-if="toolShow">
        <div class="tiny-mobile-image-viewer__actions-inner">
          <slot name="tool">
            <icon-zoom-out class="tiny-svg-size" @click.stop="handleActions('zoomOut')" />
            <icon-zoom-in class="tiny-svg-size" @click.stop="handleActions('zoomIn')" />
            <icon-repeat class="tiny-svg-size" @click.stop="handleActions('anticlocelise')" />
            <icon-refres class="tiny-svg-size" @click.stop="handleActions('clocelise')" />
            <icon-del class="tiny-svg-size" v-if="deleteButton" @click.stop="handleDelete()"></icon-del>
          </slot>
        </div>
      </div>
      <!-- CANVAS -->
      <div class="tiny-mobile-image-viewer__canvas">
        <div
          class="tiny-mobile-image-viewer__wrap"
          :style="{
            width: `${state.iamgeAllWidth}px`,
            'transition-duration': `${state.imageTransition}ms`,
            transform: 'translateX(' + state.imageTransformSize + 'px)'
          }"
        >
          <div
            class="tiny-mobile-image-viewer__item"
            v-for="(url, i) in state.urlList"
            :key="i"
            :style="Object.assign({ width: `${state.imageItemWidth}px` }, i === state.index ? state.imgStyle : '')"
          >
            <div class="tiny-mobile-image-viewer__detail" style="transition-duration: 0.3s">
              <img
                :ref="`img_${i}`"
                class="tiny-mobile-image-viewer__img"
                :class="{ 'is-full-screen': state.fullScreen }"
                :key="url"
                :src="url"
                @load="handleImgLoad"
                @error="handleImgError"
                @mousedown="handleMouseDown"
                @touchstart="touchstart"
                @touchmove="touchmove"
                @touchend="touchend"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/image-viewer/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconClose, iconChevronLeft, iconChevronRight, iconZoomOut, iconZoomIn, iconRepeat, iconRefres, iconDel } from '@opentiny/vue-icon'
import touchDeactives from './mobileTouch.js'
import '@opentiny/vue-theme-mobile/image-viewer/index.less'

export default defineComponent({
  props: [
    ...props,
    'urlList',
    'zIndex',
    'onSwitch',
    'onClose',
    'previewVisible',
    'closeShow',
    'arrowShow',
    'toolShow',
    'showIndex',
    'imageFullCurrent',
    'startPosition',
    'asyncClose',
    'deleteButton'
  ],
  components: {
    IconClose: iconClose(),
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight(),
    IconZoomOut: iconZoomOut(),
    IconZoomIn: iconZoomIn(),
    IconRepeat: iconRepeat(),
    IconRefres: iconRefres(),
    IconDel: iconDel()
  },
  directives: { ...touchDeactives },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
