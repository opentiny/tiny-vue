import mobile from './mobile.jsx'
import mobileFirst from './mobile-first.jsx'

export default function (props) {
  const { tiny_mode = 'mobile' } = props

  const S = {
    mobile,
    'mobile-first': mobileFirst
  }[tiny_mode]

  return S(props)
}
