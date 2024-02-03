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

export const create = (emit) => () => emit('btn-click')

export const getMessage =
  ({ props, t }) =>
  () => {
    const types = ['build', 'weaknet', 'pcview', 'busy', 'noperm']
    return props.message || t(`ui.exception.${~types.indexOf(props.type) ? props.type : 'nodata'}`)
  }
