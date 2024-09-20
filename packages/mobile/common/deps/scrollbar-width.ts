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

let scrollBarWidth: number
const isServer = typeof window === 'undefined'

// 通过构造2层div,计算出来滚动条的宽度,并全局缓存值
export default function () {
  if (isServer) {
    return 0
  }
  if (scrollBarWidth !== undefined) {
    return scrollBarWidth
  }

  const container = document.createElement('div')
  container.className = 'tiny-scrollbar'
  container.style.visibility = 'hidden'
  container.style.position = 'absolute'
  container.style.top = '-9999px'

  const outer = document.createElement('div')
  outer.className = 'tiny-scrollbar__wrap'
  outer.style.width = '100px'

  container.appendChild(outer)
  document.body.appendChild(container)
  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'

  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  ;(outer.parentNode as HTMLElement).removeChild(outer)
  scrollBarWidth = widthNoScroll - widthWithScroll

  return scrollBarWidth
}
