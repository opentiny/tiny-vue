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

import { $prefix, $props, h, isVue2, hooks, defineComponent, isVnode } from '@opentiny/vue-common'
import Loading from '@opentiny/vue-loading'

export default defineComponent({
  name: $prefix + 'GridLoading',
  directives: {
    loading: Loading.directive
  },
  props: {
    ...$props,
    visible: Boolean,
    loadingComponent: Object
  },
  render() {
    // vue2 指令通过属性 directives 设置
    let loadingSpinner = h('div', {
      class: 'tiny-grid-loading__wrap tiny-loading__spinner',
      directives: isVue2 ? [{ name: 'loading', value: true }] : null
    })

    if (!isVue2) {
      // vue3 指令通过 withDirectives 帮助函数设置
      loadingSpinner = hooks.withDirectives(loadingSpinner, [[Loading.directive, true]])
    }

    let loadingComponent

    // vue2的h函数，如果第一个参数是vnode节点无法正常渲染，只能渲染VueComponents。vue3的函数同时可以兼容vnode和VueComponents
    if (this.loadingComponent) {
      loadingComponent = isVnode(this.loadingComponent) ? this.loadingComponent : h(this.loadingComponent)
    }
    return h('div', { class: 'tiny-grid-loading', style: { display: this.visible ? 'block' : 'none' } }, [
      loadingComponent || loadingSpinner
    ])
  }
})
