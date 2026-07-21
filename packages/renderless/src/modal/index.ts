/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import { KEY_CODE } from '@opentiny/utils'
import { on, off, addClass, hasClass, removeClass } from '@opentiny/utils'
import { PopupManager } from '@opentiny/utils'
import { getDomNode } from '@opentiny/utils'
import { getViewportWindow } from '@opentiny/utils'

import type {
  IModalProps,
  IModalRenderlessParams,
  IModalEmitZoomParam,
  IModalApi,
  IModalEmitParam,
  IModalRenderlessParamUtils,
  IModalComputeTopParam,
  IModalComputeLeftParam,
  IModalComputeRightParam,
  IModalComputeBottomParam,
  IModalRet,
  IModalUpdateWlParam,
  IModalUpdateWrParam,
  IModalUpdateStParam,
  IModalUpdateDeltaParam,
  IModalSetModalBoxStyleParam,
  IModalUpdateSbParam
} from '@/types'

const DragClass = 'is__drag'

const emitZoom = ({ params, parent, emit, event }: IModalEmitZoomParam): void => {
  let { $listeners, events = {} } = parent
  if ($listeners.zoom) {
    emit('zoom', params, event)
  } else if (events.zoom) {
    events.zoom.call(parent, params, event)
  }
}

export const MsgQueue: IModalRenderlessParams['vm'][] = []

export const computedIsMsg =
  () =>
  (props: IModalProps): boolean =>
    props.type === 'message'

export const computedBoxStyle =
  ({ props, isMobileFirstMode }: Pick<IModalRenderlessParams, 'props' | 'isMobileFirstMode'>) =>
  (): { width?: string | number; height?: string | number } => {
    if (isMobileFirstMode) {
      return {}
    }

    let width: string | number = ''
    let height: string | number = ''

    if (props.width) {
      width = isNaN(props.width as number) ? props.width : `${props.width}px`
    }

    if (props.height) {
      height = isNaN(props.height as number) ? props.height : `${props.height}px`
    }

    return { width, height }
  }

// ========== watchValue 直接调用 doClose，不再触发 beforeClose ==========
export const watchValue =
  (api: IModalApi) =>
  (visible: boolean): void =>
    visible ? api.open() : api.doClose('hide')

export const watchVisible =
  ({ api, props }) =>
  (visible) => {
    if (props.lockScroll) {
      visible ? api.showScrollbar() : api.hideScrollbar()
    }
  }

export const created =
  ({ api, props, state }: Pick<IModalRenderlessParams, 'api' | 'props' | 'state'>) =>
  (): void => {
    if (props.modelValue) {
      api.open()
    }

    state.modalZindex = props.zIndex || PopupManager.nextZIndex()
  }

export const mounted =
  ({
    api,
    parent,
    props,
    isMobileFirstMode,
    state
  }: Pick<IModalRenderlessParams, 'api' | 'parent' | 'props' | 'isMobileFirstMode' | 'state'>) =>
  () => {
    if (!isMobileFirstMode) {
      let modalBoxElem = api.getBox()

      Object.assign(modalBoxElem.style, {
        width: props.width ? (isNaN(props.width) ? props.width : `${props.width}px`) : null,

        height: props.height ? (isNaN(props.height) ? props.height : `${props.height}px`) : null
      })

      if (props.lockScroll && state.visible) {
        api.showScrollbar()
      }
    } else {
      on(window, 'resize', api.resetDragStyle)
    }

    if (props.escClosable) {
      on(document, 'keydown', api.handleGlobalKeydownEvent)
    }

    on(window, 'hashchange', api.handleHashChange)

    document.body.appendChild(parent.$el)
  }

export const beforeUnmouted =
  ({ api, parent, isMobileFirstMode }: Pick<IModalRenderlessParams, 'api' | 'parent' | 'isMobileFirstMode'>) =>
  (): void => {
    isMobileFirstMode && off(window, 'resize', api.resetDragStyle)
    off(document, 'keydown', api.handleGlobalKeydownEvent)
    off(window, 'hashchange', api.handleHashChange)
    off(window, 'resize', api.resetModalViewPosition)
    api.removeMsgQueue()
    api.hideScrollbar()

    if (parent.$el.parentNode) {
      parent.$el.parentNode.removeChild(parent.$el)
    }
  }

export const selfClickEvent =
  ({ api, parent, props }: Pick<IModalRenderlessParams, 'api' | 'parent' | 'props'>) =>
  (event: MouseEvent): void => {
    if (props.maskClosable && event.target === parent.$el) {
      api.close('mask')
    }
  }

export const mouseEnterEvent = (state) => (): void => {
  clearTimeout(state.timer)
}

export const mouseLeaveEvent =
  ({ api, props, state }: Pick<IModalRenderlessParams, 'api' | 'props' | 'state'>) =>
  (): void => {
    api.addMsgQueue()

    const duration = parseFloat(props.duration as string)
    if (duration > 0) {
      state.timer = window.setTimeout(() => {
        api.close('close')
      }, duration)
    }
  }

export const updateZindex =
  ({ state, props }: Pick<IModalRenderlessParams, 'state' | 'props'>) =>
  (): void => {
    state.modalZindex = props.zIndex || PopupManager.nextZIndex()
  }

// 新增：执行实际关闭逻辑（动画 + emit hide）此方法不触发 beforeClose，用于程序内部直接关闭
export const doClose =
  ({ emit, parent, props, state }: Pick<IModalRenderlessParams, 'emit' | 'parent' | 'props' | 'state'>) =>
  (type: string): void => {
    // 如果已经在关闭动画中，直接返回，防止重复触发
    if (state.isClosingAnimation) {
      return
    }
    state.isClosingAnimation = true

    let { events = {} } = parent
    state.emitter.emit('boxclose', props.isFormReset)

    if (state.visible) {
      state.contentVisible = false
      setTimeout(() => {
        state.visible = false
        let params = { type, $modal: parent }
        if (events.hide) {
          events.hide.call(parent, params)
        } else {
          emit('update:modelValue', false)
          emit('hide', params)
        }
        // 关闭动画完成后清理所有标记
        state.isClosingAnimation = false
        state.isClosing = false
        state.beforeCloseDoneCalled = false
      }, 150)
    } else {
      // 如果已经不可见，直接清理标记
      state.isClosingAnimation = false
      state.isClosing = false
      state.beforeCloseDoneCalled = false
    }
  }

// 先执行 doClose 开始关闭动画，然后异步执行 events 回调
export const doEmitAndClose =
  ({
    api,
    emit,
    parent,
    isMobileFirstMode
  }: Pick<IModalRenderlessParams, 'api' | 'emit' | 'parent' | 'isMobileFirstMode'>) =>
  (type: string, event?: Event, options?: any[]): void => {
    const { events = {} } = parent

    const params: IModalEmitParam = {
      type,
      $modal: parent
    }

    if (isMobileFirstMode && type === 'confirm') {
      params.options = options
    }

    // 先 emit Vue 事件
    emit(type, params, event)

    // 立即开始关闭动画
    api.doClose(type)

    setTimeout(() => {
      events[type] && events[type].call(parent, params)
    }, 0)
  }

// 新增：统一的 beforeClose 处理逻辑
export const runBeforeClose =
  ({ api, props, state }: Pick<IModalRenderlessParams, 'api' | 'props' | 'state'>) =>
  async (type: string, onConfirm: () => void): Promise<boolean> => {
    // confirm 和 cancel 不触发 beforeClose，直接允许关闭
    if (type === 'confirm' || type === 'cancel') {
      return true
    }

    if (typeof props.beforeClose !== 'function') {
      return true
    }

    // 如果 done() 已经被调用过，说明关闭流程已确认，直接执行
    if (state.beforeCloseDoneCalled) {
      return true
    }

    const done = () => {
      state.beforeCloseDoneCalled = true
      onConfirm()
    }

    const result = props.beforeClose(type, api.getBox ? api.getBox() : null, done)

    // 处理 Promise 返回值
    if (result && typeof result.then === 'function') {
      try {
        const shouldClose = await result
        return shouldClose !== false
      } catch (e) {
        return false
      }
    }

    // 处理同步返回值
    if (result === false) {
      return false
    }

    return true
  }

// 修改后的 handleEvent —— 按钮触发（close/confirm/cancel）
export const handleEvent =
  ({ api, state }: Pick<IModalRenderlessParams, 'api' | 'state'>) =>
  async (type: string, event: Event, options?: any[]) => {
    // confirm 和 cancel 直接关闭，不触发 beforeClose
    if (type === 'confirm' || type === 'cancel') {
      api.doEmitAndClose(type, event, options)
      return
    }

    // close 触发 beforeClose
    if (state.isClosing) {
      return
    }

    state.isClosing = true

    const shouldClose = await api.runBeforeClose(type, () => {
      api.doEmitAndClose(type, event, options)
    })

    if (shouldClose && !state.beforeCloseDoneCalled) {
      api.doEmitAndClose(type, event, options)
    } else {
      // beforeClose 返回 false，清理标记
      state.isClosing = false
    }
  }

export const closeEvent =
  (api: IModalApi) =>
  (event: PointerEvent): void => {
    api.handleEvent('close', event)
  }

export const confirmEvent =
  ({ api, state }: Pick<IModalRenderlessParams, 'api' | 'state'>) =>
  (event: PointerEvent): void => {
    api.handleEvent('confirm', event, state.options)
  }

export const cancelEvent =
  (api: IModalApi) =>
  (event: PointerEvent): void => {
    api.handleEvent('cancel', event)
  }

export const open =
  ({
    api,
    emit,
    nextTick,
    parent,
    props,
    state,
    isMobileFirstMode
  }: Pick<IModalRenderlessParams, 'api' | 'emit' | 'nextTick' | 'parent' | 'props' | 'state' | 'isMobileFirstMode'>) =>
  (): void => {
    let { $listeners, events = {} } = parent

    if (!state.visible) {
      let params = { type: 'show', $modal: parent }

      state.visible = true
      state.contentVisible = false
      api.updateZindex()

      if (!events.show) {
        emit('update:modelValue', true)
        emit('show', params)
      }

      setTimeout(() => {
        state.contentVisible = true

        if (!$listeners.show && events.show) {
          nextTick(() => {
            events.show.call(parent, params)
          })
        }
      }, 10)

      if (state.isMsg) {
        api.addMsgQueue()

        const duration = parseFloat(props.duration as string)
        if (duration > 0) {
          state.timer = window.setTimeout(() => {
            api.close(params.type)
          }, duration)
        }
      } else {
        nextTick(() => {
          if (!isMobileFirstMode) {
            let modalBoxElem = api.getBox()

            const viewportWindow = getViewportWindow()

            let clientVisibleWidth =
              viewportWindow.document.documentElement.clientWidth || viewportWindow.document.body.clientWidth

            let clientVisibleHeight =
              viewportWindow.document.documentElement.clientHeight || viewportWindow.document.body.clientHeight

            let width = isNaN(props.width) ? props.width : `${props.width}px`
            if (width) {
              modalBoxElem.style.left = 'calc((100vw - ' + width + ') / 2)'
            } else {
              modalBoxElem.style.left = `${clientVisibleWidth / 2 - modalBoxElem.offsetWidth / 2}px`
            }
            if (
              modalBoxElem.offsetHeight + modalBoxElem.offsetTop + (props.marginSize as number) >
              clientVisibleHeight
            ) {
              modalBoxElem.style.top = `${props.marginSize}px`
            }
            on(window, 'resize', api.resetModalViewPosition)
          }

          if (props.fullscreen) {
            nextTick(api.maximize)
          } else {
            api.revert()
          }
        })
      }
    }
  }

export const addMsgQueue =
  ({ api, parent }: Pick<IModalRenderlessParams, 'api' | 'parent'>) =>
  (): void => {
    if (!~MsgQueue.indexOf(parent)) {
      MsgQueue.push(parent)
    }

    api.updateStyle()
  }

export const removeMsgQueue =
  ({ api, parent }: Pick<IModalRenderlessParams, 'api' | 'parent'>) =>
  (): void => {
    const index = MsgQueue.indexOf(parent)

    if (~index) {
      MsgQueue.splice(index, 1)
    }

    api.updateStyle()
  }

export const updateStyle =
  ({ nextTick, props }: Pick<IModalRenderlessParams, 'nextTick' | 'props'>) =>
  () => {
    nextTick(() => {
      let offsetTop = 0
      let distance = props.top

      MsgQueue.forEach((comp: IModalRenderlessParams['vm']) => {
        offsetTop += parseFloat(distance as string)
        comp.state.modalTop = offsetTop

        const modalBox = comp.$refs.modalBox

        offsetTop += modalBox.clientHeight
        distance = 15
      })
    })
  }

// 修改后的 close —— 非按钮触发（esc/mask/hide/timer）
export const close =
  ({ api, state }: Pick<IModalRenderlessParams, 'api' | 'state'>) =>
  async (type: string): Promise<void> => {
    // 如果 done() 已经被调用过，直接执行关闭，不再触发 beforeClose
    if (state.beforeCloseDoneCalled) {
      api.doClose(type)
      return
    }

    // 如果正在关闭动画中，直接返回
    if (state.isClosingAnimation) {
      return
    }

    // 如果正在关闭流程中，阻止重复触发
    if (state.isClosing) {
      return
    }

    state.isClosing = true

    const shouldClose = await api.runBeforeClose(type, () => {
      api.doClose(type)
    })

    if (shouldClose && !state.beforeCloseDoneCalled) {
      api.doClose(type)
    } else {
      state.isClosing = false
    }
  }

export const handleGlobalKeydownEvent =
  (api: IModalApi) =>
  (event: KeyboardEvent): void => {
    if (event.keyCode === KEY_CODE.Escape) {
      api.doClose('esc')
    }
  }

export const handleHashChange = (api: IModalApi) => (): void => {
  api.close('hide')
}

export const getBox =
  ({ vm }: Pick<IModalRenderlessParams, 'vm'>) =>
  (): IModalRenderlessParams['vm'] =>
    vm.$refs.modalBox

export const maximize =
  ({
    api,
    nextTick,
    props,
    state,
    isMobileFirstMode
  }: Pick<IModalRenderlessParams, 'api' | 'nextTick' | 'props' | 'state' | 'isMobileFirstMode'>) =>
  (): Promise<void> => {
    return nextTick().then(() => {
      if (!state.zoomLocat) {
        let marginSize = props.marginSize
        let modalBoxElement = api.getBox()
        let { visibleHeight, visibleWidth } = getDomNode()

        state.zoomLocat = {
          top: modalBoxElement.offsetTop,
          left: modalBoxElement.offsetLeft,
          width: modalBoxElement.clientWidth,
          height: modalBoxElement.clientHeight
        }

        if (!isMobileFirstMode) {
          Object.assign(modalBoxElement.style, {
            width: `${visibleWidth - <number>marginSize * 2}px`,
            height: `${visibleHeight - <number>marginSize * 2}px`,
            top: `${marginSize}px`,
            left: `${marginSize}px`
          })
        }

        state.emitter.emit('boxdrag')
      }
    })
  }

export const revert =
  ({
    api,
    nextTick,
    state,
    isMobileFirstMode
  }: Pick<IModalRenderlessParams, 'api' | 'nextTick' | 'state' | 'isMobileFirstMode'>) =>
  (): Promise<void> => {
    return nextTick().then(() => {
      let zoomLocat = state.zoomLocat

      if (zoomLocat) {
        let modalBoxElement = api.getBox()

        state.zoomLocat = null

        if (!isMobileFirstMode) {
          Object.assign(modalBoxElement.style, {
            width: `${zoomLocat.width}px`,
            height: `${zoomLocat.height}px`,
            top: `${zoomLocat.top}px`,
            left: `${zoomLocat.left}px`
          })
        }

        state.emitter.emit('boxdrag')
      }
    })
  }

export const toggleZoomEvent =
  ({
    api,
    emit,
    parent,
    state,
    isMobileFirstMode
  }: Pick<IModalRenderlessParams, 'api' | 'emit' | 'parent' | 'state' | 'isMobileFirstMode'>) =>
  (event: PointerEvent): Promise<void> => {
    let params = { type: state.zoomLocat ? 'min' : 'max', $modal: parent }
    const callback = state.zoomLocat ? api.revert : api.maximize

    isMobileFirstMode && api.resetDragStyle()

    return callback().then(() => {
      emitZoom({ params, parent, emit, event })
    })
  }

function getEventTargetNode(
  event: MouseEvent,
  container: IModalRenderlessParams['vm'],
  queryCls: string
): { flag: boolean; container?: IModalRenderlessParams['vm']; targetElem?: IModalRenderlessParams['vm'] } {
  let targetElem
  let target = event.target as any

  while (target && target.nodeType && target !== document) {
    if (queryCls && hasClass(target, queryCls)) {
      targetElem = target
    } else if (target === container) {
      return {
        flag: queryCls ? !!targetElem : true,
        container,
        targetElem
      }
    }

    target = target.parentNode
  }

  return { flag: false }
}

export const mousedownEvent =
  ({
    api,
    nextTick,
    props,
    state,
    emit,
    isMobileFirstMode
  }: Pick<IModalRenderlessParams, 'api' | 'nextTick' | 'props' | 'state' | 'emit' | 'isMobileFirstMode'>) =>
  (event: MouseEvent): void => {
    let modalBoxElement = api.getBox()

    if (!state.zoomLocat && event.button === 0 && !getEventTargetNode(event, modalBoxElement, 'trigger__btn').flag) {
      event.preventDefault()

      let demMousemove = document.onmousemove
      let demMouseup = document.onmouseup
      let disX = event.clientX - modalBoxElement.offsetLeft
      let disY = event.clientY - modalBoxElement.offsetTop
      let { visibleHeight, visibleWidth } = getDomNode()

      document.onmousemove = (event) => {
        event.preventDefault()
        state.emitter.emit('boxdrag')

        let offsetWidth = modalBoxElement.offsetWidth
        let offsetHeight = modalBoxElement.offsetHeight
        let left = event.clientX - disX
        let top = event.clientY - disY
        let minX, maxX, minY, maxY

        if (isMobileFirstMode) {
          minX = offsetWidth / 2 + <number>props.marginSize
          maxX = visibleWidth - offsetWidth / 2 - <number>props.marginSize
          minY = offsetHeight / 2 + <number>props.marginSize
          maxY = visibleHeight - offsetHeight / 2 - <number>props.marginSize
        } else {
          minX = props.marginSize
          maxX = visibleWidth - offsetWidth - <number>props.marginSize
          minY = props.marginSize
          maxY = visibleHeight - offsetHeight - <number>props.marginSize
        }

        if (left < minX) {
          left = minX
        }

        if (left > maxX) {
          left = maxX
        }

        if (top < minY) {
          top = minY
        }

        if (top > maxY) {
          top = maxY
        }

        modalBoxElement.style.left = `${left}px`
        modalBoxElement.style.top = `${top}px`

        addClass(modalBoxElement, DragClass)

        emit('custom-mousemove', event)
      }

      document.onmouseup = (event) => {
        document.onmousemove = demMousemove
        document.onmouseup = demMouseup

        nextTick(() => {
          removeClass(modalBoxElement, DragClass)
        })

        emit('custom-mouseup', event)
      }

      emit('custom-mousedown', event)
    }
  }

const computeLeft = ({
  width,
  offsetWidth,
  x,
  minWidth,
  temp,
  offsetLeft,
  marginSize,
  left
}: IModalComputeLeftParam): { width: number; left: number } => {
  width = offsetWidth - x
  width = width < (minWidth as number) ? (minWidth as number) : width
  temp = offsetLeft + offsetWidth - (marginSize as number)
  width = width > temp ? temp : width
  left = offsetLeft + offsetWidth - width

  return { width, left }
}

const computeTop = ({
  height,
  offsetHeight,
  y,
  minHeight,
  temp,
  offsetTop,
  marginSize,
  top
}: IModalComputeTopParam): { height: number; top: number } => {
  height = offsetHeight - y
  height = height < (minHeight as number) ? (minHeight as number) : height
  temp = offsetTop + offsetHeight - (marginSize as number)
  height = height > temp ? temp : height
  top = offsetTop + offsetHeight - height

  return { height, top }
}

const computeRight = ({
  width,
  offsetWidth,
  x,
  minWidth,
  temp,
  visibleWidth,
  offsetLeft,
  marginSize
}: IModalComputeRightParam): { width: number } => {
  width = offsetWidth + x
  width = width < (minWidth as number) ? (minWidth as number) : width
  temp = visibleWidth - offsetLeft - (marginSize as number)
  width = width > temp ? temp : width

  return { width }
}

const computeBottom = ({
  height,
  offsetHeight,
  y,
  minHeight,
  temp,
  visibleHeight,
  offsetTop,
  marginSize
}: IModalComputeBottomParam): { height: number } => {
  height = offsetHeight + y
  height = height < (minHeight as number) ? (minHeight as number) : height
  temp = visibleHeight - offsetTop - (marginSize as number)
  height = height > temp ? temp : height

  return { height }
}

const updateModalBox = ({
  ret: { width, left, height, top },
  modalBoxElem: modalBoxElement
}: {
  ret: IModalRet
  modalBoxElem: IModalRenderlessParams['vm']
}): void => {
  if (width) {
    modalBoxElement.style.width = `${width}px`
  }

  if (left) {
    modalBoxElement.style.left = `${left}px`
  }

  if (height) {
    modalBoxElement.style.height = `${height}px`
  }

  if (top) {
    modalBoxElement.style.top = `${top}px`
  }
}

const updateWl = ({
  width,
  offsetWidth,
  x,
  minWidth,
  temp,
  offsetLeft,
  marginSize,
  left,
  modalBoxElem
}: IModalUpdateWlParam): void => {
  updateModalBox({
    ret: computeLeft({ width, offsetWidth, x, minWidth, temp, offsetLeft, marginSize, left }),
    modalBoxElem
  })
}

const updateWr = ({
  width,
  offsetWidth,
  x,
  minWidth,
  temp,
  visibleWidth,
  offsetLeft,
  marginSize,
  modalBoxElem
}: IModalUpdateWrParam): void => {
  updateModalBox({
    ret: computeRight({ width, offsetWidth, x, minWidth, temp, visibleWidth, offsetLeft, marginSize }),
    modalBoxElem
  })
}

const updateSt = ({
  height,
  offsetHeight,
  y,
  minHeight,
  temp,
  offsetTop,
  marginSize,
  top,
  modalBoxElem
}: IModalUpdateStParam): void => {
  updateModalBox({
    ret: computeTop({ height, offsetHeight, y, minHeight, temp, offsetTop, marginSize, top }),
    modalBoxElem
  })
}

const updateSb = ({
  height,
  offsetHeight,
  y,
  minHeight,
  temp,
  visibleHeight,
  offsetTop,
  marginSize,
  modalBoxElem
}: IModalUpdateSbParam): void => {
  updateModalBox({
    ret: computeBottom({ height, offsetHeight, y, minHeight, temp, visibleHeight, offsetTop, marginSize }),
    modalBoxElem
  })
}

const setModalBoxStyle = ({ params, delta: { x, y } }: IModalSetModalBoxStyleParam): void => {
  const { visibleHeight, visibleWidth, modalBoxElem, type, props } = params
  const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = modalBoxElem
  const { minWidth, minHeight, marginSize } = props
  const [width, left, temp, height, top] = [0, 0, 0, 0, 0]

  switch (type) {
    case 'wl':
      updateWl({ offsetWidth, width, minWidth, x, offsetLeft, temp, marginSize, left, modalBoxElem })
      break
    case 'wr':
      updateWr({ width, offsetWidth, x, minWidth, temp, visibleWidth, offsetLeft, marginSize, modalBoxElem })
      break
    case 'st':
      updateSt({ height, offsetHeight, y, minHeight, temp, offsetTop, marginSize, top, modalBoxElem })
      break
    case 'sb':
      updateSb({ height, offsetHeight, y, minHeight, temp, visibleHeight, offsetTop, marginSize, modalBoxElem })
      break
    case 'swst':
      updateWl({ width, offsetWidth, x, minWidth, temp, offsetLeft, marginSize, left, modalBoxElem })
      updateSt({ height, offsetHeight, y, minHeight, temp, offsetTop, marginSize, top, modalBoxElem })
      break
    case 'sest':
      updateWr({ offsetWidth, width, x, temp, minWidth, marginSize, visibleWidth, offsetLeft, modalBoxElem })
      updateSt({ height, offsetHeight, y, minHeight, temp, offsetTop, marginSize, top, modalBoxElem })
      break
    case 'swlb':
      updateWl({ width, offsetWidth, minWidth, x, temp, marginSize, offsetLeft, modalBoxElem, left })
      updateSb({ height, offsetHeight, y, minHeight, temp, visibleHeight, offsetTop, marginSize, modalBoxElem })
      break
    case 'selb':
      updateWr({ width, offsetWidth, minWidth, x, visibleWidth, offsetLeft, marginSize, temp, modalBoxElem })
      updateSb({ height, offsetHeight, y, minHeight, temp, visibleHeight, offsetTop, marginSize, modalBoxElem })
      break
    default:
      break
  }
}

const updateDelta = ({ event, delta, state }: IModalUpdateDeltaParam): void => {
  if (state.prevEvent) {
    delta.x += event.screenX - (state.prevEvent as any).screenX
    delta.y += event.screenY - (state.prevEvent as any).screenY
  }

  state.prevEvent = event
}

function _findFormComponent(vm: IModalRenderlessParams['vm'], formList: IModalRenderlessParams['vm'][]): void {
  const children = vm.$children

  if (children && children.length === 0) {
    return
  }

  children.forEach((child) => {
    const tag = child.$options.componentName

    if (/^Form$/.test(tag)) {
      formList.push(child)
    }

    _findFormComponent(child, formList)
  })
}

function findFormComponent(vm: IModalRenderlessParams['vm']): IModalRenderlessParams['vm'][] {
  const formList = []
  _findFormComponent(vm, formList)
  return formList
}

export const updateFormTip = (parent: IModalRenderlessParamUtils['parent']): void => {
  const formList = findFormComponent(parent)

  if (formList.length > 0) {
    formList.forEach((form: IModalRenderlessParamUtils['vm']) => {
      form.updateTip()
    })
  }
}

export const dragEvent =
  ({ api, emit, parent, props, state }: Pick<IModalRenderlessParams, 'api' | 'emit' | 'parent' | 'props' | 'state'>) =>
  (event: MouseEvent) => {
    event.preventDefault()

    const delta = { x: 0, y: 0 }
    const { visibleHeight, visibleWidth } = getDomNode()
    const modalBoxElem = api.getBox()
    const demMousemove = document.onmousemove
    const demMouseup = document.onmouseup

    const params = {
      props,
      offsetTop: modalBoxElem.offsetTop,
      offsetLeft: modalBoxElem.offsetLeft,
      visibleWidth,
      modalBoxElem,
      visibleHeight,
      disX: event.clientX,
      disY: event.clientY,
      type: (<any>event.target)?.dataset.type
    }

    document.onmousemove = (event: MouseEvent) => {
      updateFormTip(parent)
      updateDelta({ event, delta, state })
      setModalBoxStyle({ params, delta })

      delta.x = delta.y = 0

      addClass(modalBoxElem, DragClass)

      emitZoom({
        params: { type: 'resize', $modal: parent },
        parent,
        emit,
        event
      })
    }

    document.onmouseup = () => {
      state.zoomLocat = null
      document.onmousemove = demMousemove
      document.onmouseup = demMouseup

      setTimeout(() => {
        removeClass(modalBoxElem, DragClass)
        state.prevEvent = null
      }, 50)
    }
  }

export const resetFormTip = (parent: IModalRenderlessParamUtils['parent'], isFormReset = true) => {
  const formList = findFormComponent(parent)

  if (formList.length > 0) {
    formList.forEach((form: IModalRenderlessParamUtils['vm']) => {
      isFormReset ? form.resetFields() : form.clearValidate()
    })
  }
}

export const resetDragStyle = (api: IModalApi) => (): void => {
  const modalBoxElement = api.getBox()
  modalBoxElement.style.left = ''
  modalBoxElement.style.top = ''
}

export const showScrollbar = (lockScrollClass) => () => {
  addClass(document.body, lockScrollClass)
}

export const hideScrollbar = (lockScrollClass) => (): void => {
  removeClass(document.body, lockScrollClass)
}

export const resetModalViewPosition = (api: IModalApi) => (): void => {
  const modalBoxElement = api.getBox()
  const viewportWindow = getViewportWindow()
  const clientVisibleWidth =
    viewportWindow.document.documentElement.clientWidth || viewportWindow.document.body.clientWidth
  modalBoxElement.style.left = `${clientVisibleWidth / 2 - modalBoxElement.offsetWidth / 2}px`
}
