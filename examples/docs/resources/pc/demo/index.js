import Components from './components'

export const getDemoCode = ({ component, type, name }) =>
  `${component}/${Components[component][type][name]}`
