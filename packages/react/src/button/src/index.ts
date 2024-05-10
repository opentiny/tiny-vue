import pc from './pc.jsx'
import mobile from './mobile.jsx'
import mobileFirst from './mobile-first.jsx'

export default function (props) {
  const { tiny_mode = 'pc' } = props

  const S = {
    pc,
    mobile,
    'mobile-first': mobileFirst
  }[tiny_mode]

  return S(props)
}
