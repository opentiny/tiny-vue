<script>
import { $prefix, setup, h } from '@opentiny/vue-common'
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

const $constants = {
  MODAL_STATUS: {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    LOADING: 'loading'
  },
  NODAL_TYPE: {
    ALERT: 'alert',
    CONFIRM: 'confirm',
    MESSAGE: 'message'
  },
  STATUS_MAPPING_CLASSS: {
    INFO: 'tiny-grid-svg__info',
    SUCCESS: 'tiny-grid-svg__success',
    WARNING: 'tiny-grid-svg__warning',
    ERROR: 'tiny-grid-svg__error',
    LOADING: 'tiny-grid-svg__refresh roll'
  }
}

export default {
  name: $prefix + 'Modal',
  props: {
    _constants: {
      type: Object,
      default: () => $constants
    },
    animat: { type: Boolean, default: () => true },
    beforeClose: Function,
    duration: { type: [Number, String], default: () => 3000 },
    escClosable: Boolean,
    events: Object,
    fullscreen: Boolean,
    height: [Number, String],
    id: String,
    isFormReset: {
      type: Boolean,
      default: true
    },
    lockScroll: Boolean,
    lockView: { type: Boolean, default: () => true },
    marginSize: { type: [Number, String], default: 10 },
    mask: { type: Boolean, default: () => true },
    maskClosable: Boolean,
    message: [String, Function],
    minHeight: { type: [Number, String], default: () => 200 },
    minWidth: { type: [Number, String], default: () => 340 },
    modelValue: Boolean,
    resize: Boolean,
    showFooter: Boolean,
    showHeader: { type: Boolean, default: true },
    status: {
      type: [String, Object],
      default: ''
    },
    title: String,
    top: { type: [Number, String], default: 15 },
    type: { type: String, default: 'alert' },
    vSize: String,
    width: [Number, String],
    zIndex: [Number, String]
  },
  components: {
    Button
  },
  provide() {
    return { dialog: this }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    let {
      state,
      scopedSlots,
      vSize,
      type,
      resize,
      animat,
      status,
      showHeader,
      showFooter,
      title,
      message,
      lockScroll,
      lockView,
      mask,
      _constants: constants,
      t
    } = this
    let { zoomLocat, visible, contentVisible, modalTop, isMsg } = state
    let defaultSlot = scopedSlots.default
    let footerSlot = scopedSlots.footer

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
          'tiny-grid-modal__wrapper',
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
            class: 'tiny-grid-modal__box',
            ref: 'modalBox'
          },
          [
            showHeader
              ? h(
                  'div',
                  {
                    class: 'tiny-grid-modal__header',
                    on: {
                      mousedown: this.mousedownEvent
                    }
                  },
                  [
                    status
                      ? h(
                          'div',
                          {
                            class: 'tiny-grid-modal__status-wrapper'
                          },
                          [
                            typeof status === 'string'
                              ? h(STATUS_MAPPING_COMPINENT[status.toUpperCase()], {
                                  class: [constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
                                })
                              : h(status, {
                                  class: ['tiny-grid-modal__status-icon']
                                })
                          ]
                        )
                      : null,
                    h(
                      'span',
                      {
                        class: 'tiny-grid-modal__title'
                      },
                      title || t('ui.alert.title')
                    ),
                    resize
                      ? h(zoomLocat ? iconMinscreenLeft() : iconFullscreenLeft(), {
                          class: ['tiny-grid-modal__zoom-btn', 'trigger__btn'],
                          on: {
                            click: this.toggleZoomEvent
                          }
                        })
                      : null,
                    h(iconClose(), {
                      class: ['tiny-grid-modal__close-btn', 'trigger__btn'],
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
                class: 'tiny-grid-modal__body'
              },
              [
                isMsg && status
                  ? h(
                      'div',
                      {
                        class: 'tiny-grid-modal__status-wrapper'
                      },
                      [
                        typeof status === 'string'
                          ? h(STATUS_MAPPING_COMPINENT[status.toUpperCase()], {
                              class: [constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]
                            })
                          : h(status, {
                              class: ['tiny-grid-modal__status-icon']
                            })
                      ]
                    )
                  : null,
                h(
                  'div',
                  {
                    class: 'tiny-grid-modal__content'
                  },
                  defaultSlot
                    ? defaultSlot.call(this, { $modal: this }, h)
                    : [h('div', { class: 'tiny-grid-modal__text' }, typeof message === 'function' ? message.call(this, h) : message)]
                )
              ]
            ),
            showFooter
              ? h(
                  'div',
                  {
                    class: 'tiny-grid-modal__footer'
                  },
                  footerSlot
                    ? footerSlot.call(this, { $modal: this, beforeClose: this.beforeClose }, h)
                    : [
                        h(
                          Button,
                          {
                            props: {
                              type: 'primary'
                            },
                            on: {
                              click: this.confirmEvent
                            }
                          },
                          t('ui.button.confirm')
                        ),
                        type === 'confirm'
                          ? h(
                              Button,
                              {
                                on: {
                                  click: this.cancelEvent
                                }
                              },
                              t('ui.button.cancel')
                            )
                          : null
                      ]
                )
              : null,
            !isMsg && resize
              ? h(
                  'span',
                  {
                    class: 'tiny-grid-modal__resize'
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
}
</script>
