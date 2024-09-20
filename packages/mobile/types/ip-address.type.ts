import type { ExtractPropTypes, ComputedRef } from 'vue'
import type { ipAddressProps } from '@/ip-address/src'
import type { ISharedRenderlessParamUtils } from './shared.type'
import type {
  getCursorPosition,
  select,
  focus,
  keyup,
  blur,
  change,
  keydown,
  inputEvent,
  isIP6,
  isIP4,
  getValue,
  setValue,
  ipValidator
} from '../src/ip-address'

export interface IIpAddressState {
  active: boolean
  isDel: boolean
  isSelected: boolean
  filterKeyCodes: number[]
  formDisabled: ComputedRef<boolean>
  disabled: ComputedRef<boolean>
  heightStyle: ComputedRef<string>
  lineHeightStyle: ComputedRef<string>
  allHeightStyle: ComputedRef<string>
  api: Record<string, (str: any) => boolean>
  address: { value: string }[]
}
export type IIpAddressProps = ExtractPropTypes<typeof ipAddressProps>
export interface IIpAddressApi {
  state: IIpAddressState
  dispatch: IIpAddressRenderlessParamUtils['dispatch']
  broadcast: IIpAddressRenderlessParamUtils['broadcast']
  getCursorPosition: typeof getCursorPosition
  focus: ReturnType<typeof focus>
  select: ReturnType<typeof select>
  blur: ReturnType<typeof blur>
  keyup: ReturnType<typeof keyup>
  change: ReturnType<typeof change>
  keydown: ReturnType<typeof keydown>
  inputEvent: ReturnType<typeof inputEvent>
  isIP6: typeof isIP6
  isIP4: typeof isIP4
  getValue?: ReturnType<typeof getValue>
  setValue?: ReturnType<typeof setValue>
  ipValidator?: ReturnType<typeof ipValidator>
}

export type IIpAddressRenderlessParamUtils = ISharedRenderlessParamUtils<null>
