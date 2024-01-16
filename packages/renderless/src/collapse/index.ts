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
import type { ICollapseRenderlessParams } from '@/types'

export const setActiveNames =
  ({ emit, props, state }: Pick<ICollapseRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (activeNames: string | string[]): void => {
    const Names: string[] = Array.isArray(activeNames) ? activeNames : [activeNames]
    const value: string | string[] = props.accordion ? (Array.isArray(Names) ? Names[0] : Names) : Names
    state.activeNames = Names
    emit('update:modelValue', value)
    emit('change', value)
  }
interface Object {
  name?: string
}
export const handleItemClick =
  ({ api, props, state }: Pick<ICollapseRenderlessParams, 'api' | 'props' | 'state'>) =>
  (item?: Object) => {
    const activeNames = state.activeNames.slice(0)
    if (!item || !Object.keys(item).includes('name')) {
      return
    }
    const index = activeNames.indexOf(item.name!)
    const beforeClose = () => {
      let result = props.beforeClose ? props.beforeClose(item.name!, state.activeNames, item) : true
      return new Promise((resolve) => {
        if (result && result.then) {
          result.then(() => resolve(true)).catch(() => resolve(false))
        } else {
          resolve(result)
        }
      })
    }

    beforeClose().then((next) => {
      if (props.accordion) {
        if (next || !activeNames.length) {
          api.setActiveNames(activeNames[0] === item.name! ? '' : item.name!)
        }
      } else {
        index > -1 ? next && activeNames.splice(index, 1) : next && activeNames.push(item.name!)

        api.setActiveNames(activeNames)
      }
    })
  }
