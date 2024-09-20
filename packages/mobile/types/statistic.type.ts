import type { ExtractPropTypes } from 'vue'
import type { statisticProps, $constants } from '@/statistic/src'
import type { ISharedRenderlessFunctionParams } from './shared.type'

export type IStatisticProps = ExtractPropTypes<typeof statisticProps>

export type IStatisticConstants = typeof $constants

export interface IStatisticState {
  getIntegerAndDecimal: number | string
}
export interface IStatisticApi {
  getIntegerAndDecimal: (value: string | number) => string | undefined
}

export type IStatisticPcRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IStatisticState
  props: IStatisticProps
  api: IStatisticApi
}
