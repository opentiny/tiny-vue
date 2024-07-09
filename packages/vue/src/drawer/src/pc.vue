<template>
  <div data-tag="tiny-drawer" class="tiny-drawer">
    <!-- mask -->
    <transition name="drawer-fade">
      <div
        ref="mask"
        v-if="mask && state.visible"
        class="tiny-drawer__mask show-bg-color"
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
            'toggle': state.visible
          },
          'tiny-drawer-main',
          customClass
        ]"
        :style="{
          width: ['left', 'right'].includes(placement) ? state.computedWidth : null,
          height: ['top', 'bottom'].includes(placement) && dragable && state.height ? state.height + 'px' : null,
          zIndex
        }"
        v-show="state.visible"
      >
        <div
          v-if="dragable"
          data-tag="drawer-drag-bar"
          ref="dragBar"
          :class="[
            'tiny-drawer__drag-bar',
            ['left', 'right'].includes(placement) && 'p-left-Right',
            ['top', 'bottom'].includes(placement) && 'p-top-Bottom',
            placement === 'left' && 'p-left',
            placement === 'right' && 'p-right',
            placement === 'top' && 'p-top',
            placement === 'bottom' && 'p-bottom'
          ]"
        ></div>

        <div class="tiny-drawer__box">
          <!-- header -->
          <div data-tag="drawer-header" ref="header" v-if="showHeader" class="tiny-drawer__header-wrapper">
            <slot name="header">
              <slot-wrapper v-if="customSlots?.header" :node="customSlots.header"></slot-wrapper>
              <div v-else class="tiny-drawer__header">
                <div class="tiny-drawer__header-left">
                  <div v-if="title" class="tiny-drawer__title">{{ title }}</div>
                  <tiny-tooltip v-if="tipsProps" v-bind="tipsProps">
                    <icon-help-circle class="tiny-drawer__help-icon"></icon-help-circle>
                  </tiny-tooltip>
                </div>
                <div class="tiny-drawer__header-right">
                  <slot name="header-right">
                    <slot-wrapper v-if="customSlots?.headerRight" :node="customSlots.headerRight"></slot-wrapper>
                  </slot>
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
            <slot>
              <slot-wrapper :node="customSlots.default"></slot-wrapper>
            </slot>
          </div>

          <!-- footer -->
          <div data-tag="drawer-footer" ref="footer" v-if="showFooter" class="tiny-drawer__footer">
            <slot name="footer">
              <slot-wrapper v-if="customSlots?.footer" :node="customSlots.footer"></slot-wrapper>

              <template v-else>
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
              </template>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/drawer/vue'
import { setup, props, defineComponent, h } from '@opentiny/vue-common'
import '@opentiny/vue-theme/drawer/index.less'
import { iconClose, iconHelpCircle } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import Tooltip from '@opentiny/vue-tooltip'

export default defineComponent({
  components: {
    TinyButton: Button,
    TinyTooltip: Tooltip,
    IconClose: iconClose(),
    IconHelpCircle: iconHelpCircle(),

    // tiny新增: 适配Vue2下, 在模板中渲染VNode
    SlotWrapper: {
      props: ['node'],
      render() {
        const { node } = this
        if (typeof node === 'function') {
          return node(h)
        } else {
          return node
        }
      }
    }
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
    'tipsProps',
    'customSlots'
  ],
  emits: ['update:visible', 'open', 'close', 'confirm', 'drag'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
