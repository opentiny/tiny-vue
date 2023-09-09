import pc from './pc'
import mobileFirst from './mobile-first'

export default function (props) {
  const {
    tiny_mode = 'pc'
  } = props

  const S = ({
    pc,
    'mobile-first': mobileFirst
  })[tiny_mode]

  return (S(props))
}