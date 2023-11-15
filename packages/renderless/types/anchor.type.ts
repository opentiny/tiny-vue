import type { ExtractPropTypes } from 'vue'
import { anchorProps } from '@/anchor/src'
import { ISharedRenderlessFunctionParams } from './shared.type'
import {
  mounted,
  updated,
  unmounted,
  getContainer,
  linkClick,
  onItersectionObserver,
  setScrollContainer,
  getCurrentAnchor,
  setFixAnchor,
  handleScroll
} from '../src/anchor'

type IAnchorObject = HTMLElement | null

export interface IAnchorState {
  currentLink: string
  observerLinks: object
  expandLink: object
  intersectionObserver: IAnchorObject
  scrollContainer: IAnchorObject
  currentHash: string
  isScroll: boolean
  scrollTimer: number
  offsetTop: number
}

export type IAnchorProps = ExtractPropTypes<typeof anchorProps>

export interface IAnchorLinkItem {
  key: string
  link: string
  title: string
}

export interface IAnchorApi {
  state: IAnchorState
  mounted: ReturnType<typeof mounted>
  updated: ReturnType<typeof updated>
  unmounted: ReturnType<typeof unmounted>
  getContainer: ReturnType<typeof getContainer>
  linkClick: ReturnType<typeof linkClick>
  onItersectionObserver: ReturnType<typeof onItersectionObserver>
  setScrollContainer: ReturnType<typeof setScrollContainer>
  getCurrentAnchor: ReturnType<typeof getCurrentAnchor>
  setFixAnchor: ReturnType<typeof setFixAnchor>
  handleScroll: ReturnType<typeof handleScroll>
}

export type IAnchorRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  props: IAnchorProps
  state: IAnchorState
  api: IAnchorApi
}
