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
import { $prefix, setup, parseVnode, h, defineComponent, isVue2 } from '@mobile-root/common'
import { renderless, api } from './renderless/vue'
import LabelWrap from './label-wrap'
import Tooltip from '../../tooltip'
import { formItemProps } from './form-item'
import type { IFormItemApi, IFormItemInstance } from './form-item'

const $constants = {
  FORM_NAME: 'Form',
  FORM_ITEM_NAME: 'FormItem'
}

export default defineComponent({
  name: $prefix + 'FormItem',
  componentName: 'FormItem',
  components: {
    LabelWrap,
    Tooltip
  },
  props: formItemProps,
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

    const { validateIcon, isErrorInline, isErrorBlock, formInstance } = state
    const isMobile = true
    const classPrefix = isMobile ? 'tiny-mobile-' : 'tiny-'
    const labelSlot = slots.label ? slots.label() : null
    const defaultSlots = slots.default ? slots.default() : null
    const errorSlot = scopedSlots.error && scopedSlots.error(state.validateMessage)
    const formItemClass = `${classPrefix}form-item--${state.sizeClass ? state.sizeClass : 'default'}`
    const isShowError = state.validateState === 'error' && showMessage && formInstance.showMessage
    const validateTag = state.formInstance && state.formInstance.validateTag
    let validateMessage

    const ItemContent = defaultSlots
      ? defaultSlots.map((vnode) => {
          if (isVue2 && !vnode.componentOptions && !validateTag) return vnode

          const item = parseVnode(vnode)
          item.props = item.props || {}
          const { type } = item

          Object.assign(item.props, {
            size: state.formItemSize,
            mini: state.formItemSize === 'mini'
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
          return item
        })
      : null

    const getFormItemContnet = () => {
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
          updateAll: state.formInstance?.labelWidth === 'auto',
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
              labelSlot || label + (state.formInstance?.labelSuffix || '')
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
        h(
          'div',
          {
            class: {
              [`${classPrefix}form-item__content`]: true,
              'is-vertical': isMobile && vertical
            },
            style: !isMobile && state.contentStyle
          },
          [
            LabelContent,
            FormItemContnet,
            validateMessage,
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
})
</script>
