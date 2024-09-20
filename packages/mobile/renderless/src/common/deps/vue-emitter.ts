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

export default (vm) => {
  const broadcast = (vm, componentName, eventName, params) => {
    vm.$children.forEach((child) => {
      const name = child.$options.componentName

      if (name === componentName) {
        child.$emit(eventName, params)
      } else {
        broadcast(child, componentName, eventName, params)
      }
    })
  }

  return {
    dispatch(componentName, eventName, params) {
      let parent = vm.$parent || vm.$root
      let name = parent.$options.componentName

      while (parent && !parent.$attrs.novalid && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.componentName
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast(vm, componentName, eventName, params)
    }
  }
}
