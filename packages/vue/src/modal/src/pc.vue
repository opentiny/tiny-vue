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
import {
  iconHelpSolid,
  iconSuccess,
  iconError,
  iconInfoSolid,
  iconLoading,
  iconWarning,
  iconClose,
  iconFullscreenLeft,
  iconMinscreenLeft
} from '@opentiny/vue-icon'
import '@opentiny/vue-theme/modal/index.less'
import type { IModalApi } from '@opentiny/vue-renderless/types/modal.type'

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
    'status',
    'title',
    'top',
    'type',
    'vSize',
    'width',
    'zIndex',
    'showClose',
    'messageClosable',
    'confirmContent',
    'cancelContent',
    'confirmBtnProps',
    'cancelBtnProps'
  ],
  emits: [
    'update:modelValue',
    'show',
    'close',
    'confirm',
    'cancel',
    'hide',
    'custom-mousedown',
    'custom-mouseup',
    'custom-mousemove'
  ],
  components: {
    Button
  },
  provide() {
    return { dialog: this }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IModalApi
  },
  render() {
    let { state, scopedSlots, vSize, type, resize, animat, status, showHeader, messageClosable } = this
    let { showFooter, title, message, lockScroll, lockView, mask, _constants: constants, t } = this
    let { confirmContent, cancelContent, confirmBtnProps, cancelBtnProps } = this
    let { zoomLocat, visible, contentVisible, modalTop, isMsg } = state
    let defaultSlot = scopedSlots.default
    let footerSlot = scopedSlots.footer

    const confirmButtonProps =
      Object.prototype.toString.call(confirmBtnProps) === '[object Object]' ? confirmBtnProps : {}
    const cancelButtonProps = Object.prototype.toString.call(cancelBtnProps) === '[object Object]' ? cancelBtnProps : {}
    const confirmButtonText = confirmContent ?? confirmBtnProps.text ?? t('ui.button.confirm')
    const cancelButtonText = cancelContent ?? cancelButtonProps.text ?? t('ui.button.cancel')

    const STATUS_MAPPING_COMPINENT = {
      QUESTION: iconHelpSolid(),
      INFO: iconInfoSolid(),
      SUCCESS: iconSuccess(),
      WARNING: iconWarning(),
      ERROR: iconError(),
      LOADING: iconLoading()
    }

    return h(
      'div',
      {
        class: [
          'tiny-modal',
          'tiny-modal__wrapper',
          `type__${type}`,
          {
            [`size__${vSize}`]: vSize,
            [`status__${status}`]: typeof status === 'string',
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
            class: 'tiny-modal__box',
            style: state.boxStyle,
            ref: 'modalBox'
          },
          [
            showHeader
              ? h(
                  'div',
                  {
                    class: 'tiny-modal__header',
                    on: {
                      mousedown: this.mousedownEvent
                    }
                  },
                  [
                    status
                      ? h(
                          'div',
                          {
                            class: 'tiny-modal__status-wrapper'
                          },
                          [
                            typeof status === 'string'
                              ? h(STATUS_MAPPING_COMPINENT[status.toUpperCase()], {
                                  class: [constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
                                })
                              : h(status, {
                                  class: ['tiny-modal__status-icon']
                                })
                          ]
                        )
                      : null,
                    h(
                      'span',
                      {
                        class: 'tiny-modal__title'
                      },
                      title || t('ui.alert.title')
                    ),
                    resize
                      ? h(zoomLocat ? iconMinscreenLeft() : iconFullscreenLeft(), {
                          class: ['tiny-modal__zoom-btn', 'trigger__btn'],
                          on: {
                            click: this.toggleZoomEvent
                          }
                        })
                      : null,
                    h(iconClose(), {
                      class: ['tiny-modal__close-btn', 'trigger__btn'],
                      on: {
                        click: this.closeEvent
                      }
                    })
                  ]
                )
              : null,
            h(
              'div',
              {
                class: 'tiny-modal__body'
              },
              [
                isMsg && status
                  ? h(
                      'div',
                      {
                        class: 'tiny-modal__status-wrapper'
                      },
                      [
                        typeof status === 'string'
                          ? h(STATUS_MAPPING_COMPINENT[status.toUpperCase()], {
                              class: [constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
                            })
                          : h(status, {
                              class: ['tiny-modal__status-icon']
                            })
                      ]
                    )
                  : null,
                h(
                  'div',
                  {
                    class: 'tiny-modal__content'
                  },
                  defaultSlot
                    ? defaultSlot.call(this, { $modal: this }, h)
                    : [
                        h(
                          'div',
                          { class: 'tiny-modal__text' },
                          typeof message === 'function' ? message.call(this, h) : message
                        )
                      ]
                ),
                messageClosable
                  ? h(
                      'div',
                      {
                        class: 'tiny-modal__close-wrapper'
                      },
                      h(iconClose(), {
                        class: ['tiny-modal__close-btn'],
                        on: {
                          click: this.closeEvent
                        }
                      })
                    )
                  : null
              ]
            ),
            showFooter
              ? h(
                  'div',
                  {
                    class: 'tiny-modal__footer'
                  },
                  footerSlot
                    ? footerSlot.call(this, { $modal: this, beforeClose: this.beforeClose }, h)
                    : [
                        h(
                          Button,
                          {
                            props: {
                              type: 'primary',
                              ...confirmButtonProps
                            },
                            on: {
                              click: this.confirmEvent
                            }
                          },
                          confirmButtonText
                        ),
                        type === 'confirm'
                          ? h(
                              Button,
                              {
                                on: {
                                  click: this.cancelEvent
                                },
                                props: { ...cancelButtonProps }
                              },
                              cancelButtonText
                            )
                          : null
                      ]
                )
              : null,
            !isMsg && resize
              ? h(
                  'span',
                  {
                    class: 'tiny-modal__resize'
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
