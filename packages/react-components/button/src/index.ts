import mobileFirst from './mobile-first'
import mobile from './mobile'
import pc from './pc'

export default function (props) {
  const { tiny_mode = 'pc' } = props

  const S = {
    'mobile-first': mobileFirst,
    'mobile': mobile,
    'pc': pc
  }[tiny_mode]

  return S(props)
}
