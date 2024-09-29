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
import {
  $props,
  $prefix,
  setup,
  parseVnode,
  h,
  defineComponent,
  isVue2,
  hooks,
  stringifyCssClass,
  deduplicateCssClass
} from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/form-item/vue'
import LabelWrap from './label-wrap'
import Tooltip from '@opentiny/vue-tooltip'
import { iconError } from '@opentiny/vue-icon'
import type { IFormItemApi, IFormItemInstance } from '@opentiny/vue-renderless/types/form-item.type'

const $constants = {
  FORM_NAME: 'Form',
  FORM_ITEM_NAME: 'FormItem'
}

export default defineComponent({
  name: $prefix + 'FormItem',
  componentName: 'FormItem',
  components: {
    LabelWrap,
    Tooltip,
    IconError: iconError()
  },
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    appendToBody: {
      type: Boolean,
      default: undefined
    },
    error: String,
    for: String,
    inlineMessage: {
      type: Boolean,
      default: undefined
    },
    messageType: String,
    label: String,
    labelWidth: String,
    manual: Boolean,
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    validateDisabled: Boolean,
    validateDebounce: Boolean,
    validatePosition: String,
    validateStatus: String,
    validateType: String,
    validateIcon: {
      type: Object,
      default: null
    },
    ellipsis: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    extra: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IFormItemApi
  },

  render() {
    const {
      state,
      required,
      slots,
      label,
      scopedSlots,
      showMessage,
      inlineMessage,
      ellipsis,
      vertical,
      handleLabelMouseenter,
      handleMouseleave
    } = this as unknown as IFormItemInstance

    const { validateIcon, isErrorInline, isErrorBlock, tooltipType } = state
    const isMobile = state.mode === 'mobile'
    const classPrefix = isMobile ? 'tiny-mobile-' : 'tiny-'
    const labelSlot = slots.label ? slots.label() : null
    const defaultSlots = slots.default ? slots.default() : null
    const errorSlot = scopedSlots.error && scopedSlots.error(state.validateMessage)
    const formItemClass = `${classPrefix}form-item--${state.sizeClass ? state.sizeClass : 'default'}`
    const isShowError = state.validateState === 'error' && showMessage && state.form.showMessage
    const validateTag = state.formInstance?.validateTag
    const wrapFragment = state.formInstance?.wrapFragment
    let validateMessage

    const formAppendToBody = state.formInstance?.appendToBody
    const appendToBody =
      typeof this.appendToBody === 'boolean'
        ? this.appendToBody
        : typeof formAppendToBody === 'boolean'
        ? formAppendToBody
        : true
    const validatePosition = this.validatePosition || state.formInstance?.validatePosition || 'top-end'

    const popperOptions = {
      ...state.formInstance.popperOptions,
      ...this.popperOptions,
      forceAbsolute: !appendToBody,
      onUpdate: (options) => {
        const popper = options.instance._popper
        const translate3d = popper.style.transform
        const matchTranslate = translate3d.match(/translate3d\((\w+)px, (\w+)px, (\w+)px\)/)

        if (!Array.isArray(matchTranslate)) {
          return
        }

        const [x, y, z] = matchTranslate.slice(1)

        popper.style.transform = `translate3d(${x}px, ${parseInt(y, 10)}px, ${z}px)`
      }
    }
    const validateIconNode = validateIcon ? h(validateIcon, { class: 'tooltip-validate-icon' }) : null

    const ItemContent = defaultSlots
      ? defaultSlots.map((vnode) => {
          if (isVue2 && !vnode.componentOptions && !validateTag) return vnode

          let item = parseVnode(vnode)
          item.props = item.props || {}
          const { type } = item
          // 修复production模式下动态切换size失败问题
          item.dynamicProps = item.dynamicProps || []
          if (!item.dynamicProps.includes('size')) {
            item.dynamicProps.push('size')
          }
          Object.assign(item.props, {
            size: state.formItemSize,
            mini: state.formItemSize === 'mini' || Boolean(item.props.mini)
          })

          if (type && type.name && type.name.toLowerCase().endsWith('button')) {
            return item
          }

          const propsData = item.props

          if (propsData) {
            if (!state.isRequired) {
              // 兼容 2.0 组件 validation 是否有 required
              state.validationRequired = propsData.validation && !!propsData.validation.required
            }
            // 如果为 2.0 的验证 不会使用 toolltip 组件
            if (propsData.validation) {
              return item
            }
          }
          if (isMobile) {
            return h(
              'div',
              {
                class: `${classPrefix}form-item__value`,
                style: state.valueStyle
              },
              [item]
            )
          }

          if (!isVue2) {
            if (item.type === hooks.Fragment) {
              // 在Vue3默认使用div包裹片段元素，也可以配置为其它标签
              if (wrapFragment) {
                item = h(wrapFragment, [item])
              }
            } else if (item.type === hooks.Text) {
              item = h('span', [item])
            }
          }

          // 兼容重构前逻辑，给item子项添加类名
          let data
          if (isVue2) {
            if (!item.data) {
              item.data = {}
            }
            data = item.data
          } else {
            if (!item.props) {
              item.props = {}
            }
            data = item.props
          }
          data.class = deduplicateCssClass('tiny-tooltip' + stringifyCssClass(data.class))
          return item
        })
      : null

    state.isMultiple = ItemContent?.length > 1

    const getFormItemContnet = () => {
      if (isMobile) {
        const validatePosition = this.validatePosition || state.formInstance.validatePosition || 'right'
        validateMessage = state.validateMessage ? (
          validatePosition === 'right' ? (
            <div class="tiny-mobile-input-form__error align-right">{state.validateMessage}</div>
          ) : (
            <div class="tiny-mobile-input-form__error align-left">{state.validateMessage}</div>
          )
        ) : null
        return ItemContent
      }

      return ItemContent
    }

    const FormItemContnet = ItemContent ? getFormItemContnet() : null
    const ErrorContent =
      isShowError && state.getValidateType === 'text'
        ? errorSlot ||
          h(
            'div',
            {
              class: {
                [`${classPrefix}form-item__error`]: true,
                [`${classPrefix}form-item__error--inline`]: isErrorInline,
                [`${classPrefix}form-item__error--block`]: isErrorBlock
              },
              attrs: {
                title: [state.validateMessage]
              }
            },
            [
              validateIcon ? h(validateIcon, { class: 'validate-icon' }) : null,
              <span class={`${classPrefix}form-item__validate-message`}>{state.validateMessage}</span>
            ]
          )
        : null
    const LabelContent = h(
      'label-wrap',
      {
        props: {
          isAutoWidth: state.labelStyle && state.labelStyle.width === 'auto',
          updateAll: state.form.labelWidth === 'auto',
          isMobile: state.mode === 'mobile'
        }
      },
      [
        labelSlot || label
          ? h(
              'label',
              {
                class: {
                  [`${classPrefix}form-item__label`]: true,
                  'is-ellipsis': isMobile && ellipsis
                },
                style: state.labelStyle,
                attrs: {
                  for: state.labelFor
                },
                on: {
                  mouseenter: handleLabelMouseenter,
                  mouseleave: handleMouseleave
                }
              },
              labelSlot || label + state.form.labelSuffix
            )
          : null
      ]
    )

    const ExtraTip = this.extra
      ? h(
          'div',
          {
            class: {
              [`${classPrefix}form-item__extra-tip`]: true
            }
          },
          this.extra
        )
      : null

    return h(
      'div',
      {
        class: {
          [`${classPrefix}form-item`]: true,
          [`${classPrefix}form-item--feedback`]: state.formInstance && state.formInstance.statusIcon,
          'is-error': state.validateState === 'error',
          'is-text': state.getValidateType === 'text',
          'is-validating': state.validateState === 'validating',
          'is-success': state.validateState === 'success',
          'is-required': state.isRequired || required,
          'is-no-asterisk': state.hideRequiredAsterisk,
          [formItemClass]: true
        }
      },
      [
        !isMobile ? LabelContent : null,
        this.showMessage &&
          !isMobile &&
          h('tooltip', {
            props: {
              popperClass: `${classPrefix}form__valid`,
              arrowOffset: 0,
              adjustArrow: true,
              type: tooltipType,
              disabled: state.getValidateType !== 'tip',
              placement: validatePosition,
              manual: true,
              appendToBody,
              popperOptions,
              modelValue: isShowError ? state.canShowTip : false,
              zIndex: 'relative',
              renderContent() {
                let tooltipContent
                if (errorSlot) {
                  tooltipContent = [errorSlot]
                } else {
                  tooltipContent = [
                    validateIconNode,
                    <span class={`${classPrefix}form-item__validate-message`}>{state.validateMessage}</span>
                  ]
                }

                return tooltipContent
              }
            },
            on: {
              'update:modelValue': (value) => {
                state.canShowTip = value
              }
            },
            ref: 'tooltip'
          }),
        h(
          'div',
          {
            class: {
              [`${classPrefix}form-item__content`]: true,
              'is-vertical': isMobile && vertical
            },
            style: !isMobile && state.contentStyle,
            ref: 'content'
          },
          [
            isMobile ? LabelContent : null,
            FormItemContnet,
            isMobile ? validateMessage : null,
            h(
              'transition',
              {
                attrs: {
                  name: `${classPrefix}zoom-in-top`
                }
              },
              [ErrorContent]
            ),
            isMobile ? null : ExtraTip
          ]
        )
      ]
    )
  }
})
</script>
