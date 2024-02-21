import type { ExtractPropTypes } from 'vue'
import type { areaProps } from '@/area/src'
import type { getRegion, changeOffice, getRep, getOffice, fetchDefaultData, beforeMount } from '../src/area'
import type { ISharedRenderlessParamUtils } from '@/types'

export interface LabeValue {
  label: string
  value: string
}

export interface IAreaState {
  jcr: string
  region: string
  rep: string
  office: string
  jcrData: LabeValue[]
  regionData: LabeValue[]
  repData: LabeValue[]
  officeData: LabeValue[]
}

export interface IAreaRenderlessParams {
  emit: ISharedRenderlessParamUtils['emit']
  fetchArea: (args: { label: string; parent: string }) => Promise<LabeValue[]>
  nextTick: ISharedRenderlessParamUtils['nextTick']
  props: IAreaProps
  refs: ISharedRenderlessParamUtils['refs']
  state: IAreaState
}

export type IAreaProps = ExtractPropTypes<typeof areaProps>

export interface IAreaApi {
  state: IAreaState
  changeOffice: ReturnType<typeof changeOffice>
  beforeMount: ReturnType<typeof beforeMount>
  getRep: ReturnType<typeof getRep>
  getRegion: ReturnType<typeof getRegion>
  getOffice: ReturnType<typeof getOffice>
  fetchDefaultData: ReturnType<typeof fetchDefaultData>
}
