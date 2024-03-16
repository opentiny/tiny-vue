import pc from './pc.jsx'
import mobileFirst from './mobile-first.jsx'

export default function (props) {
  const { tiny_mode = 'pc' } = props

  const S = {
    pc,
    'mobile-first': mobileFirst
  }[tiny_mode]

  return S(props)
}
