import { filter } from './index'

export const api = ['state', 'filter']

export const renderless = (props, { reactive }, { emit, vm }) => {
  const api = {}
  const state = reactive({
    fields: null
  })

  Object.assign(api, {
    state,
    filter: filter({ emit, vm })
  })

  return api
}
