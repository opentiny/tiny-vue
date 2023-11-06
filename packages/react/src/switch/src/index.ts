import pc from './pc'

const $constants = {
  PC_PREFIXCLS: 'tiny-switch',
  MOBILE_PREFIXCLS: 'tiny-mobile-switch',
  Mode: 'pc',
  prefixcls(mode) {
    return mode === this.Mode ? this.PC_PREFIXCLS : this.MOBILE_PREFIXCLS
  }
}
export default function (props) {
  const {
    tiny_mode = 'pc',
    _constants = $constants
  } = props || {}

  const defaultProps = Object.assign({
    _constants,
    tiny_mode
  }, props)

  const S = ({
    pc,
  })[tiny_mode]

  return (S && S(defaultProps))
}