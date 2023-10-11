import type { ExtractPropTypes } from 'vue'
import { imageProps, $constants } from '@/image/src'
import { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import {
  computedGetImageStyle,
  computedGetPreview,
  loadImage,
  handleLoad,
  handleError,
  handleLazyLoad,
  addLazyLoadListener,
  removeLazyLoadListener,
  clickHandler,
  closeViewer,
  mounted,
  deleteHander
} from '../src/image'

export type IImageProps = ExtractPropTypes<typeof imageProps>

export type IImageConstants = typeof $constants

export interface IImageState {
  mfPreviewVisible: boolean
  /** mobile-first传入的一张image-error的图片 */
  images: any
  error: boolean
  loading: boolean
  imageWidth: number
  imageHeight: number
  show: boolean
  showViewer: boolean
  /** 判定previewSrcList不为空是，返回true。 名字更应该为： hasPreview */
  getPreview: boolean
  getImageStyle: object

  // 临时保存变量
  _scrollContainer: HTMLElement | null
  _lazyLoadHandler: ((...args: any[]) => void) | null
}

export interface IImageApi {
  state: IImageState
  closeViewer: ReturnType<typeof closeViewer>
  clickHandler: ReturnType<typeof clickHandler>
  handleLoad: ReturnType<typeof handleLoad>
  handleError: ReturnType<typeof handleError>
  computedGetPreview: ReturnType<typeof computedGetPreview>
  removeLazyLoadListener: ReturnType<typeof removeLazyLoadListener>
  mounted: ReturnType<typeof mounted>
  handleLazyLoad: ReturnType<typeof handleLazyLoad>
  loadImage: ReturnType<typeof loadImage>
  computedGetImageStyle: ReturnType<typeof computedGetImageStyle>
  addLazyLoadListener: ReturnType<typeof addLazyLoadListener>
  deleteHander: ReturnType<typeof deleteHander>
}

/** image的混合上下文 */
export type IImageRenderlessParams = ISharedRenderlessFunctionParams<IImageConstants> & {
  state: IImageState
  props: IImageProps
  api: IImageApi
  images: any
}

/** renderless第3参 */
export type IImageRenderlessParamUtils = ISharedRenderlessParamUtils<IImageConstants>
