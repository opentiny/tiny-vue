<template>
  <div>
    <transition name="viewer-fade">
      <div class="fixed inset-0 hidden sm:block z-10" @mousewheel.prevent>
        <div class="absolute w-full h-full top-0 left-0 sm:opacity-30 bg-black"></div>
        <!-- CLOSE -->
        <span
          class="flex absolute items-center justify-center rounded-full box-border select-none top-20 right-20 bottom-10 text-xl cursor-pointer w-8 h-8 hover:bg-color-text-primary active:bg-color-border fill-color-bg-1 bg-color-border"
          @click="hide"
        >
          <icon-close class="fill-color-bg-1 cursor-pointer" />
        </span>
        <!-- ARROW -->
        <template v-if="!state.isSingle">
          <span
            class="absolute flex items-center justify-center rounded-full box-border select-none top-1/2 w-8 h-8 bg-color-border -translate-y-1/2 left-20 hover:bg-color-text-primary active:bg-color-border fill-color-bg-1 cursor-pointer"
            :class="{ 'is-disabled': !state.infinite && state.isFirst }"
            @click="prev"
          >
            <icon-chevron-left />
          </span>
          <span
            class="absolute flex items-center justify-center rounded-full box-border select-none top-1/2 w-8 h-8 -translate-y-1/2 right-20 indent-0.5 hover:bg-color-text-primary active:bg-color-border fill-color-bg-1 bg-color-border cursor-pointer"
            :class="{ 'is-disabled': !state.infinite && state.isLast }"
            @click="next"
          >
            <icon-chevron-right />
          </span>
        </template>
        <!-- ACTIONS -->
        <div
          class="z-10 absolute inline-flex items-center justify-center box-border select-none left-1/2 bottom-12 -translate-x-1/2 w-60 h-10 px-4 opacity-50 bg-black rounded-[1.375rem] cursor-pointer"
        >
          <div
            class="w-full h-full text-justify cursor-default text-2xl flex items-center justify-between fill-color-bg-1"
          >
            <component :is="state.mode.icon" class="cursor-pointer" @click="toggleMode" />
            <icon-zoom-out class="cursor-pointer" @click="handleActions('zoomOut')" />
            <icon-zoom-in class="cursor-pointer" @click="handleActions('zoomIn')" />
            <icon-refres class="cursor-pointer" @click="handleActions('clocelise')" />
            <icon-repeat class="cursor-pointer" @click="handleActions('anticlocelise')" />
            <icon-del class="cursor-pointer" @click="handleActions('delImage')" />
            <a :href="`${state.currentImg}`" target="_blank" download class="cursor-pointer inline-flex fill-color-bg-1"
              ><icon-download
            /></a>
          </div>
        </div>
        <!-- INDEX -->
        <div
          v-if="showIndex"
          class="z-10 absolute flex items-center justify-center box-border left-1/2 -translate-x-1/2 px-4 bottom-5"
        >
          <span class="h-4.5 inline-flex items-center text-color-text-primary">
            {{ state.index + 1 + '/' + urlList.length }}
          </span>
        </div>
        <!-- CANVAS -->
        <div class="z-10 flex w-full h-full items-center justify-center">
          <template v-for="(url, i) in urlList">
            <img
              v-if="i === state.index"
              :ref="`img_${i}`"
              :key="url"
              :src="state.currentImg"
              :style="state.imgStyle"
              @error="handleImgError"
              @mousedown="handleMouseDown"
              @load="handleImgLoad"
            />
          </template>
        </div>
      </div>
    </transition>
    <transition name="viewer-fade">
      <div class="w-screen h-screen fixed top-0 left-0 sm:hidden z-50">
        <div class="absolute w-full h-full top-0 left-0 bg-black"></div>
        <div class="w-screen h-11 text-color-bg-1 absolute leading-[2.75rem] text-center">
          <a href="javascript:history.go(-1)" class="!text-inherit"
            ><IconChevronLeft class="fill-color-bg-1 absolute w-4 h-4 top-3.5 left-3" />图片预览</a
          >
        </div>
        <div class="inset-0 fixed" v-swipeleft="swipeLeft" v-swiperight="swipeRight">
          <div
            v-if="showIndex"
            class="absolute flex items-center justify-center box-border left-1/2 -translate-x-1/2 px-4 bottom-12"
          >
            <span class="h-4.5 inline-flex items-center text-color-bg-1">
              {{ state.index + 1 + '/' + urlList.length }}
            </span>
          </div>
          <div ref="canvasBox" class="w-full h-full">
            <div
              class="h-full flex items-center justify-center w-[69.375rem]"
              :style="{
                'width': `${state.iamgeAllWidth}px`,
                'transition-duration': `${state.imageTransition}ms`,
                transform: 'translateX(' + state.imageTransformSize + 'px)'
              }"
            >
              <template>
                <div
                  class="relative shrink h-full w-[23.125rem]"
                  ref="viewerItem"
                  v-for="(url, i) in urlList"
                  :key="i"
                  :style="
                    Object.assign({ width: `${state.imageItemWidth}px` }, i === state.index ? state.imgStyle : '')
                  "
                >
                  <div
                    class="absolute top-0 left-0 right-0 bottom-0 text-center transition-transform inline-block duration-300"
                  >
                    <img
                      v-if="i === state.index"
                      :key="url"
                      :class="[
                        'block w-full h-full object-contain',
                        {
                          'object-fill': state.fullScreen
                        }
                      ]"
                      :ref="`img_${i}`"
                      :src="state.currentImg"
                      :style="state.imgStyle"
                      @mousedown="handleMouseDown"
                      @error="handleImgError"
                      @load="handleImgLoad"
                      @touchstart="touchstart"
                      @touchmove="touchmove"
                      @touchend="touchend"
                    />
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/image-viewer/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import touchDeactives from './mobileTouch'

import {
  IconClose,
  IconChevronLeft,
  IconChevronRight,
  IconZoomOut,
  IconZoomIn,
  IconFullscreen,
  IconMinscreen,
  IconRepeat,
  IconRefres,
  IconDel,
  IconDownload
} from '@opentiny/vue-icon'

export default defineComponent({
  props: [...props, 'urlList', 'zIndex', 'onSwitch', 'onClose', 'showIndex'],
  emits: ['update:preview-visible', 'close', 'change', 'newImageList'],
  components: {
    IconClose: IconClose(),
    IconChevronLeft: IconChevronLeft(),
    IconChevronRight: IconChevronRight(),
    IconZoomOut: IconZoomOut(),
    IconZoomIn: IconZoomIn(),
    IconFullscreen: IconFullscreen(),
    IconMinscreen: IconMinscreen(),
    IconRepeat: IconRepeat(),
    IconRefres: IconRefres(),
    IconDel: IconDel(),
    IconDownload: IconDownload()
  },
  directives: { ...touchDeactives },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
