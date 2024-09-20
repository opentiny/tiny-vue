import type { ExtractPropTypes } from 'vue'
import type { badgeProps } from '@/badge/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { computedValueRef, computedContent, computedTransform } from '../src/badge'

export type IBadgeContent = string | number | undefined
export interface IBadgeState {
  isOverstep: boolean
  valueRef: number | undefined
  content: IBadgeContent
  href: string
}

export type IBadgeProps = ExtractPropTypes<typeof badgeProps>

export type IBadgeRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  state: IBadgeState
  props: IBadgeProps
}

export interface IBadgeApi {
  state: IBadgeState
  computedValueRef: ReturnType<typeof computedValueRef>
  computedContent: ReturnType<typeof computedContent>
  computedTransform: ReturnType<typeof computedTransform>
}

export type IBadgeRenderlessParamUtils = ISharedRenderlessParamUtils<never>
