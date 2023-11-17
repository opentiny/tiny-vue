import pc from './pc'
import mobile from './mobile'

export default function (props) {
  const {
    tiny_mode = 'pc'
  } = props

  const S = ({
    pc,
    mobile
  })[tiny_mode]

  return (S(props))
}