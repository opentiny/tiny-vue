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

export const getPages = ({ props, state }) => () => {
  const pagerCount = props.pagerCount
  const halfPagerCount = (pagerCount - 1) / 2
  const currentPage = Number(props.currentPage)
  const pageCount = Number(props.pageCount)
  let showPrevMore = false
  let showNextMore = false

  if (pageCount > pagerCount) {
    if (currentPage < pageCount - halfPagerCount) {
      showNextMore = true
    }

    if (currentPage > pagerCount - halfPagerCount) {
      showPrevMore = true
    }
  }

  const pages = []

  if (showPrevMore && !showNextMore) {
    const startPage = pageCount - (pagerCount - 2)

    for (let i = startPage; i < pageCount; i++) {
      pages.push(i)
    }
  } else if (!showPrevMore && showNextMore) {
    for (let i = 2; i < pagerCount; i++) {
      pages.push(i)
    }
  } else if (showPrevMore && showNextMore) {
    const offset = Math.floor(pagerCount / 2) - 1

    for (let i = currentPage - offset; i <= currentPage + offset; i++) {
      pages.push(i)
    }
  } else {
    for (let i = 2; i < pageCount; i++) {
      pages.push(i)
    }
  }

  state.showPrevMore = showPrevMore
  state.showNextMore = showNextMore

  return pages
}

const getClassListVal = (parentNode) => {
  let classListVal = []
  const classList = parentNode.classList

  if (classList) {
    let index = 0

    for (const key in classList) {
      if (Object.prototype.hasOwnProperty.call(classList, key) && typeof Number(key) === 'number') {
        classListVal[index] = classList[key]
        index++
      }
    }
  } else {
    classListVal = parentNode.className.split(/\s+/)
  }

  return classListVal
}

export const onPagerClick = ({ emit, props, vm }) => (event) => {
  const target = event.target

  if (target.tagName === 'UL' || props.disabled) {
    return
  }

  let newPage = Number(event.target.textContent)
  const { tagName, parentNode } = target
  const parentEl = tagName === 'LI' ? target : tagName === 'svg' ? parentNode : parentNode.parentNode
  const pageCount = props.pageCount
  const currentPage = props.currentPage
  const pagerCountOffset = props.pagerCount - 2
  const classListVal = getClassListVal(parentEl)

  if (classListVal.includes('dot')) {
    if (classListVal.includes('quickprev')) {
      newPage = currentPage - pagerCountOffset
    } else if (classListVal.includes('quicknext')) {
      newPage = currentPage + pagerCountOffset
    }
  }

  /* istanbul ignore if */
  if (!isNaN(newPage)) {
    if (newPage < 1) {
      newPage = 1
    }

    if (newPage > pageCount) {
      newPage = pageCount
    }
  }

  const callback = () => {
    if (newPage !== currentPage) {
      emit('change', newPage)
    }
  }

  if (props.isBeforePageChange && newPage !== currentPage) {
    let params = { newPage, currentPage, callback }
    vm.$parent.beforePagerChangeHandler(params)
  } else {
    callback()
  }
}

export const onMouseenter = ({ props, state }) => (direction) => {
  if (props.disabled) {
    return
  }

  if (direction === 'left') {
    state.quickprevIconClass = props.doubleLeftIcon
  } else {
    state.quicknextIconClass = props.doubleRightIcon
  }
}
