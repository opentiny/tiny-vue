import type { ISkeletonProps, ISkeletonApi, ISharedRenderlessParamHooks } from '@/types'
import { toPxStyle } from './index'

export const api = ['toPxStyle']

export const renderless = (props: ISkeletonProps, { toRefs, provide }: ISharedRenderlessParamHooks): ISkeletonApi => {
  const { active } = toRefs(props)
  provide('active', active)

  const api = {
    toPxStyle
  }
  return api
}
