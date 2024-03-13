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

import { getBmap } from '../chart-core/deps/utils'

export const bmap = (columns, rows, settings, extra) => {
  const { key, v, bmap, useOuterMap, url } = settings
  const { _once } = extra
  const registerSign = 'bmap_register'

  if (_once[registerSign]) {
    return {}
  }

  _once[registerSign] = true

  if (useOuterMap) {
    return { bmap }
  }

  return getBmap({ key, version: v, url }).then(() => ({ bmap }))
}
