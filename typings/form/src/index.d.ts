declare const _default: import('vue').DefineComponent<
  {
    model: ObjectConstructor
    rules: ObjectConstructor
    inlineMessage: BooleanConstructor
    statusIcon: BooleanConstructor
    showMessage: {
      type: BooleanConstructor
      default: boolean
    }
    validateOnRuleChange: {
      type: BooleanConstructor
      default: boolean
    }
    validatePosition: {
      type: StringConstructor
      default: string
    }
    size: StringConstructor
    disabled: BooleanConstructor
    hideRequiredAsterisk: {
      type: BooleanConstructor
      default: boolean
    }
    labelPosition: {
      type: StringConstructor
      default: string
    }
    labelWidth: {
      type: StringConstructor
      default: string
    }
    labelAlign: {
      type: BooleanConstructor
      default: boolean
    }
    contentOffset: NumberConstructor
    labelSuffix: {
      type: StringConstructor
      default: string
    }
    inline: {
      type: BooleanConstructor
      default: boolean
    }
    responsiveLayout: {
      type: BooleanConstructor
      default: boolean
    }
    validateType: {
      type: StringConstructor
      default: string
    }
    manual: {
      type: BooleanConstructor
      default: boolean
    }
    appendToBody: {
      type: BooleanConstructor
      default: boolean
    }
    popperOptions: {
      type: ObjectConstructor
      default: () => {}
    }
  },
  () => any,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  'validate'[],
  'validate',
  import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps,
  Readonly<
    import('vue').ExtractPropTypes<{
      model: ObjectConstructor
      rules: ObjectConstructor
      inlineMessage: BooleanConstructor
      statusIcon: BooleanConstructor
      validateOnRuleChange: {
        type: BooleanConstructor
        default: boolean
      }
      showMessage: {
        type: BooleanConstructor
        default: boolean
      }
      validatePosition: {
        type: StringConstructor
        default: string
      }
      size: StringConstructor
      disabled: BooleanConstructor
      hideRequiredAsterisk: {
        type: BooleanConstructor
        default: boolean
      }
      labelPosition: {
        type: StringConstructor
        default: string
      }
      labelWidth: {
        type: StringConstructor
        default: string
      }
      labelAlign: {
        type: BooleanConstructor
        default: boolean
      }
      contentOffset: NumberConstructor
      labelSuffix: {
        type: StringConstructor
        default: string
      }
      inline: {
        type: BooleanConstructor
        default: boolean
      }
      responsiveLayout: {
        type: BooleanConstructor
        default: boolean
      }
      validateType: {
        type: StringConstructor
        default: string
      }
      manual: {
        type: BooleanConstructor
        default: boolean
      }
      appendToBody: {
        type: BooleanConstructor
        default: boolean
      }
      popperOptions: {
        type: ObjectConstructor
        default: () => {}
      }
    }>
  > & {
    onValidate?: ((...args: any[]) => any) | undefined
  },
  {
    validatePosition: string
    validateOnRuleChange: boolean
    hideRequiredAsterisk: boolean
    inlineMessage: boolean
    statusIcon: boolean
    labelPosition: string
    labelAlign: boolean
    showMessage: boolean
    disabled: boolean
    labelWidth: string
    labelSuffix: string
    inline: boolean
    responsiveLayout: boolean
    validateType: string
    manual: boolean
    appendToBody: boolean
    popperOptions: Record<string, any>
  }
>
export default _default
