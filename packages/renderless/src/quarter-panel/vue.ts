import { handleQuarterTableClick } from './index'

export const api = ['state', 'handleQuarterTableClick']

export const renderless = (props, { reactive }, { emit }) => {
  const api = {}

  const state = reactive({
    visible: false,
    rows: [{ text: 'Q1' }, { text: 'Q2' }, { text: 'Q3' }, { text: 'Q4' }]
  })

  Object.assign(api, {
    state,
    handleQuarterTableClick: handleQuarterTableClick({ emit })
  })

  return api
}
