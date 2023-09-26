import pc from './pc.tsx'
import mobile from './mobile.tsx'
import mobileFirst from './mobile-first.tsx'

export default function (props) {
  const {
    tiny_mode = 'pc'
  } = props

  const S = ({
    pc,
    mobile,
    'mobile-first': mobileFirst
  })[tiny_mode]

  return (S(props))
}