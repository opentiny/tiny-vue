import pc from './pc.jsx'

export const $constants = {
  INPUT_PC: 'tiny-input__',
  INPUTGROUP_PC: 'tiny-input-group__',
  INPUT_MOBILE: 'tiny-mobile-input__',
  INPUTGROUP_MOBILE: 'tiny-mobile-input-group__',
  Mode: 'pc',
  inputMode(mode) {
    return mode === this.Mode ? this.INPUT_PC : this.INPUT_MOBILE
  },
  inputGroupMode(mode) {
    return mode === this.Mode ? this.INPUTGROUP_PC : this.INPUTGROUP_MOBILE
  },
  VALIDATE_ICON: {
    Validating: 'tiny-icon-loading',
    Success: 'tiny-icon-circle-check',
    Error: 'tiny-icon-circle-close'
  },
  COMPONENT_NAME: {
    FormItem: 'FormItem'
  },
  MASKSYMBOL: '******'
}
export default function (props) {
  const { tiny_mode = 'pc' } = props

  const S = {
    pc
  }[tiny_mode]

  return S(props)
}
