import type { ExtractPropTypes } from 'vue'
import type { breadcrumbItemProps } from '@/breadcrumb-item/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export type IBreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>

export type IBreadcrumbItemRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  props: IBreadcrumbItemProps
}

export interface IBreadcrumbItemApi {
  linkClick: (event: MouseEvent) => void
}

export type IBreadcrumbItemRenderlessParamUtils = ISharedRenderlessParamUtils<never>
