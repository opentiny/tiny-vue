import debounce from '../common/deps/debounce'
import { addClass, removeClass } from '../common/deps/dom'
import type { IDrawerState, IDrawerApi, IDrawerCT, ISharedRenderlessParamUtils, IDrawerRenderlessParams } from '@/types'

export const computedWidth =
  ({
    state,
    designConfig,
    props,
    constants
  }: Pick<IDrawerRenderlessParams, 'state' | 'designConfig' | 'props' | 'constants'>) =>
  (): string => {
    if (state.width) {
      return state.width + 'px'
    }

    return props.width || designConfig?.constants?.DEFAULT_WIDTH || (constants as IDrawerCT).DEFAULT_WIDTH
  }

export const computedHeight =
  ({
    state,
    designConfig,
    props,
    constants
  }: Pick<IDrawerRenderlessParams, 'state' | 'designConfig' | 'props' | 'constants'>) =>
  (): string => {
    if (state.height) {
      return state.height + 'px'
    }
    return props.height || designConfig?.constants?.DEFAULT_HEIGHT || (constants as IDrawerCT).DEFAULT_HEIGHT
  }

export const close =
  ({ api }: { api: IDrawerApi }) =>
  (force = false) => {
    api.handleClose('close', typeof force === 'boolean' ? force : false)
  }

export const watchVisible =
  ({ state, api }: Pick<IDrawerRenderlessParams, 'state' | 'api'>) =>
  (value: boolean) => {
    // tiny优化抽屉显隐逻辑
    value ? api.open() : api.close()
  }

export const open =
  ({ state, emit, vm }: Pick<IDrawerRenderlessParams, 'state' | 'emit' | 'vm'>) =>
  () => {
    if (!state.visible) {
      setTimeout(() => {
        state.visible = true
        emit('open', vm)
        emit('update:visible', true)
      }, 0)
    }
  }

export const confirm =
  ({ api }: { api: IDrawerApi }) =>
  () => {
    api.handleClose('confirm')
  }

export const handleClose =
  ({ emit, props, state }: Pick<IDrawerRenderlessParams, 'emit' | 'props' | 'state'>) =>
  (type: string, force?: boolean) => {
    const isMaskNotClosable = type === 'mask' && !props.maskClosable
    const isBlockClose = !force && typeof props.beforeClose === 'function' && props.beforeClose(type) === false
    if (isMaskNotClosable || isBlockClose) {
      return
    }

    if (state.visible) {
      state.visible = false
      setTimeout(() => {
        emit('update:visible', false)
        emit(['close', 'confirm'].includes(type) ? type : 'close')
      }, 200)
    }
  }

export const mousedown =
  ({ state, vm }: { vm: ISharedRenderlessParamUtils<IDrawerCT>['vm']; state: IDrawerState }) =>
  (event) => {
    event.preventDefault()

    const touch = event.touches ? event.touches[0] : event
    const drawerBox = vm.$refs.drawerBox

    state.dragEvent.isDrag = true
    state.dragEvent.x = touch.clientX
    state.dragEvent.y = touch.clientY
    state.dragEvent.offsetWidth = drawerBox.offsetWidth
    state.dragEvent.offsetHeight = drawerBox.offsetHeight
  }

export const mousemove = ({ state, props, emit }: Pick<IDrawerRenderlessParams, 'state' | 'props' | 'emit'>) =>
  debounce(1, (event) => {
    if (!state.dragEvent.isDrag) {
      return
    }

    event.preventDefault()

    const { placement } = props
    const {
      dragEvent: { x, y, offsetWidth, offsetHeight }
    } = state
    const { touches, targetTouches, changedTouches } = event
    const touch =
      (touches && touches[0]) || (targetTouches && targetTouches[0]) || (changedTouches && changedTouches[0])
    const { clientX, clientY } = touch || event
    const offsetX = clientX - x
    const offsetY = clientY - y

    if (placement === 'left') {
      state.width = offsetWidth + offsetX
    } else if (placement === 'right') {
      state.width = offsetWidth - offsetX
    } else if (placement === 'top') {
      const height = offsetHeight + offsetY
      state.height = height > 10 ? height : 10
    } else if (placement === 'bottom') {
      const height = offsetHeight - offsetY
      state.height = height > 10 ? height : 10
    }

    emit('drag', { width: state.width, height: state.height })
  }) as Parameters<Document['removeEventListener']>['1']

export const mouseup =
  ({ state }: { state: IDrawerState }) =>
  (event: MouseEvent) => {
    if (!state.dragEvent.isDrag) {
      return
    }

    event.preventDefault()
    state.dragEvent.isDrag = false
  }

export const addDragEvent =
  ({ api, vm }: { api: IDrawerApi; vm: ISharedRenderlessParamUtils<IDrawerCT>['vm'] }) =>
  () => {
    const el = vm.$refs.dragBar

    el.addEventListener('mousedown', api.mousedown)
    document.addEventListener('mousemove', api.mousemove)
    document.addEventListener('mouseup', api.mouseup)

    el.addEventListener('touchstart', api.mousedown)
    el.addEventListener('touchmove', api.mousemove)
    el.addEventListener('touchend', api.mouseup)
  }

export const removeDragEvent =
  ({ api, vm }: { api: IDrawerApi; vm: ISharedRenderlessParamUtils<IDrawerCT>['vm'] }) =>
  () => {
    const el = vm.$refs.dragBar

    el.removeEventListener('mousedown', api.mousedown)
    document.removeEventListener('mousemove', api.mousemove)
    document.removeEventListener('mouseup', api.mouseup)

    el.removeEventListener('touchstart', api.mousedown)
    el.removeEventListener('touchmove', api.mousemove)
    el.removeEventListener('touchend', api.mouseup)
  }

export const showScrollbar = (lockScrollClass: string) => () => {
  addClass(document.body, lockScrollClass)
}

export const hideScrollbar = (lockScrollClass: string) => () => {
  removeClass(document.body, lockScrollClass)
}
