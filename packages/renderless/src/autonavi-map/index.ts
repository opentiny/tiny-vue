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

import { getAmap } from '../chart-core/deps/utils'

export const amap = (columns, rows, settings, extra) => {
  const { key, v, amap, useOuterMap, url } = settings
  const { _once } = extra
  const registerSign = 'amap_register'

  if (_once[registerSign]) {
    return {}
  }

  _once[registerSign] = true

  if (useOuterMap) {
    return { amap }
  }

  return getAmap({ key, version: v, url }).then(() => ({ amap }))
}
