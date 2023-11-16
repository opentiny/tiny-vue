import pc from './pc'
import mobile from './mobile'
import mobileFirst from './mobile-first'

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
