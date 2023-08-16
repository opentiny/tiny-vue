<script lang="ts">
import { setup, h, $props, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/modal/vue'
import Button from '@opentiny/vue-button'
import Checkbox from '@opentiny/vue-checkbox'
import CheckboxGroup from '@opentiny/vue-checkbox-group'
import {
  IconHelpSolid,
  IconSuccess,
  IconError,
  IconInfoSolid,
  IconLoading,
  IconWarning,
  IconClose,
  IconFullscreenLeft,
  IconMinscreenLeft,
  IconInfoCircle,
  IconSuccessful,
  IconCueL,
  IconOperationfaildL
} from '@opentiny/vue-icon'

const mode = { tiny_mode: 'mobile-first' }
const STATUS_MAPPING_COMPINENT = {
  QUESTION: IconHelpSolid(mode),
  INFO: IconInfoSolid(mode),
  SUCCESS: IconSuccess(mode),
  WARNING: IconWarning(mode),
  ERROR: IconError(mode),
  LOADING: IconLoading(mode)
}

const MOBILE_STATUS_MAPPING_COMPINENT = {
  INFO: IconInfoCircle(mode),
  SUCCESS: IconSuccessful(mode),
  WARNING: IconCueL(mode),
  ERROR: IconOperationfaildL(mode),
  LOADING: IconLoading(mode)
}

export default defineComponent({
  emits: ['zoom', 'update:modelValue', 'show', 'hide', 'custom-mousemove', 'custom-mouseup', 'custom-mousedown'],
  props: {
    ...$props,
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
    top: { type: [Number, String], default: 80 },
    type: { type: String, default: 'alert' },
    vSize: String,
    width: [Number, String],
    zIndex: [Number, String],
    description: String,
    options: Array,
    showClose: { type: Boolean, default: true },
    confirmContent: String,
    cancelContent: String
  },
  components: {
    Button,
    Checkbox,
    CheckboxGroup
  },
  provide() {
    return { dialog: this }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, extendOptions: { isMobileFirstMode: true } })
  },
  render() {
    let {
      state,
      slots,
      type,
      resize,
      status,
      showHeader,
      showFooter,
      title,
      message,
      mask,
      t,
      description,
      options,
      showClose,
      confirmContent,
      cancelContent,
      m,
      position,
      modalBoxClass
    } = this
    let { zoomLocat, visible, contentVisible, modalTop, isMsg } = state
    let defaultSlot = slots.default
    let footerSlot = slots.footer
    const isBottomRight = position === 'bottom-right'

    const statusIcon = typeof status === 'string' ? STATUS_MAPPING_COMPINENT[status.toUpperCase()] : status
    const mobileStatusIcon = typeof status === 'string' ? MOBILE_STATUS_MAPPING_COMPINENT[status.toUpperCase()] : status

    const messageHtml = typeof message === 'function' ? message.call(this, h) : message
    const optionsComponent = options
      ? h(
          CheckboxGroup,
          {
            props: {
              tiny_mode: 'mobile-first',
              modelValue: state.options,
              vertical: true
            },
            on: {
              'update:modelValue': (value) => {
                state.options = value
              }
            }
          },
          [
            options.map((item) => {
              return h(
                Checkbox,
                {
                  props: {
                    tiny_mode: 'mobile-first',
                    label: item.value,
                    name: item.name
                  }
                },
                [item.label]
              )
            })
          ]
        )
      : null

    const footerBottom = [
      h(
        'div',
        // pc 端按钮
        {
          class: 'hidden sm:block'
        },
        [
          type === 'confirm'
            ? h(
                Button,
                {
                  class: 'ml-2 min-w-[theme(spacing.18)]',
                  props: {
                    tiny_mode: 'mobile-first'
                  },
                  on: {
                    click: this.cancelEvent
                  }
                },
                cancelContent || t('ui.buttonMessage.cancel')
              )
            : null,
          h(
            Button,
            {
              class: 'ml-2 min-w-[theme(spacing.18)]',
              props: {
                tiny_mode: 'mobile-first',
                type: 'primary'
              },
              on: {
                click: this.confirmEvent
              }
            },
            confirmContent || t('ui.buttonMessage.confirm')
          )
        ]
      ),
      h(
        'div',
        // mobile 端按钮
        {
          class: 'flex sm:hidden text-base justify-center'
        },
        [
          type === 'confirm'
            ? h(
                Button,
                {
                  props: {
                    tiny_mode: 'mobile-first',
                    type: 'text',
                    buttonClass: 'flex-1 text-color-text-secondary active:text-color-text-secondary'
                  },
                  on: {
                    click: this.cancelEvent
                  }
                },
                t('ui.button.cancel')
              )
            : null,
          type === 'confirm' ? h('span', { class: 'border-r border-r-color-border-separator' }) : null,
          h(
            Button,
            {
              props: {
                tiny_mode: 'mobile-first',
                type: 'text',
                buttonClass: 'flex-1 text-color-brand active:text-color-brand'
              },
              on: {
                click: this.confirmEvent
              }
            },
            t('ui.button.confirm')
          )
        ]
      )
    ]

    return h(
      'div',
      {
        attrs: { 'data-tag': 'tiny-modal' },
        class: [
          'fixed inset-0 w-full h-full text-sm text-color-text-primary transition-top ease-out duration-300',
          {
            'before:content-[""] before:fixed before:inset-0 before:w-full before:h-full before:opacity-30 before:bg-black':
              mask,
            'before:pointer-events-none pointer-events-none': !mask,
            'hidden': !contentVisible && !visible
          },
          { 'flex items-center top-0 sm:flex-none sm:items-start': type === 'message' }
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
            ref: 'modalBox',
            attrs: { 'data-tag': 'tiny-grid-modal__box' },
            class: m(
              'absolute pointer-events-auto box-border',
              { 'bottom-0 sm:bottom-auto top-auto w-full flex sm:block max-h-full': !isMsg },
              { 'h-full': zoomLocat },
              { 'sm:max-h-[60%]': !zoomLocat },
              { 'sm:w-[theme(spacing.112)]': !zoomLocat && type !== 'message' },
              { 'left-1/2 -translate-x-1/2': !isBottomRight && !zoomLocat },
              { 'sm:top-1/2 sm:-translate-y-1/2': !isBottomRight && !isMsg && !zoomLocat },
              { 'sm:bottom-0 sm:right-0': isBottomRight },
              {
                'rounded m-0 px-3 py-2 sm:px-4 sm:py-2.5 sm:w-auto min-w-[theme(spacing.20)] max-w-[theme(spacing.64)] sm:min-w-[theme(spacing.32)] sm:max-w-[theme(spacing.144)] box-border sm:shadow-lg':
                  type === 'message'
              },
              {
                'bg-color-icon-primary opacity-80 sm:opacity-100 text-white sm:text-color-text-primary sm:bg-white ':
                  type === 'message'
              },
              modalBoxClass
            )
          },
          [
            h(
              'div',
              {
                class: [
                  'flex flex-col w-full max-h-full rounded-lg sm:rounded  overflow-hidden',
                  { 'shadow-xl bg-white': type !== 'message' },
                  { 'h-full': zoomLocat }
                ]
              },
              [
                [
                  showHeader || type === 'message'
                    ? h(
                        'div',
                        {
                          class: [
                            'flex text-sm items-center',
                            { 'px-6 pt-5 sm:pt-6 leading-6': type !== 'message' },
                            {
                              'leading-4 sm:leading-5.5 sm:h-auto bg-color-icon-primary text-white sm:text-color-text-primary sm:bg-white':
                                type === 'message'
                            }
                          ],
                          on: {
                            mousedown: this.mousedownEvent
                          }
                        },
                        [
                          status
                            ? [
                                h(statusIcon, {
                                  props: {
                                    tiny_mode: 'mobile-first'
                                  },
                                  class: m(
                                    'hidden sm:inline-block mr-2 fill-current',
                                    type === 'message' ? 'h-4.5 w-4.5 self-start shrink-0 mt-0.5' : 'h-6 w-auto',
                                    { 'text-color-success': status === 'success' },
                                    { 'text-color-info-secondary': ['info', 'question'].includes(status) },
                                    { 'text-color-warning': status === 'warning' },
                                    { 'text-color-error': status === 'error' }
                                  )
                                }),
                                h(mobileStatusIcon, {
                                  props: {
                                    tiny_mode: 'mobile-first'
                                  },
                                  class: [
                                    'inline-block sm:hidden mr-1.5 fill-current',
                                    type === 'message' ? 'w-5 h-5 self-center shrink-0' : 'h-6 w-auto'
                                  ]
                                })
                              ]
                            : null,
                          h(
                            'span',
                            {
                              class: [
                                'flex-auto text-base sm:text-sm',
                                { 'truncate font-semibold': type !== 'message' },
                                {
                                  'line-clamp-2 text-center leading-5.5 sm:text-left': type === 'message'
                                }
                              ],
                              attrs: {
                                title: title || t('ui.alert.title')
                              }
                            },
                            type === 'message' ? messageHtml : title || t('ui.alert.title')
                          ),
                          resize
                            ? h(zoomLocat ? IconMinscreenLeft(mode) : IconFullscreenLeft(mode), {
                                class: 'flex-none h-4 w-4 ml-2 cursor-pointer',
                                on: {
                                  click: this.toggleZoomEvent
                                }
                              })
                            : null,
                          showClose
                            ? h(IconClose(mode), {
                                class: [
                                  'flex-none cursor-pointer',
                                  { 'h-4 w-4 ml-2': type !== 'message' },
                                  {
                                    'hidden sm:block w-4 h-4 ml-4 self-start sm:mt-0.5 sm:translate-y-px':
                                      type === 'message'
                                  }
                                ],
                                on: {
                                  click: this.closeEvent
                                }
                              })
                            : null
                        ]
                      )
                    : null,
                  type !== 'message'
                    ? h(
                        'div',
                        {
                          class: 'flex-auto flex mx-6 mt-4 mb-5 sm:my-6 leading-5 overflow-auto'
                        },
                        [
                          status ? h('div', { class: 'hidden sm:block mr-8' }) : null,
                          h(
                            'div',
                            { class: 'w-full' },
                            defaultSlot
                              ? defaultSlot.call(this, { $modal: this }, h)
                              : [
                                  h(
                                    'div',
                                    {
                                      class: ['leading-normal', { 'font-medium': description }]
                                    },
                                    messageHtml
                                  ),
                                  description
                                    ? h(
                                        'div',
                                        {
                                          class: 'leading-normal pt-2 sm:pt-4 text-color-text-secondary'
                                        },
                                        [description]
                                      )
                                    : null,
                                  options
                                    ? h(
                                        'div',
                                        {
                                          class: 'leading-normal pt-2 sm:pt-4 text-color-text-secondary'
                                        },
                                        [optionsComponent]
                                      )
                                    : null
                                ]
                          )
                        ]
                      )
                    : null,
                  showFooter
                    ? h(
                        'div',
                        {
                          class:
                            'py-2.5 sm:pb-6 sm:pt-0 px-6 border-t-0.5 sm:border-t-0 border-color-border-separator text-center sm:text-right'
                        },
                        footerSlot
                          ? footerSlot.call(this, { $modal: this, beforeClose: this.beforeClose }, h)
                          : footerBottom
                      )
                    : null,
                  !isMsg && resize
                    ? h(
                        'span',
                        ['wl', 'wr', 'swst', 'sest', 'st', 'swlb', 'selb', 'sb'].map((type) => {
                          return h('span', {
                            attrs: {
                              'data-type': type
                            },
                            on: {
                              mousedown: this.dragEvent
                            }
                          })
                        })
                      )
                    : null
                ]
              ]
            )
          ]
        )
      ]
    )
  }
})
</script>
