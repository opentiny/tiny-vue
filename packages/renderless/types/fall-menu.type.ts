import type { ExtractPropTypes, Ref } from 'vue'
import type { fallMenuProps } from '@/fall-menu/src'
import type {
  mouseover,
  mouseout,
  computePx,
  reRender,
  arrowClick,
  overContent,
  mounted,
  beforeDestroy,
  computeLeft,
  computeData
} from '../src/fall-menu'

export interface IPagerData {
  data: IFallMenuProps['data']
  offset: string[]
  index: number[]
  size?: number
}

export interface IFallMenuState {
  pager: number
  active: number
  level2data: IFallMenuProps['data']
  activeNode: null
  isActive: boolean
  pagerData: IPagerData
  left: any
  data: IFallMenuProps['data']
}
export type IFallMenuProps = ExtractPropTypes<typeof fallMenuProps> & { value: boolean }
export interface IFallMenuApi {
  fall: Ref<null>
  state: IFallMenuState
  computePx: ReturnType<typeof computePx>
  mounted: ReturnType<typeof mounted>
  computeLeft: ReturnType<typeof computeLeft>
  beforeDestroy: ReturnType<typeof beforeDestroy>
  computeData: ReturnType<typeof computeData>
  arrowClick: ReturnType<typeof arrowClick>
  overContent: ReturnType<typeof overContent>
  mouseout: ReturnType<typeof mouseout>
  mouseover: ReturnType<typeof mouseover>
  reRender: ReturnType<typeof reRender>
}
