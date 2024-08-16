import type { Placement, Strategy, OffsetOptions, RootBoundary, Boundary, ReferenceElement } from '@floating-ui/dom'
import { computePosition, autoUpdate, flip, offset, shift, arrow, hide, limitShift } from '@floating-ui/dom'

import { hooks } from '@opentiny/vue-common'

const { reactive, watch, markRaw, onBeforeUnmount } = hooks

interface IFloatOption {
  reference: null | ReferenceElement
  popper: null | HTMLElement
  /** ✅ 是否弹出 */
  show: boolean
  /** ✅ 是否自动更新位置 */
  autoUpdate: boolean // 更新策略有5种，4种默认为true。 就依默认策略进行update
  /** ✅ 弹出层定位策略, 【不建议修改】：  'absolute' | 'fixed'   https://floating-ui.com/docs/computePosition#strategy */
  strategy: Strategy
  /** ✅ 默认出现的12个位置 */
  placement: Placement
  /** ✅ 弹出层偏移量 支持  number | {mainAxis,crossAxis,alignmentAxis}
   *  1、只传入 number， 代表主轴上的偏移。
   *  2、crossAxis,alignmentAxis 都是副轴上的偏移， 区别是：
   *    crossAxis 固定向副轴的正方向偏移；
   *    alignmentAxis 在副轴上，根据placement的后段决定偏移。
   *      比如 top的副轴为水平方向。 指定alignmentAxis=20的话，    top-start时，向右20， top-end时 向左20。
   */
  offset: OffsetOptions
  /** ✅ 是否显示箭头 */
  arrowVisible: boolean
  /** ✅ 溢出的根边界, 取值为： viewport: 可视视口  document: 整个文档区域  或 自定义Rect：{ x,y,width,height}  【不建议切换,不太确定它影响哪些场景】
   *    在floating 内部， 计算所有 [...clippingAncestors, rootBoundary] 的rect 大小
   *    'viewport' 时，访问的是 window.visualViewport, 其 width是不带滚动条的宽度。
   */
  rootBoundary: RootBoundary
  /** ✅ 裁剪元素或区域元素。  默认为最近的rel元素。 此处可自定义为某个元素或Rect */
  boundary: Boundary
  /** ✅ 边界预留padding.  设置后，flip 快到边界时，提前就翻转 */
  boundaryPadding: number
  /** ✅ 引用元素不可见时，是否自动隐藏。 【需要启用autoUpdate】 */
  syncHide: boolean
  /** ✅ 元素弹出后，任何重新定位都自动关闭popper， 适用于右键菜单打开后，滚动就或日期组件在滚动时自动关闭。 【需要启用autoUpdate】 */
  autoHide: boolean
  /** ✅ 是否加速。 加速时，绑定popper的translate属性，否则绑定left/top。 【该属性不建议切换】 */
  gpuAcceleration: boolean
  /** ✅ 是否动画。  动画的机制简化， 不考虑前个动画未结束时，就开始下个动画的情况。 */
  animate: boolean
  /** ✅ 动画类名 */
  animateName: string
  /** ✅ 是否添加到body。【该属性不建议切换】
   *  true时，  显示popper时，才body.append; 隐藏时popper.remove。            boundary为 body.
   *  false时， 显示popper, 修改style.display='block', 隐藏修改 display:none  boundary为 最近的relative元素   */
  appendToBody: boolean
  /** ✅ 自定义类名，以支持不同的主题色, is-dark is-light 等 ， 支持空格分隔的多个类名 */
  customClass: string

  /** 是否启用flip   flip, shift 属性会影响弹层的位置。 在鼠标右击菜单等场景，想固定弹出位置时，可以关闭该属性 */
  flipAble: boolean
  /** 是否启用shift */
  shiftAble: boolean

  /** 缓存上次的值。 由于watch state时，取不到oldState的值，所以每次应用后，记录一下 */
  _last: Partial<IFloatOption> & {
    arrowInserted?: boolean
    arrowEl: HTMLElement
    timestamp: number
  }
  /** 缓存用户注册事件
   * show 事件：如果useFloating时，show=true, 那么监听不到第一次show事件。 因为第一次show事件在usFloating内部就已经触发了
   * hide 事件：在动画结束后触发。【是否增加hiding 事件?】
   * update 事件： 每次定位完后触发。 该事件触发频繁，已观察到有以下情况：
   *     在 autoUpdate 时，会频繁触发。 比如切换显示，elementResize /IntersectionObserver 事件发生，内部会进入2次
   *     在reference 不可见时，每一秒会触发一次 update
   * */
  _events: { show: Function[]; hide: Function[]; update: Function[] }
}

/** 默认配置 */
const defaultOption: Partial<IFloatOption> = {
  reference: null,
  popper: null,
  show: false,
  autoUpdate: true,

  strategy: 'absolute',
  placement: 'bottom',
  offset: 6,
  arrowVisible: true,
  rootBoundary: 'viewport',
  boundary: 'clippingAncestors',
  boundaryPadding: 5,
  syncHide: true,
  autoHide: false,
  gpuAcceleration: false,
  animate: true,
  animateName: 'fade-in-linear',
  appendToBody: false,
  customClass: '',

  flipAble: true,
  shiftAble: true
}

const oppositeSidesMap = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }

const toMs = (s: string) => {
  if (s === 'auto') return 0
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/** 获取元素的当前动画时长，参考 Vue的Transition 的源码实现。 注：无论css中单位是 ms/s, getComputedStyle返回的单位都是 s  */
const getTransitionInfo = (el: HTMLElement) => {
  const styles = window.getComputedStyle(el)
  // 先判断transition
  let timeout = toMs(styles.transitionDelay) + toMs(styles.transitionDuration)
  if (timeout) return timeout

  // 再判断 animation
  timeout = toMs(styles.animationDelay) + toMs(styles.animationDuration)
  if (timeout) return timeout

  return 0
}

/** 包含多个类名的字符串赋值给元素的classList */
const applyClass = (el: HTMLElement, classes: string, force: boolean) => {
  classes.split(' ').forEach((c) => c && el.classList.toggle(c, force))
}

/** 执行一次 popper 的更新动作 */
const updatePopper = (state: IFloatOption) => {
  // 官方建议offset居首, flip在shift前。  arrow,hide居后。
  const middleware = [offset(state.offset)]
  state.flipAble &&
    middleware.push(
      flip({
        rootBoundary: state.rootBoundary,
        boundary: state.boundary,
        padding: state.boundaryPadding
      })
    )
  state.shiftAble && middleware.push(shift({ limiter: limitShift() }))
  state.arrowVisible &&
    middleware.push(
      arrow({
        element: state.popper!.querySelector('.tiny-popper__arrow')!,
        padding: 8
      })
    )
  middleware.push(hide())

  computePosition(state.reference!, state.popper!, {
    placement: state.placement,
    strategy: state.strategy,
    middleware
  }).then(({ x, y, placement, strategy, middlewareData }) => {
    // 自动关闭：  如果已经打开状态了，则本次重新定位，则关闭
    if (state.autoHide && state._last.show) {
      const timestamp = new Date().getTime()
      if (timestamp > state._last.timestamp + 300) {
        state.show = false
        return
      }
    }
    // 最终绑定给popper的样式
    const finalStyles: Record<string, string> = {}

    // 定位策略
    Object.assign(finalStyles, {
      position: strategy
    })

    // 位置：是否加速
    if (state.gpuAcceleration) {
      Object.assign(finalStyles, {
        transform: `translate(${x}px,${y}px)`,
        left: '0',
        top: '0'
      })
    } else {
      Object.assign(finalStyles, {
        left: `${x}px`,
        top: `${y}px`
      })
    }

    // 是否hide
    if (state.syncHide) {
      if (middlewareData.hide) {
        Object.assign(finalStyles, {
          visibility: middlewareData.hide.referenceHidden ? 'hidden' : 'visible'
        })
      }
    }

    // 应用样式
    Object.assign(state.popper!.style, finalStyles)

    // 应用customClass
    if (state._last.customClass && state._last.customClass !== state.customClass) {
      applyClass(state.popper!, state._last.customClass, false)
    }
    if (state.customClass && state._last?.customClass !== state.customClass) {
      applyClass(state.popper!, state.customClass, true)
      state._last.customClass = state.customClass
    }

    // 应用箭头
    if (state.arrowVisible) {
      const { x: arrowX, y: arrowY } = middlewareData.arrow
      const arrowElement = state._last.arrowEl!
      const staticSide = oppositeSidesMap[placement.split('-')[0]]

      const arrowStyle = {
        left: arrowX !== null ? `${arrowX}px` : '',
        top: arrowY !== null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px',
        display: 'block'
      }
      Object.assign(arrowElement.style, arrowStyle)
    } else {
      if (state._last!.arrowInserted) {
        state._last!.arrowEl.style.display = 'none'
      }
    }

    // 触发更新事件
    emit(state, 'update', { x, y, placement, strategy, middlewareData })
  })
}

/** 执行自动更新 */
const autoUpdatePopper = (state: IFloatOption) => {
  return autoUpdate(state.reference!, state.popper!, () => {
    updatePopper(state)
  })
}

/** popper 插入body，或修改 display 可见。   */
const appendPopper = (state: IFloatOption) => {
  // 如果已经打开了，且popper没变化,则忽略
  if (state._last.show && state._last.popper === state.popper) return

  // 如果popper 变化了， 需要先移除_last.popper。
  if (state._last.popper && state._last.popper !== state.popper) {
    if (state._last.appendToBody) {
      state._last.popper.remove()
    } else {
      state._last.popper.style.display = 'none'
    }
    state._last.arrowInserted = false
    state._last.arrowEl = null as unknown as HTMLElement
  }

  if (state.popper) {
    // 1、插入元素
    if (state.appendToBody) {
      document.body.append(state.popper)
    } else {
      state.popper.style.display = 'block'
    }

    // 2、始终插入箭头元素，update时控制箭头的显隐。（如果不插入，只动态修改arrowVisible，进入不了appendPopper)
    if (!state._last!.arrowInserted) {
      const arrowEl = document.createElement('div')
      arrowEl.className = 'tiny-popper__arrow'
      state.popper.append(arrowEl)

      state._last!.arrowInserted = true
      state._last!.arrowEl = arrowEl
    }

    // 3、 添加动画类
    if (state.animate) {
      const enterName = `${state.animateName}-enter-from`
      const activeName = `${state.animateName}-enter-active`
      state.popper.classList.add(enterName, activeName)
      setTimeout(() => {
        state.popper!.classList.remove(enterName)
      }, 0)
      const timeout = getTransitionInfo(state.popper)
      setTimeout(() => {
        state.popper!.classList.remove(activeName)
      }, timeout)
    }

    // 4、触发事件
    emit(state, 'show')
  }
}

/** popper 移除body，或修改 display 不可见 */
const closePopper = (state: IFloatOption) => {
  // 如果已经关闭了，则忽略
  if (!state._last.show) return

  if (state.popper) {
    // 如果有动画，动画结束后再移除
    if (state.animate && state.animateName) {
      const leaveName = `${state.animateName}-leave-to`
      const activeName = `${state.animateName}-leave-active`

      state.popper.classList.add(leaveName, activeName)
      const timeout = getTransitionInfo(state.popper)
      setTimeout(() => {
        state.popper!.classList.remove(leaveName, activeName)

        if (state.appendToBody) {
          state.popper!.remove()
        } else {
          state.popper!.style.display = 'none'
        }
        emit(state, 'hide')
      }, timeout)
    } else {
      // 否则直接移除
      if (state.appendToBody) {
        state.popper.remove()
      } else {
        state.popper.style.display = 'none'
      }
      emit(state, 'hide')
    }
  }
}

/** 触发事件 */
const emit = (state: IFloatOption, eventName: string, params?: any) => {
  state._events[eventName].forEach((cb) => cb(params))
}

/** 快速构建虚拟元素的辅助方法， 适于右键菜单，区域选择， 跟随光标等场景 */
const virtualEl = (x: number, y: number, w: number = 0, h: number = 0) => ({
  getBoundingClientRect() {
    return {
      width: 0,
      height: 0,
      x,
      y,
      top: y,
      left: x,
      right: x + w,
      bottom: y + h
    }
  }
})

/** 响应式的弹出层管理函数，适用于场景： tooltip, poppover, select, 右键菜单, floatbar, notify, 或 canvas上跟随鼠标等 */
export const useFloating = (option: Partial<IFloatOption> = {}) => {
  const state = reactive(option) as IFloatOption

  let cleanup: null | (() => void) = null

  // 0、标准化state
  Object.keys(defaultOption).forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = defaultOption[key]
    }
  })
  state._last = markRaw({}) as any
  state._events = markRaw({ show: [], hide: [], update: [] })

  const watchState = () => {
    // 1、引用和弹窗同时存在
    if (state.popper && state.reference) {
      // 1.1 当前需要显示， 可能是show变化了，也可能是其它任意值变化了， 都需要重新的一次update
      if (state.show) {
        appendPopper(state)
        if (state.autoUpdate) {
          cleanup && cleanup()
          cleanup = autoUpdatePopper(state)
        } else {
          updatePopper(state)
        }
      }
      // 1.2 当前不需要显示
      else {
        cleanup && cleanup()
        closePopper(state)
      }
    }
    // 2、引用和弹窗不全。 可能前一次是全的，所以要释放一下
    else {
      cleanup && cleanup()
      closePopper(state)
    }

    state._last.popper = state.popper
    state._last.reference = state.reference
    state._last.show = (state.show && state.popper && state.reference) as boolean // 真实的是否show变量
    state._last.appendToBody = state.appendToBody
    state._last.timestamp = new Date().getTime()
  }

  watch(state, watchState, { immediate: true })

  const on = (eventName, cb) => state._events[eventName].push(cb)
  const off = (eventName, cb) => (state._events[eventName] = state._events[eventName].filter((i) => i !== cb))

  // 3、组件卸载前，移除元素
  onBeforeUnmount(() => {
    cleanup && cleanup()
    closePopper(state)
  })

  // 4、返回state 及辅助方法
  // 正常修改state去触发更新，但如果某些业务想在state不变时，仍想执行一次更新， 则使用forceUpdate即可
  // 比如select 懒加载： popper, show都不变， 但popper 的大小变化了，可以forceUpdate一下。
  // 【autoUpdate 理论上会监听 popper的resize的， 这层考虑可能是多余。】
  return { state, on, off, virtualEl, forceUpdate: watchState }
}
