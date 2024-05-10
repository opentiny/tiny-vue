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
      activeNames = ([] as Array<string>).concat(activeNames)
      const value: string | string[] = props.accordion ? activeNames[0] : activeNames
      state.activeNames = activeNames

      emit('update:modelValue', value)
      emit('change', value)
      console.log(activeNames, 'activeName')
    }

export const handleItemClick =
  ({ api, props, state }: Pick<ICollapseRenderlessParams, 'api' | 'props' | 'state'>) =>
    (item?: Object & { name: string }) => {
      console.log('handleItemClick', item, item.name)
      const activeNames = state.activeNames.slice(0)
      const index = activeNames.indexOf(item?.name as string)
      const beforeClose = () => {
        let result = props.beforeClose ? props.beforeClose(item, state.activeNames) : true

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
            api.setActiveNames((activeNames[0] === item?.name ? '' : item?.name) as string)
          }
        } else {
          index > -1 ? next && activeNames.splice(index, 1) : activeNames.push(item?.name as string)
          console.log(props.according, 'according')
          api.setActiveNames(activeNames)
        }
      })
    }
