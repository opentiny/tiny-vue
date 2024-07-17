import { format } from '../common/date'

export const getDate = (dateTime) => {
  return {
    date: format(dateTime, 'yyyy/MM/dd'),
    time: format(dateTime, 'hh:mm:ss')
  }
}

export const getStatus =
  ({ state, t }) =>
  (value) => {
    const status = state.current - value

    return status > 0 ? t('ui.steps.done') : status === 0 ? t('ui.steps.doing') : t('ui.steps.wait')
  }

export const handleClick =
  ({ emit, state }) =>
  ({ index, node }) => {
    emit('click', state.isReverse ? state.nodes.length - index - 1 : index, node)
  }

export const getStatusCls =
  ({ constants, state }) =>
  (index) => {
    const { PROCESS_DONE_CLS, PROCESS_CUR_CLS, PROCESS_WAIT_CLS } = constants
    const cls = {}
    const reverse = state.isReverse

    cls[PROCESS_DONE_CLS] = reverse ? index > state.current : index < state.current
    cls[PROCESS_CUR_CLS] = index === state.current
    cls[PROCESS_WAIT_CLS] = reverse ? index < state.current : index > state.current

    return cls
  }

export const computedData =
  ({ props, state }) =>
  () => {
    return state.isReverse ? props.data.map((item, i) => props.data[props.data.length - 1 - i]) : props.data
  }

export const computedCurrent =
  ({ props, state }) =>
  () => {
    return state.isReverse ? state.nodes.length - props.active - 1 : props.active
  }

export const computedIsReverse = (props) => () => props.reverse && props.vertical

export const computedStackNodes =
  ({ state, props }) =>
  () => {
    if (state.nodes.length >= props.nodeMax && !props.foldDisabled) {
      state.showData = true
      return state.nodes.slice(0, props.limitedNodes)
    }
    return state.nodes
  }

export const changeStatus =
  ({ state }) =>
  () => {
    state.showAll = !state.showAll
    return state.showAll
  }
