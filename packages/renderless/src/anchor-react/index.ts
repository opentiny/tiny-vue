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
import type { IAnchorRenderlessParams, IAnchorLinkItem } from '@/types'

export const setFixAnchor =
  ({ vm, props }: Pick<IAnchorRenderlessParams, 'vm' | 'props'>) =>
    () => {
      console.log('setFixAnchor')

      // const { anchorWrapRef } = vm.$refs
      // if (anchorWrapRef && props.isAffix) {
      //   const { top } = anchorWrapRef.getBoundingClientRect()
      //   anchorWrapRef.style.top = `${top}px`
      // }
    }

const setMarkClass = ({ state, props }: Pick<IAnchorRenderlessParams, 'state' | 'props'>) => {
  console.log('setMarkClass')
  // const { scrollContainer } = state
  // const { markClass } = props
  // const activeContentEl = scrollContainer.querySelector(`${state.currentLink}`)
  // if (markClass) {
  //   addClass(activeContentEl, markClass)
  //   setTimeout(() => {
  //     removeClass(activeContentEl, markClass)
  //   }, 1000)
  // }
}

export const setScrollContainer =
  ({ state, api }: Pick<IAnchorRenderlessParams, 'state' | 'api'>) =>
    () => {
      console.log(api, 'setScrollContainer')
      // const currentContainer = api.getContainer()
      // const { scrollContainer } = state
      // if (scrollContainer !== currentContainer) {
      //   state.scrollContainer = currentContainer
      // }
    }

const updateSkidPosition = ({ vm, state, emit }: Pick<IAnchorRenderlessParams, 'vm' | 'state' | 'emit'>) => {
  console.log('updateSkidPosition')
  // const { currentLink } = state
  // const activeEl = vm.$refs[currentLink]
  // const { skidRef, maskRef, anchorRef } = vm.$refs
  // if (!activeEl) {
  //   return
  // }
  // emit('change', currentLink)
  // emit('onChange', currentLink) // deprecated 原事件onChange v3.12.0废弃，v3.17.0移除；移除原因：命名规范
  // if (!anchorRef || !skidRef || !maskRef) {
  //   return
  // }
  // const { offsetHeight, offsetWidth } = activeEl
  // const { top: linkTitleClientTop, left: linkTitleClientLeft } = activeEl.getBoundingClientRect()
  // const { top: anchorClientTop, left: anchorClientLeft } = anchorRef.getBoundingClientRect()
  // const offsetTop = linkTitleClientTop - anchorClientTop
  // const offsetLeft = linkTitleClientLeft - anchorClientLeft
  // addClass(skidRef, 'tiny-anchor-orbit-skid--active')
  // skidRef.style.transform = `translateY(${offsetTop}px)`
  // skidRef.style.height = `${offsetHeight}px`
  // if (maskRef) {
  //   maskRef.style.transform = `translateY(${offsetTop}px)`
  //   maskRef.style.height = `${offsetHeight}px`
  //   maskRef.style.maxWidth = `${offsetWidth + offsetLeft}px`
  // }
}

export const getCurrentAnchor =
  ({ vm, state, emit }: Pick<IAnchorRenderlessParams, 'vm' | 'state' | 'emit'>) =>
    (link: string) => {
      console.log('getCurrentAnchor')
      // if (state.currentLink === link || state.isScroll) {
      //   return
      // }

      // state.currentLink = link
      // updateSkidPosition({ vm, state, emit })
    }

// 处理滚动结束
export const handleScroll = (state: IAnchorRenderlessParams['state']) => () => {
  console.log('handleScroll')
  // clearTimeout(state.scrollTimer)
  // state.scrollTimer = window.setTimeout(() => {
  //   state.isScroll = false
  //   clearTimeout(state.scrollTimer)
  // }, 2000)
}

// 设置滚动偏移量
const setChildOffsetTop = ({ state, props }: Pick<IAnchorRenderlessParams, 'state' | 'props'>) => {
  console.log('setChildOffsetTop')
  // state.offsetTop = document.querySelector(props.links[0]?.link)?.offsetTop || 0
}

export const getContainer =
  ({ props }: Pick<IAnchorRenderlessParams, 'props'>) =>
    (): Element => {
      console.log('getContainer')
      // return (props.containerId && document.querySelector(props.containerId)) || document.body
    }

export const mounted =
  ({ state, api, props, nextTick }: Pick<IAnchorRenderlessParams, 'state' | 'api' | 'props' | 'nextTick'>) =>
    () => {
      console.log('mounted')
      // nextTick(() => {
      //   api.setScrollContainer()
      //   api.setFixAnchor()
      //   setChildOffsetTop({ state, props })
      // })
    }

export const updated =
  ({ api }: Pick<IAnchorRenderlessParams, 'api'>) =>
    () => {
      console.log('updated')
      // api.setScrollContainer()
    }

export const unmounted =
  ({ state, api }: Pick<IAnchorRenderlessParams, 'state' | 'api'>) =>
    () => {
      console.log('unmounted')

      // if (state.scrollContainer) {
      //   state.scrollContainer.removeEventListener('scroll', api.handleScroll())
      // }
    }

export const linkClick =
  ({ state, vm, emit, props, api }: Pick<IAnchorRenderlessParams, 'state' | 'vm' | 'emit' | 'props' | 'api'>) =>
    (e: Event, item: IAnchorLinkItem) => {
      console.log('linkClick')
      // state.isScroll = true
      // const { link, title } = item
      // const emitLink = { link, title }
      // emit('linkClick', e, emitLink)
      // const { scrollContainer } = state
      // state.currentLink = link
      // updateSkidPosition({ vm, state, emit })
      // setMarkClass({ state, props })
      // if (scrollContainer && scrollContainer !== document.body) {
      // const linkEl = scrollContainer.querySelector(item.link) as HTMLElement
      // const top = linkEl?.offsetTop - scrollContainer.offsetTop // 修复横向锚点无法滚动到顶部
      // const param = { top, left: 0, behavior: 'smooth' } as ScrollToOptions
      // scrollContainer?.scrollTo(param)
      // linkEl.scrollIntoView({ behavior: 'smooth' })
      // scrollContainer?.addEventListener('scroll', api.handleScroll())
      // }
    }
