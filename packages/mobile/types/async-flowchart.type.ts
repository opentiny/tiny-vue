import type { ExtractPropTypes } from 'vue'
import type { asyncFlowchartProps } from '@/async-flowchart/src'
import type ResizeObserver from '../src/common/deps/ResizeObserver'
import type {
  observeContainerSize,
  unobserveContainerSize,
  handleClickNode,
  handleClickLink,
  handleClickBlank,
  handleClickGroup,
  fetchData,
  refresh
} from '../src/async-flowchart'

export interface IAsyncFlowchartState {
  loading: boolean
  data: null
  config: null | { nodeWrapperSize: number }
  temporary?: typeof ResizeObserver
}

export type IAsyncFlowchartProps = ExtractPropTypes<typeof asyncFlowchartProps>

export interface IAsyncFlowchartApi {
  state: IAsyncFlowchartState
  observeContainerSize: ReturnType<typeof observeContainerSize>
  unobserveContainerSize: ReturnType<typeof unobserveContainerSize>
  handleClickNode: ReturnType<typeof handleClickNode>
  handleClickLink: ReturnType<typeof handleClickLink>
  handleClickBlank: ReturnType<typeof handleClickBlank>
  handleClickGroup: ReturnType<typeof handleClickGroup>
  fetchData: ReturnType<typeof fetchData>
  refresh: ReturnType<typeof refresh>
}
