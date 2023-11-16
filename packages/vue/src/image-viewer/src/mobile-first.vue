<template>
  <div data-tag="tiny-image-viewer" v-if="state.showImageViewer">
    <transition name="viewer-fade">
      <div
        data-tag="tiny-image-body"
        :class="['left-0 right-0 top-0 bottom-0 hidden sm:flex z-10', modalView ? '' : 'fixed']"
        :style="{ 'z-index': state.zIndex, 'height': modalView && modalHeight + 'px' }"
      >
        <div
          data-tag="tiny-isthumbnail"
          v-if="state.isThumbnail"
          ref="isThumbnailContent"
          :class="[
            'flex-none w-[12%] h-full flex flex-col overflow-y-scroll items-center scrollbar-size-0',
            bgColor !== 'white' ? 'bg-color-icon-primary' : ''
          ]"
          :style="{ backgroundColor: bgColor === 'white' && bgColor }"
        >
          <div
            v-for="(item, i) in state.urlList"
            :key="i"
            class="w-[88%] [&:not(:last-child)]:mb-2 [&:first-of-type]:mt-2"
            :ref="`isThumbnail_${i}`"
          >
            <div
              @click="activeItems(i)"
              :class="['rounded cursor-pointer p-1', { 'bg-color-brand': state.currentIndex === i }]"
            >
              <img class="max-h-full max-w-full aspect-square bg-current rounded" :ref="`img_${i}`" :src="item.url" />
              <div
                :title="item.name || item.url"
                :class="[
                  'px-1 mt-1 sm:text-xs text-sm leading-5 overflow-hidden whitespace-nowrap text-ellipsis',

                  bgColor === 'white'
                    ? state.currentIndex !== i
                      ? 'text-color-text-primary'
                      : 'text-color-bg-1'
                    : 'text-color-bg-1'
                ]"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <div
          data-tag="tiny-is-menu-view"
          v-if="state.isMenuView"
          ref="isMenuViewContent"
          :class="[
            'flex-none w-[12%] h-full flex flex-col overflow-y-scroll items-center scrollbar-size-0',
            bgColor !== 'white' ? 'bg-color-icon-primary' : 'bg-color-bg-1'
          ]"
        >
          <div v-for="(items, i) in state.urlList" :key="i" class="w-[88%]">
            <div
              @click="activeItems(i)"
              :ref="`isMenuView_${i}`"
              :class="[
                '[&:first-of-type]:mt-2.5 rounded cursor-pointer flex mx-1 h-9 items-center',
                { 'bg-color-brand': state.currentIndex === i }
              ]"
            >
              <icon-picture
                :class="[
                  'max-h-full max-w-full w-[9%] h-auto my-2.5 mx-1.5',
                  bgColor === 'white'
                    ? state.menuItemIndex !== i
                      ? 'fill-color-text-primary'
                      : 'fill-color-bg-1'
                    : 'fill-color-bg-1'
                ]"
                :ref="`img_${i}`"
                :src="items.url"
              ></icon-picture>
              <div
                :title="items.name || items.url"
                :class="[
                  'w-[67%] sm:text-xs text-sm leading-5 overflow-hidden whitespace-nowrap text-ellipsis',
                  bgColor === 'white'
                    ? state.menuItemIndex !== i
                      ? 'text-color-text-primary'
                      : 'text-color-bg-1'
                    : 'text-color-bg-1'
                ]"
              >
                {{ items.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex-auto h-full relative" data-tag="tiny-image-tools">
          <div data-tag="tiny-image-pc-mask" class="absolute w-full h-full top-0 left-0 bg-color-bg-7"></div>
          <!-- CLOSE -->
          <span
            data-tag="tiny-image-pc-close"
            v-if="modalView || (!state.isThumbnail && !state.isMenuView)"
            class="z-[1] flex absolute items-center justify-center rounded-full box-border select-none top-20 right-20 bottom-10 text-xl cursor-pointer w-8 h-8 hover:bg-color-text-primary active:bg-color-border fill-color-bg-1 bg-color-border"
            @click="hide"
          >
            <icon-close class="fill-color-bg-1 cursor-pointer" />
          </span>
          <!-- ACTIONS -->
          <div
            data-tag="tiny-image-pc-actions"
            class="z-[1] absolute inline-flex items-center justify-center box-border select-none left-1/2 bottom-12 -translate-x-1/2 w-80 h-10 px-4 bg-color-bg-7 rounded cursor-pointer"
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
              <a
                :href="`${state.currentImg}`"
                target="_blank"
                download
                class="cursor-pointer inline-flex fill-color-bg-1"
                ><icon-download
              /></a>
              <tiny-dropdown show-self-icon class="flex" @item-click="itemClick">
                <span><icon-editor-menu-right></icon-editor-menu-right></span>
                <template #dropdown>
                  <tiny-dropdown-menu checked-status placement="top">
                    <template #default="{ selectedIndex }">
                      <tiny-dropdown-item
                        :current-index="0"
                        :selected="selectedIndex === '0' && !state.isThumbnail && !state.isMenuView"
                        :item-data="!state.isThumbnail && !state.isMenuView ? '4' : '1'"
                        >{{
                          state.isThumbnail || state.isMenuView ? t('ui.imageViewer.hide') : t('ui.imageViewer.show')
                        }}</tiny-dropdown-item
                      >
                      <tiny-dropdown-item
                        :current-index="1"
                        :selected="selectedIndex === '1' || state.isThumbnail"
                        item-data="2"
                        >{{ t('ui.imageViewer.thumbnail') }}</tiny-dropdown-item
                      >
                      <tiny-dropdown-item
                        :current-index="2"
                        :selected="selectedIndex === '2' || state.isMenuView"
                        item-data="3"
                        >{{ t('ui.imageViewer.menu') }}</tiny-dropdown-item
                      >
                    </template>
                  </tiny-dropdown-menu>
                </template>
              </tiny-dropdown>
              <icon-arrow-left
                @click="prev"
                :class="['cursor-pointer', { 'is-disabled': !state.infinite && state.isFirst }]"
              ></icon-arrow-left>
              <icon-arrow-right
                @click="next"
                :class="['cursor-pointer', { 'is-disabled': !state.infinite && state.isLast }]"
              ></icon-arrow-right>
            </div>
          </div>
          <!-- INDEX -->
          <div
            data-tag="tiny-image-pc-index"
            v-if="showIndex"
            class="z-10 absolute flex items-center justify-center box-border left-1/2 -translate-x-1/2 px-4 bottom-5"
          >
            <span class="h-4.5 inline-flex items-center text-color-text-primary">
              {{ state.index + 1 + '/' + state.urlList.length }}
            </span>
          </div>
          <!-- CANVAS -->
          <div data-tag="tiny-image-pc-canvas" class="z-10 flex w-full h-full items-center justify-center">
            <template v-for="(url, i) in state.urlList">
              <img
                v-if="i === state.index"
                :ref="`img_${i}`"
                :key="i"
                :src="state.currentImg"
                :style="state.imgStyle"
                @error="handleImgError"
                @mousedown="handleMouseDown"
                @load="handleImgLoad"
              />
            </template>
          </div>
        </div>
      </div>
    </transition>
    <transition name="viewer-fade">
      <div
        v-if="state.isThumbnail"
        data-tag="tiny-image-mobile-thumbnail-list"
        :class="['w-screen h-screen fixed top-0 left-0 sm:hidden z-40', { 'hidden': state.hiddenThumbnail }]"
      >
        <div class="bg-color-bg-1 w-screen h-screen overflow-auto">
          <div
            class="px-4 pt-4 [&:last-of-type]:mb-5 cursor-pointer"
            v-for="(item, i) in state.urlList"
            :key="i"
            @touchstart="imagePreview(i)"
          >
            <img class="bg-current w-full h-auto" :ref="`img_${i}`" :src="item.url" />
            <div
              :title="item.name || item.url"
              class="color-text-primary mt-2 sm:text-xs text-sm leading-5 overflow-hidden whitespace-nowrap text-ellipsis text-color-text-primary"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        data-tag="tiny-image-mobile-common"
        v-else-if="!state.isMenuView"
        class="w-screen h-screen fixed top-0 left-0 z-50 sm:hidden"
      >
        <div data-tag="tiny-image-mobile-mask" class="absolute w-full h-full top-0 left-0 bg-black"></div>
        <div
          data-tag="tiny-image-mobile-index"
          class="left-0 right-0 top-0 bottom-0 fixed"
          v-swipeleft="swipeLeft"
          v-swiperight="swipeRight"
        >
          <div
            v-if="showIndex"
            class="absolute flex items-center justify-center box-border left-1/2 -translate-x-1/2 px-4 bottom-12"
          >
            <span class="h-4.5 inline-flex items-center text-color-bg-1">
              {{ state.index + 1 + '/' + state.urlList.length }}
            </span>
          </div>
          <div data-tag="tiny-image-mobile-canvas" ref="canvasBox" class="w-full h-full">
            <div
              class="h-full flex items-center justify-center"
              :style="{
                'width': `${state.imageAllWidth}px`,
                'transition-duration': `${state.imageTransition}ms`,
                transform: 'translateX(' + state.imageTransformSize + 'px)'
              }"
            >
              <template>
                <div
                  data-tag="tiny-image-mobile-viewer-item"
                  class="relative shrink h-full"
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
                      :key="i"
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
    <transition name="viewer-fade">
      <div
        data-tag="tiny-image-isthumbnail-preview"
        v-if="state.isImagePreview"
        class="w-screen h-screen fixed top-0 left-0 z-50 sm:hidden"
      >
        <div data-tag="tiny-image-mobile-mask" class="absolute w-full h-full top-0 left-0 bg-black"></div>
        <div
          data-tag="tiny-image-isthumbnail-index"
          class="left-0 right-0 top-0 bottom-0 fixed"
          v-swipeleft="swipeLeft"
          v-swiperight="swipeRight"
        >
          <div
            v-if="showIndex"
            class="absolute flex items-center justify-center box-border left-1/2 -translate-x-1/2 px-4 bottom-12"
          >
            <span class="h-4.5 inline-flex items-center text-color-bg-1">
              {{ state.index + 1 + '/' + state.urlList.length }}
            </span>
          </div>
          <div data-tag="tiny-image-isthumbnail-canvas" ref="thumbnailCanvasBox" class="w-full h-full">
            <div
              class="h-full flex items-center justify-center"
              :style="{
                'width': `${state.imageAllWidth}px`,
                'transition-duration': `${state.imageTransition}ms`,
                transform: 'translateX(' + state.imageTransformSize + 'px)'
              }"
            >
              <template>
                <div
                  data-tag="tiny-image-isthumbnail-viewer-item"
                  class="relative shrink h-full"
                  ref="viewerItem"
                  v-for="(url, i) in state.urlList"
                  :key="i"
                  :style="
                    Object.assign({ width: `${state.imageItemWidth}px` }, i === state.index ? state.imgStyle : '')
                  "
                >
                  <div
                    class="absolute top-0 left-0 right-0 bottom-0 text-center transition-transform inline-block duration-300"
                  >
                    <img
                      :key="i"
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
    <tiny-action-sheet
      type="action"
      :menus="[
        { type: 'save', label: t('ui.imageViewer.save') },
        { type: 'thumbnail', label: t('ui.imageViewer.thumbnail') },
        { type: 'del', label: t('ui.imageViewer.del') }
      ]"
      :visible="state.boxVisibility"
      @update:visible="state.boxVisibility = $event"
      @click="selectOption"
    >
      <template #default="data">
        <div :class="[{ 'text-color-error': data.data.type === 'del' }]">{{ data.data.label }}</div>
      </template>
    </tiny-action-sheet>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/image-viewer/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import touchDeactives from './mobileTouch'
import Dropdown from '@opentiny/vue-dropdown'
import DropdownMenu from '@opentiny/vue-dropdown-menu'
import DropdownItem from '@opentiny/vue-dropdown-item'
import ActionSheet from '@opentiny/vue-action-sheet'

import {
  iconClose,
  iconChevronLeft,
  iconChevronRight,
  iconZoomOut,
  iconZoomIn,
  iconFullscreen,
  iconMinscreen,
  iconRepeat,
  iconRefres,
  iconDel,
  iconDownload,
  iconArrowLeft,
  iconArrowRight,
  iconEditorMenuRight,
  iconPicture
} from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['close', 'update:preview-visible', 'delete', 'change', 'newImageList'],
  props: [
    ...props,
    'urlList',
    'zIndex',
    'onSwitch',
    'onClose',
    'showIndex',
    'isThumbnail',
    'isMenuView',
    'modalView',
    'modalHeight',
    'bgColor'
  ],
  components: {
    TinyActionSheet: ActionSheet,
    TinyDropdown: Dropdown,
    TinyDropdownMenu: DropdownMenu,
    TinyDropdownItem: DropdownItem,
    IconClose: iconClose(),
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight(),
    IconZoomOut: iconZoomOut(),
    IconZoomIn: iconZoomIn(),
    IconFullscreen: iconFullscreen(),
    IconMinscreen: iconMinscreen(),
    IconRepeat: iconRepeat(),
    IconRefres: iconRefres(),
    IconDel: iconDel(),
    IconDownload: iconDownload(),
    IconArrowLeft: iconArrowLeft(),
    IconArrowRight: iconArrowRight(),
    IconEditorMenuRight: iconEditorMenuRight(),
    IconPicture: iconPicture()
  },
  directives: { ...touchDeactives },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
