import Components from './components'

export const getDemoCode = ({ component, type: typeStr, name }) => `${component}/${Components[component][typeStr][name]}`
