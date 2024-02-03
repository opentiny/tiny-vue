// todo: 一个方法去拿到 props 身上的事件，以 on 为前缀
const openinulaEventPrefix = /^on[A-Z]/
export function getEventByopeninulaProps(props) {
  const $listeners = {}
  Object.keys(props)
    .filter((propName) => {
      return openinulaEventPrefix.test(propName) && typeof props[propName] === 'function'
    })
    .map((openinulaEvName) => {
      return {
        openinulaEvName,
        vueEvName: openinulaEvName.substr(2).toLowerCase()
      }
    })
    .forEach(({ openinulaEvName, vueEvName }) => {
      Object.assign($listeners, {
        [vueEvName]: props[openinulaEvName]
      })
    })
  return $listeners
}
export function getAttrsByopeninulaProps(props) {
  const $attrs = {}
  Object.keys(props)
    .filter((propName) => {
      return !openinulaEventPrefix.test(propName) && !['children'].includes(propName)
    })
    .forEach((attr) => {
      $attrs[attr] = props[attr]
    })
  return $attrs
}
