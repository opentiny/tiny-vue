import pc from './pc.jsx'

export const $constants = {
  PROCESS_DONE_CLS: 'process-done',
  PROCESS_CUR_CLS: 'process-current',
  PROCESS_WAIT_CLS: 'process-wait',
  PROCESS_DISABLED_CLS: 'process-disabled',
  PROCESS_ERROR_CLS: 'process-error',
  STACK_NODES_MAX: 7,
  LIMITED_STACK_NODES: 3
}

export type ShapeType = 'circle' | 'dot'

export default function (props) {
  const { tiny_mode = 'pc' } = props

  const S = {
    pc
  }[tiny_mode]

  return S(props)
}
