import type { ISkeletonProps, ISkeletonApi, ISharedRenderlessParamHooks } from '@/types'
import { toPxStyle } from './index'

export const api = ['toPxStyle']

export const renderless = (props: ISkeletonProps, { toRefs, provide }: ISharedRenderlessParamHooks): ISkeletonApi => {
  const { animated } = toRefs(props)
  provide('animated', animated)

  const api = {
    toPxStyle
  }
  return api
}
