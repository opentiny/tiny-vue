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

import { addClass, removeClass } from '../common/deps/dom'

const setFixAnchor = ({ vm }) => {
  const { fixRef } = vm.$refs
  if (fixRef) {
    fixRef.style.position = 'fixed'
    fixRef.style.top = fixRef.offsetTop
  }
}

const setMarkClass = ({ state, props }) => {
  const { scrollContainer } = state
  const { markClass } = props
  const activeContentEl = scrollContainer.querySelector(`${state.currentLink}`)
  if (markClass) {
    addClass(activeContentEl, markClass)
    setTimeout(() => {
      removeClass(activeContentEl, markClass)
    }, 1000)
  }
}

const setScrollContainer = ({ state, api, cb = null }) => {
  const currentContainer = api.getContainer()
  const { scrollContainer } = state
  if (scrollContainer !== currentContainer) {
    state.scrollContainer = currentContainer
    cb && cb()
  }
}

const updateSkidPosition = ({ vm, state, emit }) => {
  const { currentLink } = state
  const activeEl = vm.$refs[currentLink]
  const { skidRef, maskRef, anchorRef } = vm.$refs

  if (!activeEl || !anchorRef) {
    return
  }
  emit('onChange', currentLink)

  const { offsetHeight, offsetWidth } = activeEl
  const { top: linkTitleClientTop, left: linkTitleClientLeft } = activeEl.getBoundingClientRect()
  const { top: anchorClientTop, left: anchorClientLeft } = anchorRef.getBoundingClientRect()

  const offsetTop = linkTitleClientTop - anchorClientTop
  const offsetLeft = linkTitleClientLeft - anchorClientLeft
  addClass(skidRef, 'tiny-anchor-orbit-skid--active')
  skidRef.style.top = `${offsetTop}px`
  skidRef.style.height = `${offsetHeight}px`
  if (maskRef) {
    maskRef.style.top = `${offsetTop}px`
    maskRef.style.height = `${offsetHeight}px`
    maskRef.style.maxWidth = `${offsetWidth + offsetLeft}px`
  }
}

const getCurrentAnchor = ({ vm, state, link, emit }) => {
  if (state.currentLink === link || state.isScroll) {
    return
  }
  state.currentLink = link
  updateSkidPosition({ vm, state, emit })
}

const addObserver = ({ props, state }) => {
  const { links } = props
  const { intersectionObserver, expandLink } = state
  const observer = (list) => {
    list.forEach((item) => {
      const link = item.link
      expandLink[link] = item
      const linkEl = document.querySelector(link)
      linkEl && intersectionObserver.observe(linkEl)
      if (item.children) {
        observer(item.children)
      }
    })
  }
  observer(links)
}

const setCurrentHash = (state) => {
  if (state.currentHash !== location.hash) {
    state.currentHash = location.hash
    return true
  }
  return false
}

// 处理滚动结束
const handleScroll = (state) => {
  clearTimeout(state.scrollTimer)
  state.scrollTimer = setTimeout(() => {
    state.isScroll = false
    clearTimeout(state.scrollTimer)
  }, 500)
}

// 设置滚动偏移量
const setChildOffsetTop = ({ state, props }) => {
  state.offsetTop = document.querySelector(props.links[0].link)?.offsetTop || 0
}

export const getContainer =
  ({ props }) =>
    () =>
      props.containerId ? document.querySelector(props.containerId) : document.body

export const mounted =
  ({ vm, state, api, props }) =>
    () => {
      setScrollContainer({ state, api })
      setFixAnchor({ vm })
      api.onItersectionObserver()
      setCurrentHash(state)
      setChildOffsetTop({ state, props })
    }

export const updated =
  ({ state, api }) =>
    () => {
      const cb = api.onItersectionObserver
      setScrollContainer({ state, api, cb })
    }

export const unmounted =
  ({ state }) =>
    () => {
      const { intersectionObserver } = state
      intersectionObserver.disconnect()
      state.scrollContainer.removeEventListener('scroll', handleScroll(state))
    }

export const onItersectionObserver =
  ({ vm, state, props, emit }) =>
    () => {
      const { expandLink, scrollContainer } = state
      state.intersectionObserver = new IntersectionObserver(
        (entries) => {
          const { top } = scrollContainer.getBoundingClientRect()
          const scrollStartTop = top + state.offsetTop
          entries.forEach((item) => {
            const key = item.target.id
            state.observerLinks[key] = item
          })

          for (let key in state.observerLinks) {
            if (Object.prototype.hasOwnProperty.call(state.observerLinks, key)) {
              const item = state.observerLinks[key]
              if (
                item.isIntersecting &&
                item.intersectionRatio >= 0 &&
                item.target.getBoundingClientRect().top < scrollStartTop
              ) {
                const link = `#${item.target.id}`
                if (!expandLink[link].children) {
                  getCurrentAnchor({ vm, state, link, emit })
                  break
                } else {
                  getCurrentAnchor({ vm, state, link, emit })
                }
              }
            }
          }
        },
        { root: scrollContainer, threshold: [0] }
      )

      addObserver({ props, state })
    }

export const linkClick =
  ({ state, vm, emit, props }) =>
    (e, item) => {
      state.isScroll = true
      const { link, title } = item
      const emitLink = { link, title }
      emit('linkClick', e, emitLink)

      const isChangeHash = setCurrentHash(state)
      const { scrollContainer } = state
      state.currentLink = link
      updateSkidPosition({ vm, state, emit })
      setMarkClass({ state, props })

      if (scrollContainer !== document.body && !isChangeHash) {
        const linkEl = scrollContainer.querySelector(item.link)
        const top = linkEl.offsetTop - scrollContainer.offsetTop // 修复横向锚点无法滚动到顶部
        const param = { top, left: 0, behavior: 'smooth' }
        scrollContainer.scrollTo(param)
        scrollContainer.addEventListener('scroll', handleScroll(state))
      }
    }
