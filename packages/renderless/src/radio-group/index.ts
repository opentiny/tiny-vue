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

import type { IRadioGroupRenderlessParams } from '@/types'
import { KEY_CODE } from '../common'

export const handleKeydown =
  (parent: IRadioGroupRenderlessParams['parent']) =>
  (event: KeyboardEvent): void => {
    const target = event.target
    const className = target?.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
    const radios = parent.$el.querySelectorAll(className)
    const length = radios.length
    const index = [].indexOf.call(radios, target)
    const roleRadiosNodes: NodeListOf<HTMLInputElement> = parent.$el.querySelectorAll('[role=radio]')

    switch (event.keyCode) {
      case KEY_CODE.ArrowDown:
      case KEY_CODE.ArrowRight:
        event.stopPropagation()
        event.preventDefault()
        
        if (index === length - 1) {
          roleRadiosNodes[0].click()
          roleRadiosNodes[0].focus()
        } else {
          roleRadiosNodes[index + 1].click()
          roleRadiosNodes[index + 1].focus()
        }
        break
      case KEY_CODE.ArrowUp:
      case KEY_CODE.ArrowLeft:
        event.stopPropagation()
        event.preventDefault()

        if (index === 0) {
          roleRadiosNodes[length - 1].click()
          roleRadiosNodes[length - 1].focus()
        } else {
          roleRadiosNodes[index - 1].click()
          roleRadiosNodes[index - 1].focus()
        }
        break
      default:
        break
    }
  }

export const mounted = (parent: IRadioGroupRenderlessParams['parent']) => (): void => {
  const radios: NodeListOf<HTMLInputElement> = parent.$el.querySelectorAll('[type=radio]')
  const firstLabel = parent.$el.querySelectorAll('[role=radio]')[0] as HTMLInputElement

  if (![].some.call(radios, (radio: HTMLInputElement) => radio.checked) && firstLabel) {
    firstLabel.tabIndex = 0
  }
}
