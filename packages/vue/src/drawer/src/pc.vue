<template>
  <div data-tag="tiny-drawer" class="tiny-drawer">
    <!-- mask -->
    <transition name="drawer-fade">
      <div
        ref="mask"
        v-if="mask && visible"
        :class="['tiny-drawer__mask', { 'show-bg-color': state.toggle }]"
        :style="{ zIndex }"
        @click="handleClose('mask')"
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
          'tiny-drawer-main',
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
                <div class="tiny-drawer__header-left">
                  <div v-if="title" class="tiny-drawer__title">{{ title }}</div>
                  <tiny-tooltip v-if="tipsProps" v-bind="tipsProps">
                    <icon-help-circle class="tiny-drawer__help-icon"></icon-help-circle>
                  </tiny-tooltip>
                </div>
                <div class="tiny-drawer__header-right">
                  <slot name="header-right"></slot>
                </div>
              </div>
            </slot>
            <button
              v-if="showClose"
              type="button"
              class="tiny-drawer__headerbtn"
              aria-label="Close"
              @click="handleClose('close')"
            >
              <icon-close class="tiny-svg-size tiny-drawer__close" />
            </button>
          </div>

          <!-- body -->
          <div
            data-tag="drawer-body"
            ref="body"
            :class="['tiny-drawer__body', { 'flex flex-col': flex }, 'drawer-body']"
          >
            <slot></slot>
          </div>

          <!-- footer -->
          <div data-tag="drawer-footer" ref="footer" v-if="showFooter" class="tiny-drawer__footer">
            <slot name="footer">
              <tiny-button
                type="primary"
                :class="['tiny-drawer__confirm-btn', { reverse: state.btnOrderReversed }]"
                @click="handleClose('confirm')"
                >{{ t('ui.button.confirm') }}</tiny-button
              >
              <tiny-button
                plain
                :class="['tiny-drawer__cancel-btn', { reverse: state.btnOrderReversed }]"
                @click="handleClose('cancel')"
                >{{ t('ui.button.cancel') }}</tiny-button
              >
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
import { iconClose, iconHelpCircle } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import Tooltip from '@opentiny/vue-tooltip'

export default {
  components: {
    TinyButton: Button,
    TinyTooltip: Tooltip,
    IconClose: iconClose(),
    IconHelpCircle: iconHelpCircle()
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
    'zIndex',
    'beforeClose',
    'tipsProps'
  ],
  emits: ['update:visible', 'open', 'close', 'confirm'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
