import pc from './pc.jsx'

export default function (props) {
  const { tiny_mode = 'pc' } = props

  const S = {
    pc
  }[tiny_mode]

  return S(props)
}
