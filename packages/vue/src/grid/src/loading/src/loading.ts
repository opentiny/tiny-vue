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
import { h, $prefix, defineComponent, $props } from '@opentiny/vue-common'

export default defineComponent({
  name: $prefix + 'GridLoading',
  props: {
    ...$props,
    visible: Boolean
  },
  render() {
    return h(
      'div',
      {
        class: 'tiny-grid-loading',
        style: {
          display: this.visible ? 'block' : 'none'
        }
      },
      [
        h(
          'div',
          {
            class: 'tiny-loading tiny-grid-loading__wrap tiny-loading__spinner'
          },
          [
            h(
              'svg',
              {
                class: 'circular',
                attrs: {
                  viewBox: '25 25 50 50'
                }
              },
              [
                h('circle', {
                  class: 'path',
                  attrs: {
                    cx: '50',
                    cy: '50',
                    r: '24',
                    fill: 'none'
                  }
                })
              ]
            )
          ]
        )
      ]
    )
  }
})
