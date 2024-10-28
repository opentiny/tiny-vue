import type { ExtractPropTypes, ref } from 'vue'
import type { userContactProps } from '@/user-contact/src'
import type { ISharedRenderlessFunctionParams, ISharedRenderlessParamUtils } from './shared.type'
import type { getUserHref, doUserAction, initEspaceLink, openEspace } from '../src/user-contact'
import type { testUID } from '../src/espace'

export type IUserContactProps = ExtractPropTypes<typeof userContactProps>

export interface IUserContactState {
  initialized: boolean
}

export type IUserContactRenderlessParams = ISharedRenderlessFunctionParams<never> & {
  api: IUserContactApi
  state: IUserContactState
  props: IUserContactProps
}

export interface IUserContactApi {
  state: IUserContactState
  testUID: ReturnType<typeof testUID>
  show: ReturnType<typeof ref>
  getUserHref: ReturnType<typeof getUserHref>
  initEspaceLink: ReturnType<typeof initEspaceLink>
  doUserAction: ReturnType<typeof doUserAction>
  openEspace: ReturnType<typeof openEspace>
}

export type IUserContactRenderlessParamUtils = ISharedRenderlessParamUtils<never>
