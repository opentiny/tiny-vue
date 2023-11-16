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
import { ITagRenderlessParams } from '@/types'

export const handleClose =
  ({ emit, props, state }: Pick<ITagRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (event: Event) => {
    if (props.disabled) return
    event.stopPropagation()
    state.show = false
    const close = () => emit('close', event)
    props.beforeDelete ? props.beforeDelete(close) : close()
  }

export const handleClick =
  ({ emit, props, parent, state }: Pick<ITagRenderlessParams, 'emit' | 'props' | 'parent' | 'state'>) =>
  (event: Event) => {
    // pc端没有selectable属性，不能以取反判断，会阻止pc的点击事件
    if (props.selectable === false || props.disabled) return

    parent.$parent && parent.$parent.tagSelectable && event.stopPropagation()
    state.selected = !state.selected
    emit('click', event)
  }
