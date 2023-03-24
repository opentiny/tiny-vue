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
<script lang="tsx">
import { props, setup, h, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/modal/vue'
import Button from '@opentiny/vue-button'
import { iconFullscreenLeft, iconMinscreenLeft } from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/modal/index.less'

export default defineComponent({
  props: [
    ...props,
    '_constants',
    'animat',
    'beforeClose',
    'duration',
    'escClosable',
    'events',
    'fullscreen',
    'height',
    'id',
    'isFormReset',
    'lockScroll',
    'lockView',
    'marginSize',
    'mask',
    'maskClosable',
    'message',
    'minHeight',
    'minWidth',
    'modelValue',
    'resize',
    'showFooter',
    'showHeader',
    'title',
    'top',
    'type',
    'vSize',
    'width',
    'zIndex'
  ],
  components: {
    Button
  },
  provide() {
    return { dialog: this }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  render() {
    let { state, scopedSlots, vSize, type, resize, animat, showHeader } = this
    let { showFooter, title, message, lockScroll, lockView, mask, t } = this
    let { zoomLocat, visible, contentVisible, modalTop, isMsg } = state
    let defaultSlot = scopedSlots.default
    let footerSlot = scopedSlots.footer

    return h(
      'div',
      {
        class: [
          'tiny-mobile-modal',
          'tiny-mobile-modal__wrapper',
          `type__${type}`,
          {
            [`size__${vSize}`]: vSize,
            is__animat: animat,
            lock__scroll: lockScroll,
            lock__view: lockView,
            is__mask: mask,
            is__maximize: zoomLocat,
            is__visible: contentVisible,
            active: visible
          }
        ],
        style: {
          zIndex: this.state.modalZindex,
          top: modalTop ? `${modalTop}px` : null
        },
        on: {
          click: this.selfClickEvent
        }
      },
      [
        h(
          'div',
          {
            class: 'tiny-mobile-modal__box',
            ref: 'modalBox'
          },
          [
            showHeader
              ? h(
                'div',
                {
                  class: 'tiny-mobile-modal__header',
                  on: {
                    mousedown: this.mousedownEvent
                  }
                },
                [
                  h(
                    'span',
                    {
                      class: 'tiny-mobile-modal__title'
                    },
                    title || t('ui.alert.title')
                  ),
                  resize
                    ? h(zoomLocat ? iconMinscreenLeft() : iconFullscreenLeft(), {
                      class: ['tiny-mobile-modal__zoom-btn', 'trigger__btn'],
                      on: {
                        click: this.toggleZoomEvent
                      }
                    })
                    : null
                ]
              )
              : null,
            h(
              'div',
              {
                class: 'tiny-mobile-modal__body'
              },
              [
                isMsg
                  ? h('div', {
                    class: 'tiny-mobile-modal__status-wrapper'
                  })
                  : null,
                h(
                  'div',
                  {
                    class: 'tiny-mobile-modal__content'
                  },
                  defaultSlot
                    ? defaultSlot.call(this, { $modal: this }, h)
                    : [h('div', { class: 'tiny-mobile-modal__text' }, typeof message === 'function' ? message.call(this, h) : message)]
                )
              ]
            ),
            showFooter
              ? h(
                'div',
                {
                  class: 'tiny-mobile-modal__footer'
                },
                footerSlot
                  ? footerSlot.call(this, { $modal: this, beforeClose: this.beforeClose }, h)
                  : [
                      type === 'confirm'
                        ? h(
                          Button,
                          {
                            props: {
                              class: ['tiny-mobile-button', 'tiny-mobile-button--default']
                            },
                            on: {
                              click: this.cancelEvent
                            }
                          },
                          t('ui.button.cancel')
                        )
                        : null,
                      h(
                        Button,
                        {
                          props: {
                            type: 'primary',
                            class: ['tiny-mobile-button', type !== 'confirm' ? 'tiny-mobile-button__single' : '']
                          },
                          on: {
                            click: this.confirmEvent
                          }
                        },
                        t('ui.button.confirm')
                      )
                    ]
              )
              : null,
            !isMsg && resize
              ? h(
                'span',
                {
                  class: 'tiny-mobile-modal__resize'
                },
                ['wl', 'wr', 'swst', 'sest', 'st', 'swlb', 'selb', 'sb'].map((type) =>
                  h('span', {
                    class: `${type}-resize`,
                    attrs: { 'data-type': type },
                    on: { mousedown: this.dragEvent }
                  })
                )
              )
              : null
          ]
        )
      ]
    )
  }
})
</script>
