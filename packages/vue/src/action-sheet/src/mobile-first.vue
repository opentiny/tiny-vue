<template>
  <div data-tag="tiny-action-sheet" class="text-sm">
    <tiny-drawer
      ref="drawer"
      :title="title"
      :mask="mask"
      flex
      :before-close="beforeClose"
      :mask-closable="maskClosable"
      :lock-scroll="lockScroll"
      :show-header="false"
      :custom-class="
        m(
          'rounded-t-lg',
          { 'h-full': fullscreen },
          { 'max-h-[90%]': !fullscreen },
          { 'min-h-[theme(spacing.64)]': type !== 'action' },
          { 'py-4': showHeader && type !== 'action' },
          customClass
        )
      "
      placement="bottom"
      :visible="visible"
      @update:visible="$emit('update:visible', $event)"
    >
      <!-- header -->
      <div
        data-tag="action-sheet-header"
        ref="header"
        v-if="showHeader && type !== 'action'"
        class="flex flex-none leading-6 pb-4 px-4 text-base items-center"
      >
        <div class="flex-1 flex items-center text-left">
          <slot name="header-left"></slot>
        </div>
        <div class="min-w-[50%] max-w-[80%] px-4 text-center truncate font-bold">{{ title }}</div>
        <div class="flex-1 flex items-center justify-end">
          <slot name="header-right">
            <icon-close custom-class="h-5 w-5 cursor-pointer" v-if="showClose" @click="close"></icon-close>
          </slot>
        </div>
      </div>
      <slot name="body-top"></slot>
      <!-- body -->
      <div
        data-tag="action-sheet-body"
        ref="body"
        :class="['flex-auto overflow-auto scrollbar-size-0', { 'flex flex-col': flex }]"
      >
        <template v-if="type === 'action'">
          <div data-tag="action-box" class="flex flex-col h-full text-center">
            <div
              v-if="title"
              data-tag="action-title"
              class="flex-none flex items-center justify-center py-2.5 leading-5 text-sm text-color-none-hover border-b-0.5 border-color-bg-2"
            >
              <span class="px-4">{{ title }}</span>
            </div>
            <div class="flex-auto min-h-[theme(spacing.12)]">
              <div
                v-for="(item, index) in menus"
                :key="index"
                class="flex-none flex items-center justify-center h-12 text-base border-b-0.5 border-color-bg-2 cursor-pointer"
                @click.stop="actionSelectOption(item, index)"
              >
                <slot :data="item" :index="index"
                  ><span class="truncate px-4 text-color-text-primary font-medium">{{ item }}</span></slot
                >
              </div>
            </div>
            <div
              class="flex-none flex items-center justify-center h-16 text-base border-t-8 border-color-bg-2 px-4 cursor-pointer"
              @click.stop="close"
            >
              {{ t('ui.base.cancel') }}
            </div>
          </div>
        </template>
        <template v-else>
          <slot></slot>
        </template>
      </div>
      <slot name="body-bottom"></slot>
      <!-- footer -->
      <div data-tag="action-sheet-footer" ref="footer" v-if="showFooter" class="flex flex-none pt-2 justify-center">
        <slot name="footer" :before-close="beforeClose">
          <tiny-button tiny_mode="mobile-first" class="flex-1 mx-4 sm:mx-0" type="primary" @click="confirm">{{
            t('ui.button.confirm')
          }}</tiny-button>
        </slot>
      </div>
    </tiny-drawer>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/action-sheet/vue'
import { setup, props, defineComponent } from '@opentiny/vue-common'
import { IconClose } from '@opentiny/vue-icon'
import Button from '@opentiny/vue-button'
import Drawer from '@opentiny/vue-drawer'
import BScroll from '@better-scroll/core'

export default defineComponent({
  components: {
    TinyButton: Button,
    TinyDrawer: Drawer,
    IconClose: IconClose()
  },
  emits: ['update:modelValue', 'update:visible', 'hide', 'close', 'click'],
  props: [
    ...props,
    'modelValue',
    'visible',
    'title',
    'showHeader',
    'showFooter',
    'showClose',
    'fullscreen',
    'customClass',
    'menus',
    'type',
    'mask',
    'maskClosable',
    'lockScroll',
    'flex',
    'beforeClose'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { BScroll } })
  }
})
</script>
