<template>
  <div data-tag="tiny-drawer" class="tiny-drawer">
    <!-- mask -->
    <transition name="drawer-fade">
      <div
        ref="mask"
        v-if="mask && visible"
        :class="['tiny-drawer__mask', { 'show-bg-color': state.toggle }]"
        :style="{ zIndex }"
        @click="maskClosable && close()"
      ></div>
    </transition>

    <!-- main -->
    <transition :name="`drawer-slide-${placement}`">
      <div
        data-tag="tiny-drawer-main"
        ref="drawerBox"
        :class="[
          'tiny-drawer__main',
          {
            'is-left': placement === 'left',
            'is-right': placement === 'right',
            'is-top': placement === 'top',
            'is-bottom': placement === 'bottom',
            'drag-effects': !state.dragEvent.isDrag,
            'toggle': state.toggle
          },
          customClass
        ]"
        :style="{
          width: ['left', 'right'].includes(placement) ? state.computedWidth : null,
          zIndex
        }"
        v-show="visible"
      >
        <div data-tag="drawer-drag-bar" ref="dragBar" v-if="dragable" :class="['tiny-drawer__drag-bar']"></div>

        <div class="tiny-drawer__box">
          <!-- header -->
          <div data-tag="drawer-header" ref="header" v-if="showHeader" class="tiny-drawer__header-wrapper">
            <slot name="header">
              <div class="tiny-drawer__header">
                <div v-if="title" class="tiny-drawer__title">{{ title }}</div>
                <div class="tiny-drawer__header-right">
                  <slot name="header-right"></slot>
                </div>
              </div>
            </slot>
            <button v-if="showClose" type="button" class="tiny-drawer__headerbtn" aria-label="Close" @click="close">
              <icon-close class="tiny-svg-size tiny-drawer__close" />
            </button>
          </div>

          <!-- body -->
          <div data-tag="drawer-body" ref="body" :class="['tiny-drawer__body', { 'flex flex-col': flex }]">
            <slot></slot>
          </div>

          <!-- footer -->
          <div data-tag="drawer-footer" ref="footer" v-if="showFooter" class="tiny-drawer__footer">
            <slot name="footer">
              <tiny-button type="primary" @click="confirm">{{ t('ui.button.confirm') }}</tiny-button>
              <tiny-button plain @click="close">{{ t('ui.button.cancel') }}</tiny-button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/drawer/vue'
import { setup, props } from '@opentiny/vue-common'
import '@opentiny/vue-theme/drawer/index.less'
import { IconClose } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'

export default {
  components: {
    TinyButton: Button,
    IconClose: IconClose()
  },
  props: [
    ...props,
    'visible',
    'title',
    'showHeader',
    'showFooter',
    'customClass',
    'placement',
    'width',
    'mask',
    'dragable',
    'maskClosable',
    'lockScroll',
    'flex',
    'showClose',
    'zIndex'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
