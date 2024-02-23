import type { ExtractPropTypes } from 'vue'
import type { skeletonProps, $constants } from '@/skeleton/src'

export type ISkeletonProps = ExtractPropTypes<typeof skeletonProps>

export type ISkeletonConstants = typeof $constants

export interface ISkeletonApi {
  toPxStyle: (value: string | number) => string | undefined
}
