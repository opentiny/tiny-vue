import { click } from './index'

export const api = ['state', 'click']

export const renderless = (props, { reactive }, { emit }) => {
  const api = {}
  const state = reactive({})

  Object.assign(api, {
    state,
    click: click({ props, emit })
  })

  return api
}
