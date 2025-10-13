import type { ColorPanelContext, IColorSelectPanelMaybeRef, ISharedRenderlessParamHooks } from '@/types'

export const ContextKey = Symbol('')

export const createContext = (
  data: IColorSelectPanelMaybeRef<ColorPanelContext>,
  hooks: ISharedRenderlessParamHooks
) => {
  hooks.provide(ContextKey, data)
  return data
}

export const useContext = (hooks: ISharedRenderlessParamHooks) => {
  return hooks.inject(ContextKey) as ColorPanelContext
}
