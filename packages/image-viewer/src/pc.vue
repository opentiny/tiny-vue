<template>
  <transition name="viewer-fade">
    <div
      class="tiny-image-viewer__wrapper"
      :style="{ 'z-index': state.zIndex }"
      @mousewheel.prevent
    >
      <div class="tiny-image-viewer__mask"></div>
      <!-- CLOSE -->
      <span class="tiny-image-viewer__btn tiny-image-viewer__close" @click="hide">
        <icon-close class="tiny-svg-size" />
      </span>
      <!-- ARROW -->
      <template v-if="!state.isSingle">
        <span
          class="tiny-image-viewer__btn tiny-image-viewer__prev"
          :class="{ 'is-disabled': !state.infinite && state.isFirst }"
          @click="prev"
        >
          <icon-chevron-left class="tiny-svg-size" />
        </span>
        <span
          class="tiny-image-viewer__btn tiny-image-viewer__next"
          :class="{ 'is-disabled': !state.infinite && state.isLast }"
          @click="next"
        >
          <icon-chevron-right class="tiny-svg-size" />
        </span>
      </template>
      <!-- ACTIONS -->
      <div class="tiny-image-viewer__btn tiny-image-viewer__actions">
        <div class="tiny-image-viewer__actions-inner">
          <icon-zoom-out
            class="tiny-svg-size"
            @click="handleActions('zoomOut')"
          />
          <icon-zoom-in class="tiny-svg-size" @click="handleActions('zoomIn')" />
          <i class="tiny-image-viewer__actions-divider"></i>
          <component
            :is="state.mode.icon"
            class="tiny-svg-size"
            @click="toggleMode"
          />
          <i class="tiny-image-viewer__actions-divider"></i>
          <icon-repeat
            class="tiny-svg-size"
            @click="handleActions('anticlocelise')"
          />
          <icon-refres
            class="tiny-svg-size"
            @click="handleActions('clocelise')"
          />
        </div>
      </div>
      <!-- CANVAS -->
      <div class="tiny-image-viewer__canvas">
        <template v-for="(url, i) in urlList">
          <img
            v-if="i === state.index"
            :ref="`img_${i}`"
            class="tiny-image-viewer__img"
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
</template>

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/image-viewer/vue'
import { props, setup } from '@opentiny/vue-common'
import {
  iconClose,
  iconChevronLeft,
  iconChevronRight,
  iconZoomOut,
  iconZoomIn,
  iconFullscreen,
  iconMinscreen,
  iconRepeat,
  iconRefres
} from '@opentiny/vue-icon'
import '@opentiny/vue-theme/image-viewer/index.css'

export default {
  props: [...props, 'urlList', 'zIndex', 'onSwitch', 'onClose'],
  components: {
    IconClose: iconClose(),
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight(),
    IconZoomOut: iconZoomOut(),
    IconZoomIn: iconZoomIn(),
    IconFullscreen: iconFullscreen(),
    IconMinscreen: iconMinscreen(),
    IconRepeat: iconRepeat(),
    IconRefres: iconRefres()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
