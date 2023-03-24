/**
* Copyright (c) 2022 - present TinyVue Authors.
* Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/

import { format } from '@opentiny/vue-renderless/common/date'

export const getDate = (dateTime) => ({
  date: format(dateTime, 'yyyy-MM-dd'),
  time: format(dateTime, 'hh:mm')
})

export const getStatus = ({ state, t }) => (value) => {
  const status = state.current - value

  return status > 0 ? t('ui.steps.done') : status === 0 ? t('ui.steps.doing') : t('ui.steps.wait')
}

export const handleClick = ({ emit, state }) => ({ index, node }) => {
  emit('click', state.isReverse ? state.nodes.length - index - 1 : index, node)
}

export const getStatusCls = ({ constants, state }) => (index) => {
  const { PROCESS_DONE_CLS, PROCESS_CUR_CLS, PROCESS_WAIT_CLS } = constants
  const cls = {}
  const reverse = state.isReverse

  cls[PROCESS_DONE_CLS] = reverse ? index > state.current : index < state.current
  cls[PROCESS_CUR_CLS] = index === state.current
  cls[PROCESS_WAIT_CLS] = reverse ? index < state.current : index > state.current

  return cls
}

export const computedData = ({ props, state }) => () => (state.isReverse ? props.data.map((item, i) => props.data[props.data.length - 1 - i]) : props.data)

export const computedCurrent = ({ props, state }) => () => (state.isReverse ? state.nodes.length - props.active - 1 : props.active)

export const computedIsReverse = (props) => () => props.reverse && props.vertical
