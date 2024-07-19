import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from 'types/shared.type'
import type { scrollEvent, buildParamFunc } from 'src/grid/footer'

export type IGridFooterRenderlessParamUtils = ISharedRenderlessParamUtils

export type IGridFooterRenderlessParams = ISharedRenderlessFunctionParams<null> & {
  api: IGridFooterApi
}

export interface IGridFooterApi {
  scrollEvent: ReturnType<typeof scrollEvent>
  buildParamFunc: ReturnType<typeof buildParamFunc>
}
