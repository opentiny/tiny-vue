declare const _default: import('vue').DefineComponent<
  {
    _constants: {
      type: ObjectConstructor
      default: () => {
        FORM_NAME: string
        FORM_ITEM_NAME: string
      }
    }
    appendToBody: {
      type: BooleanConstructor
      default: undefined
    }
    error: StringConstructor
    for: StringConstructor
    inlineMessage: {
      type: (StringConstructor | BooleanConstructor)[]
      default: string
    }
    label: StringConstructor
    labelWidth: StringConstructor
    manual: BooleanConstructor
    popperOptions: {
      type: ObjectConstructor
      default: () => {}
    }
    prop: StringConstructor
    required: {
      type: BooleanConstructor
      default: undefined
    }
    rules: (ArrayConstructor | ObjectConstructor)[]
    showMessage: {
      type: BooleanConstructor
      default: boolean
    }
    size: StringConstructor
    validateDebounce: BooleanConstructor
    validatePosition: StringConstructor
    validateStatus: StringConstructor
    validateType: StringConstructor
  },
  any,
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
      _constants: {
        type: ObjectConstructor
        default: () => {
          FORM_NAME: string
          FORM_ITEM_NAME: string
        }
      }
      appendToBody: {
        type: BooleanConstructor
        default: undefined
      }
      error: StringConstructor
      for: StringConstructor
      inlineMessage: {
        type: (StringConstructor | BooleanConstructor)[]
        default: string
      }
      label: StringConstructor
      labelWidth: StringConstructor
      manual: BooleanConstructor
      popperOptions: {
        type: ObjectConstructor
        default: () => {}
      }
      prop: StringConstructor
      required: {
        type: BooleanConstructor
        default: undefined
      }
      rules: (ArrayConstructor | ObjectConstructor)[]
      showMessage: {
        type: BooleanConstructor
        default: boolean
      }
      size: StringConstructor
      validateDebounce: BooleanConstructor
      validatePosition: StringConstructor
      validateStatus: StringConstructor
      validateType: StringConstructor
    }>
  > & {
    onValidate?: ((...args: any[]) => any) | undefined
  },
  {
    required: boolean
    manual: boolean
    popperOptions: Record<string, any>
    _constants: Record<string, any>
    appendToBody: boolean
    inlineMessage: string | boolean
    showMessage: boolean
    validateDebounce: boolean
  }
>
export default _default
