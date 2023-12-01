export function defineVueProps(propsOptions, props) {
  const $props = {}
  const $attrs = {}
  const $listeners = {}
  const reactEventPrefix = /^on[A-Z]/

  const propsArray = Array.isArray(propsOptions) ? propsOptions : Object.keys(propsOptions)
  Object.keys(props).forEach((key) => {
    if (propsArray.includes(key)) {
      $props[key] = props[key]
    } else {
      if (reactEventPrefix.test(key)) {
        $listeners[key.substr(2).toLowerCase()] = props[key]
      } else {
        $attrs[key] = props[key]
      }
    }
  })

  if (typeof propsOptions === 'object') {
    Object.keys(propsOptions)
      .filter((key) => !$props[key])
      .forEach((key) => {
        const options = propsOptions[key]
        const defaultValue = typeof options.default === 'function' ? options.default() : options.default
        defaultValue !== undefined && ($props[key] = defaultValue)
      })
  }

  return {
    $props,
    $attrs,
    $listeners
  }
}
