import { mounted, reRenderWatermark, unmounted, useWatermarkBg, watchProps } from 'src/watermark'

interface IWatermarkState {
  div: HTMLDivElement
  ob: MutationObserver
  bg: ReturnType<typeof useWatermarkBg>
  flag: number
}

export interface IWatermarkApi {
  state: IWatermarkState
  mounted: ReturnType<typeof mounted>
  reRenderWatermark: ReturnType<typeof reRenderWatermark>
  unmounted: ReturnType<typeof unmounted>
  watchProps: ReturnType<typeof watchProps>
}
