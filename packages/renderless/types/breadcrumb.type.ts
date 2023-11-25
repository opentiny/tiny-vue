import type { ExtractPropTypes } from 'vue'
import type { breadcrumbProps, $constants } from '@/breadcrumb/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'

export interface IBreadcrumbState {
  breadcrumbEmitter: object
  currentBreadcrumbItem: object
}

export type IBreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>

export type IBreadcrumbConstants = typeof $constants

export type IBreadcrumbRenderlessParams = ISharedRenderlessFunctionParams<IBreadcrumbConstants> & {
  state: IBreadcrumbState
  props: IBreadcrumbProps
}

export interface IBreadcrumbApi {
  state: IBreadcrumbState
  breadcrumbItemSelect: () => void
}

export type IBreadcrumbRenderlessParamUtils = ISharedRenderlessParamUtils<IBreadcrumbConstants>
