<script lang="jsx">
import { $prefix, setup, parseVnode, h } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/form-item/vue'
import LabelWrap from './label-wrap.js'
import Tooltip from '@opentiny/vue-tooltip'

const $constants = {
  FORM_NAME: 'Form',
  FORM_ITEM_NAME: 'FormItem'
}

export default {
  name: $prefix + 'FormItem',
  componentName: 'FormItem',
  components: {
    LabelWrap,
    Tooltip
  },
  props: {
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
      type: [String, Boolean],
      default: ''
    },
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
    validateDebounce: Boolean,
    validatePosition: String,
    validateStatus: String,
    validateType: String
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  },
  render() {
    const { state, required, slots, label, scopedSlots, showMessage, inlineMessage } = this
    const isMobile = state.mode === 'mobile'
    const classPrefix = isMobile ? 'tiny-mobile-' : 'tiny-'
    const labelSlot = slots.label ? slots.label() : null
    const defaultSlots = slots.default ? slots.default() : null
    const errorSlot = scopedSlots.error && scopedSlots.error(state.validateMessage)
    const formItemClass = `${classPrefix}form-item--${state.sizeClass ? state.sizeClass : ''}`
    const isShowError = state.validateState === 'error' && showMessage && state.form.showMessage

    const FormContent = defaultSlots
      ? defaultSlots.map((vnode) => {
          const item = parseVnode(vnode)
          const { type, props = {}, data = {} } = item
          if ((props && props['novalid-tip'] != undefined) || (data.attrs && data.attrs['novalid-tip'] !== undefined)) {
            return item
          }

          if (props) {
            Object.assign(item.props, {
              size: state.formItemSize,
              mini: state.formItemSize == 'mini' ? true : false
            })
          }

          if (type && type.name && /button$/.test(type.name.toLowerCase())) {
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

          const formAppendToBody = state.formInstance && state.formInstance.appendToBody
          const appendToBody = typeof this.appendToBody === 'boolean' ? this.appendToBody : typeof formAppendToBody === 'boolean' ? formAppendToBody : true
          const validatePosition = this.validatePosition || (state.formInstance && state.formInstance.validatePosition) || 'top-end'
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

          if (isMobile) {
            const validatePosition = this.validatePosition || state.formInstance.validatePosition || 'right'
            const validateMessage = state.validateMessage ? (
              validatePosition === 'right' ? (
                <div class="tiny-mobile-input-form__error align-right">{state.validateMessage}</div>
              ) : (
                <div class="tiny-mobile-input-form__error align-left">{state.validateMessage}</div>
              )
            ) : null

            return (
              <div>
                {item}
                {validateMessage}
              </div>
            )
          }

          return h(
            'tooltip',
            {
              props: {
                popperClass: `${classPrefix}form__valid`,
                arrowOffset: Number.POSITIVE_INFINITY,
                adjustArrow: true,
                type: 'error',
                disabled: state.getValidateType !== 'tip',
                placement: validatePosition,
                manual: true,
                content: state.validateMessage,
                appendToBody,
                popperOptions,
                modelValue: isShowError ? state.canShowTip : false,
                zIndex: 'relative'
              },
              on: {
                'update:modelValue': (value) => {
                  state.canShowTip = value
                }
              },
              ref: 'tooltip'
            },
            [item]
          )
        })
      : null

    const ErrorContent =
      isShowError && state.getValidateType === 'text'
        ? errorSlot
          ? errorSlot
          : h(
              'div',
              {
                class: {
                  [`${classPrefix}form-item__error`]: true,
                  [`${classPrefix}form-item__error--inline`]:
                    typeof inlineMessage === 'boolean' ? inlineMessage : (state.formInstance && state.formInstance.inlineMessage) || false
                }
              },
              [state.validateMessage]
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
                class: `${classPrefix}form-item__label`,
                style: state.labelStyle,
                attrs: {
                  for: state.labelFor
                }
              },
              labelSlot ? labelSlot : label + state.form.labelSuffix
            )
          : null
      ]
    )

    return h(
      'div',
      {
        class: {
          [`${classPrefix}form-item`]: true,
          [`${classPrefix}form-item--feedback`]: state.formInstance && state.formInstance.statusIcon,
          'is-error': state.validateState === 'error',
          'is-validating': state.validateState === 'validating',
          'is-success': state.validateState === 'success',
          'is-required': state.isRequired || required,
          'is-no-asterisk': state.formInstance && state.formInstance.hideRequiredAsterisk,
          [formItemClass]: true
        }
      },
      [
        LabelContent,
        h(
          'div',
          {
            class: `${classPrefix}form-item__content`,
            style: state.contentStyle
          },
          [
            FormContent,
            h(
              'transition',
              {
                attrs: {
                  name: `${classPrefix}zoom-in-top`
                }
              },
              [ErrorContent]
            )
          ]
        )
      ]
    )
  }
}
</script>
