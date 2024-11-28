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

const isServer = typeof window === 'undefined'

export default (container, selected) => {
  if (isServer) {
    return
  }

  if (!selected) {
    container.scrollTop = 0
    return
  }

  const offsetParents = []
  let { offsetParent, offsetTop, offsetHeight } = selected

  while (offsetParent && container !== offsetParent && container.contains(offsetParent)) {
    offsetParents.push(offsetParent)
    offsetParent = offsetParent.offsetParent
  }

  const top = offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0)
  const bottom = top + offsetHeight
  const viewRectTop = container.scrollTop
  const viewRectBottom = viewRectTop + container.clientHeight

  if (top < viewRectTop) {
    container.scrollTop = top
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight
  }
}
