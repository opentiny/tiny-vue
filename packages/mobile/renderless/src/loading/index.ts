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

import type { ILoadingRenderlessParamUtils, ILoadingRenderlessParams, ILoadingState } from 'types/loading.type'
import afterLeave from '../common/deps/after-leave'
import { removeClass } from '../common/deps/dom'

export const handleAfterLeave = (emit: ILoadingRenderlessParamUtils['emit']) => (): void => {
  emit('after-leave')
}

export const setText =
  (state: ILoadingState) =>
  (text: string): void => {
    state.text = text
  }

export const close =
  ({ state, constants, vm }: Pick<ILoadingRenderlessParams, 'state' | 'constants' | 'vm'>) =>
  (): void => {
    afterLeave(
      vm,
      () => {
        const target = state.fullscreen || state.body ? document.body : state.target

        if (vm.$el && vm.$el.parentNode) {
          removeClass(target, constants.PARENT_RELATIVE_CLS)
          removeClass(target, constants.PARENT_HIDDEN_CLS)
          vm.$el.parentNode.removeChild(vm.$el)
        }

        state.closed = true
      },
      300
    )

    state.visible = false
  }
