import pc from './pc.jsx'
import mobile from './mobile.jsx'

export default function (props) {
  const { tiny_mode = 'pc' } = props

  const S = {
    pc,
    mobile
  }[tiny_mode]

  return S(props)
}
