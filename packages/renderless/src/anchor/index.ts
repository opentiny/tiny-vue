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
import { IAnchorRenderlessParams, IAnchorLinkItem } from '@/types'
import { addClass, removeClass } from '../common/deps/dom'

export const setFixAnchor =
  ({ vm, props }: Pick<IAnchorRenderlessParams, 'vm' | 'props'>) =>
  () => {
    const { anchorWrapRef } = vm.$refs
    if (anchorWrapRef && props.isAffix) {
      const { top } = anchorWrapRef.getBoundingClientRect()
      anchorWrapRef.style.top = `${top}px`
    }
  }

const setMarkClass = ({ state, props }: Pick<IAnchorRenderlessParams, 'state' | 'props'>) => {
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

export const setScrollContainer =
  ({ state, api }: Pick<IAnchorRenderlessParams, 'state' | 'api'>) =>
  (cb: Function | null = null) => {
    const currentContainer = api.getContainer()
    const { scrollContainer } = state
    if (scrollContainer !== currentContainer) {
      state.scrollContainer = currentContainer
      cb && cb()
    }
  }

const updateSkidPosition = ({ vm, state, emit }: Pick<IAnchorRenderlessParams, 'vm' | 'state' | 'emit'>) => {
  const { currentLink } = state
  const activeEl = vm.$refs[currentLink]
  const { skidRef, maskRef, anchorRef } = vm.$refs

  if (!activeEl) {
    return
  }

  emit('change', currentLink)
  emit('onChange', currentLink) // deprecated 原事件onChange v3.12.0废弃，v3.17.0移除；移除原因：命名规范

  if (!anchorRef || !skidRef || !maskRef) {
    return
  }

  const { offsetHeight, offsetWidth } = activeEl
  const { top: linkTitleClientTop, left: linkTitleClientLeft } = activeEl.getBoundingClientRect()
  const { top: anchorClientTop, left: anchorClientLeft } = anchorRef.getBoundingClientRect()

  const offsetTop = linkTitleClientTop - anchorClientTop
  const offsetLeft = linkTitleClientLeft - anchorClientLeft
  addClass(skidRef, 'tiny-anchor-orbit-skid--active')
  skidRef.style.transform = `translateY(${offsetTop}px)`
  skidRef.style.height = `${offsetHeight}px`
  if (maskRef) {
    maskRef.style.transform = `translateY(${offsetTop}px)`
    maskRef.style.height = `${offsetHeight}px`
    maskRef.style.maxWidth = `${offsetWidth + offsetLeft}px`
  }
}

export const getCurrentAnchor =
  ({ vm, state, emit }: Pick<IAnchorRenderlessParams, 'vm' | 'state' | 'emit'>) =>
  (link: string) => {
    if (state.currentLink === link || state.isScroll) {
      return
    }

    state.currentLink = link
    updateSkidPosition({ vm, state, emit })
  }

const addObserver = ({ props, state }: Pick<IAnchorRenderlessParams, 'props' | 'state'>) => {
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

const setCurrentHash = ({ state }: Pick<IAnchorRenderlessParams, 'state'>): boolean => {
  if (state.currentHash !== location.hash) {
    state.currentHash = location.hash
    return true
  }
  return false
}

// 处理滚动结束
export const handleScroll = (state: IAnchorRenderlessParams['state']) => () => {
  clearTimeout(state.scrollTimer)
  state.scrollTimer = window.setTimeout(() => {
    state.isScroll = false
    clearTimeout(state.scrollTimer)
  }, 2000)
}

// 设置滚动偏移量
const setChildOffsetTop = ({ state, props }: Pick<IAnchorRenderlessParams, 'state' | 'props'>) => {
  state.offsetTop = document.querySelector(props.links[0].link)?.offsetTop || 0
}

export const getContainer =
  ({ props }: Pick<IAnchorRenderlessParams, 'props'>) =>
  (): Element =>
    (props.containerId && document.querySelector(props.containerId)) || document.body

export const mounted =
  ({ state, api, props, nextTick }: Pick<IAnchorRenderlessParams, 'state' | 'api' | 'props' | 'nextTick'>) =>
  () => {
    nextTick(() => {
      api.setScrollContainer()
      api.setFixAnchor()
      api.onItersectionObserver()
      setCurrentHash({ state })
      setChildOffsetTop({ state, props })
    })
  }

export const updated =
  ({ api }: Pick<IAnchorRenderlessParams, 'api'>) =>
  () => {
    const cb = api.onItersectionObserver
    api.setScrollContainer(cb)
  }

export const unmounted =
  ({ state, api }: Pick<IAnchorRenderlessParams, 'state' | 'api'>) =>
  () => {
    const { intersectionObserver } = state
    intersectionObserver.disconnect()
    if (state.scrollContainer) {
      state.scrollContainer.removeEventListener('scroll', api.handleScroll())
    }
  }

export const onItersectionObserver =
  ({ state, props, api, vm, emit }: Pick<IAnchorRenderlessParams, 'state' | 'props' | 'api' | 'vm' | 'emit'>) =>
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

        // 判断hash值变化
        if (state.currentHash !== location.hash) {
          state.currentHash = location.hash
          state.currentLink = state.currentHash
          updateSkidPosition({ vm, state, emit })
          return
        }

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
                api.getCurrentAnchor(link)
                break
              } else {
                api.getCurrentAnchor(link)
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
  ({ state, vm, emit, props, api }: Pick<IAnchorRenderlessParams, 'state' | 'vm' | 'emit' | 'props' | 'api'>) =>
  (e: Event, item: IAnchorLinkItem) => {
    state.isScroll = true
    const { link, title } = item
    const emitLink = { link, title }
    emit('linkClick', e, emitLink)

    const isChangeHash = setCurrentHash({ state })
    const { scrollContainer } = state
    state.currentLink = link
    updateSkidPosition({ vm, state, emit })
    setMarkClass({ state, props })

    if (scrollContainer && scrollContainer !== document.body && !isChangeHash) {
      const linkEl = scrollContainer.querySelector(item.link) as HTMLElement
      const top = linkEl?.offsetTop - scrollContainer.offsetTop // 修复横向锚点无法滚动到顶部
      const param = { top, left: 0, behavior: 'smooth' } as ScrollToOptions
      scrollContainer?.scrollTo(param)
      scrollContainer?.addEventListener('scroll', api.handleScroll())
    }
  }
