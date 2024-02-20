import type { ExtractPropTypes } from 'vue'
import type { skeletonItemProps, $constants } from '@/skeleton-item/src'

export type ISkeletonItemProps = ExtractPropTypes<typeof skeletonItemProps>

export type ISkeletonItemConstants = typeof $constants

export interface ISkeletonItemState {
  isActive: boolean
}

export interface ISkeletonItemApi {
  state: ISkeletonItemState
}
