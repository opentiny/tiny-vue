// todo: 一个方法去拿到 props 身上的事件，以 on 为前缀
const reactEventPrefix = /^on[A-Z]/
export function getEventByReactProps(props) {
  const $listeners = {}
  Object
    .keys(props)
    .filter(propName => {
      return reactEventPrefix.test(propName)
        && typeof props[propName] === 'function'
    })
    .map(reactEvName => {
      return {
        reactEvName,
        vueEvName: reactEvName.substr(2).toLowerCase()
      }
    })
    .forEach(({ reactEvName, vueEvName }) => {
      Object.assign($listeners, {
        [vueEvName]: props[reactEvName]
      })
    })
  return $listeners
}
export function getAttrsByReactProps(props) {
  const $attrs = {}
  Object
    .keys(props)
    .filter(propName => {
      return !reactEventPrefix.test(propName) && !['children'].includes(propName)
    })
    .forEach((attr) => {
      $attrs[attr] = props[attr]
    })
  return $attrs
}
