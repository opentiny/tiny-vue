import colors from './utils/color-map'
import type {
  AngularNode,
  CalcNode,
  ColorPanelContext,
  ColorSelectPanelExtends,
  ColorStop,
  DirectionalNode,
  EmNode,
  HexNode,
  HslaNode,
  HslNode,
  IColorSelectPanelProps,
  ISharedRenderlessParamHooks,
  ISharedRenderlessParamUtils,
  LiteralNode,
  PercentNode,
  PxNode,
  RgbaNode,
  RgbNode
} from '@/types'
import { Color } from './utils/color'
import { createContext } from './utils/context'
import { ColorPoint } from './utils/color-points'

type State = ReturnType<typeof initState>

export const panelRgb = (color: Color, alpha: boolean) => {
  const { r, g, b } = color.toRgb()
  return alpha ? `rgba(${r},${g},${b},${color.get('alpha') / 100})` : `rgb(${r},${g},${b})`
}

export const updateModelValue = (value: string | null, emit: ISharedRenderlessParamUtils['emit']) => {
  emit('update:modelValue', value)
}

export const triggerCancel = (value: string | null, emit: ISharedRenderlessParamUtils['emit']) => {
  emit('cancel')
}

export const triggerColorUpdate = (value: string | null, emit: ISharedRenderlessParamUtils['emit']) => {
  emit('color-update', value)
}

export const triggerConfirm = (value: string | null, emit: ISharedRenderlessParamUtils['emit']) => {
  emit('confirm', value)
}

export const parseCustomRGBA = (str, type) => {
  // 提取括号内的内容
  if (!str || typeof str !== 'string') {
    return [0, 0, 0, 0]
  }
  let content = ''
  let match: any = null
  if (type === 'hsl') {
    match = str.match(/hsla?\(([^)]+)\)/)
  } else if (type === 'rgb') {
    match = str.match(/rgba?\(([^)]+)\)/)
  } else if (type === 'hsv') {
    match = str.match(/hsva?\(([^)]+)\)/)
  }
  if (!match || !match[1]) {
    return [0, 0, 0, 0]
  }
  content = match[1]

  // 2. 按逗号分割并移除空格
  const parts = content.split(',').map((item) => item.trim())

  // 3. 转换数值部分（第一项和最后一项）
  const result = parts.map((item, index) => {
    if (index === 0 || (index === parts.length - 1 && parts.length === 4)) {
      return parseFloat(item) // 转为数字
    }
    return item // 保持带%的字符串
  })

  return result
}

const isGrandient = (val: unknown) => {
  if (typeof val !== 'string') {
    return false
  }
  return val.trim().startsWith('linear-gradient')
}
const sideCornerDegreeMap = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
  'top left': 315,
  'left top': 315,
  'top right': 45,
  'right top': 45,
  'bottom left': 225,
  'left bottom': 225,
  'bottom right': 135,
  'right bottom': 135
} as const
const createColorPoints = (
  val: string,
  props: IColorSelectPanelProps,
  hooks: ISharedRenderlessParamHooks,
  ext: ColorSelectPanelExtends,
  bar: HTMLElement | null
) => {
  if (!isGrandient(val)) {
    return { colorPoints: [], angular: 180 }
  }
  const nodes = ext.parse(val)
  let angular = 180
  const parseAngular = (node: DirectionalNode | AngularNode) => {
    if (node.type === 'angular') {
      return Number.parseInt(node.value)
    }
    return sideCornerDegreeMap[node.value] || 180
  }
  const parseBehavior = {
    hex: (node: HexNode) => {
      return new ColorPoint(new Color({ value: `#${node.value}`, format: 'hex', enableAlpha: props.alpha }), 0)
    },
    rgb: (node: RgbNode) => {
      if (props.alpha) {
        return parseBehavior.rgba({ ...node, type: 'rgba' })
      }
      return new ColorPoint(new Color({ enableAlpha: false, format: 'rgb', value: `rgb(${node.value.join(',')})` }), 0)
    },
    rgba: (node: RgbaNode) => {
      const color = new Color({ enableAlpha: props.alpha, format: 'rgba', value: `rgba(${node.value.join(',')})` })
      return new ColorPoint(color, 0)
    },
    hsl: (node: HslNode) => {
      if (props.alpha) {
        return parseBehavior.hsla({ ...node, type: 'hsla' })
      }
      const color = new Color({ enableAlpha: false, format: 'hsl', value: `hsl(${node.value.join(' ')})` })
      return new ColorPoint(color, 0)
    },
    hsla: (node: HslaNode) => {
      const color = new Color({ enableAlpha: props.alpha, format: 'hsl', value: `hsl(${node.value.join(' ')})` })
      return new ColorPoint(color, 0)
    },
    literal: (node: LiteralNode) => {
      let value = colors[node.value] || '#00000000'
      const color = new Color({ enableAlpha: true, format: 'hex', value })
      return new ColorPoint(color, 0)
    },
    'var': (node: any) => {
      hooks.warn('unsupported var ref.')
      return parseBehavior.hex({ type: 'hex', value: '#000', length: node.length })
    }
  }
  const unsupportedLengthUnit = ['em', 'calc']
  const parseLength = (node: CalcNode | PercentNode | EmNode | PxNode | undefined) => {
    if (!node || !bar) {
      return 0
    }
    if (unsupportedLengthUnit.includes(node.type)) {
      hooks.warn(`unsupported unit ${node.type}`)
      return 0
    }
    const barRect = bar.getBoundingClientRect()
    const { width } = barRect
    const numberValue = Number.parseFloat(node.value)
    if (node.type === '%') {
      return Number.parseInt(`${(numberValue / 100) * width}`)
    }
    if (node.type === 'px') {
      return Number.parseInt(`${numberValue / width}`)
    }
    return 0
  }
  const parseColotStop = (colorStop: ColorStop) => {
    if (!(colorStop.type in parseBehavior)) {
      hooks.warn(`unknown behavior ${colorStop}`)
      throw new Error(`unknown behavior ${colorStop}`)
    }
    const colorPoint = parseBehavior[colorStop.type](colorStop)
    const cursorLeft = parseLength(colorStop.length)
    colorPoint.cursorLeft = cursorLeft
    return colorPoint
  }
  const [node] = nodes
  if (node.type !== 'linear-gradient') {
    hooks.warn(`Only support linear-gradient yet.`)
    return { colorPoints: [], angular: 180 }
  }
  if (!node) {
    return { colorPoints: [], angular: 180 }
  }
  if (node.orientation) {
    angular = parseAngular(node.orientation)
  } else {
    angular = 180
  }
  const colorPoints = node.colorStops.map((colorStop) => parseColotStop(colorStop))
  return { colorPoints, angular }
}

export const initApi = (
  props: IColorSelectPanelProps,
  state: State,
  utils: ISharedRenderlessParamUtils,
  hooks: ISharedRenderlessParamHooks,
  ext: ColorSelectPanelExtends
) => {
  const { emit, nextTick, vm } = utils
  const { ref } = hooks
  const setShowPicker = (value: boolean) => (state.showPicker = value)
  const resetColor = () => {
    nextTick(() => {
      if (props.modelValue) {
        state.color.fromString(props.modelValue)
      } else {
        state.color.value = ''
        nextTick(() => {
          state.showPanel = false
        })
      }
    })
  }
  const submitValue = () => {
    if (state.ctx.colorMode === 'linear-gradient') {
      updateModelValue(state.ctx.linearGardientValue, emit)
      triggerConfirm(state.ctx.linearGardientValue, emit)
      setShowPicker(false)
      return
    }
    const value = state.color.value
    updateModelValue(value, emit)
    triggerConfirm(value, emit)
    setShowPicker(false)
    nextTick(() => {
      const newColor = new Color({
        enableAlpha: props.alpha,
        format: state.currentFormat ?? '',
        value: props.modelValue
      })
      if (!state.color.compare(newColor)) {
        resetColor()
      }
    })
  }
  const onConfirm = () => {
    submitValue()
    if (!state.enableHistory) {
      return
    }
    let index = state.stack.indexOf(state.input)
    if (index === -1) {
      state.stack.push(state.input)
    } else {
      state.stack = [state.input, ...state.stack.filter((c, i) => i !== index)]
    }
  }
  const onCancel = () => {
    resetColor()
    close()
    emit('cancel')
  }
  const clear = () => {
    updateModelValue(null, emit)
    triggerCancel(null, emit)
    resetColor()
  }
  const onClickOutside = () => {
    if (!state.showPicker) {
      return
    }
    close()
    resetColor()
    emit('cancel')
  }
  const onHueReady = (update) => {
    state.hue = { update }
  }
  const onSvReady = (update) => {
    state.sv = { update }
  }
  const onAlphaReady = (update) => {
    state.alpha = { update }
  }
  const open = () => {
    setShowPicker(true)
  }
  const close = () => {
    setShowPicker(false)
  }
  const onHistoryClick = (historyColor: string) => {
    if (state.ctx.colorMode === 'monochrome') {
      state.ctx.activeColor.color.fromString(historyColor)
      return
    }
    const colorString = isGrandient(historyColor)
      ? historyColor
      : `linear-gradient(90deg, #fff 0%, ${historyColor} 100%)`
    const colorPoints = createColorPoints(colorString, props, hooks, ext, state.ctx.bar)
    state.ctx.colorPoints = colorPoints.colorPoints
    const lastPoint = colorPoints.colorPoints.at(-1)
    if (lastPoint) {
      state.ctx.activeColor = lastPoint
    }
    state.ctx.deg = colorPoints.angular
  }
  const onPredefineColorClick = (predefineColor: string) => {
    if (state.ctx.colorMode === 'monochrome') {
      state.color.fromString(predefineColor)
      return
    }
    const colorString = isGrandient(predefineColor)
      ? predefineColor
      : `linear-gradient(180deg, #fff 0%, ${predefineColor} 100%)`
    const colorPoints = createColorPoints(colorString, props, hooks, ext, state.ctx.bar)
    state.ctx.colorPoints = colorPoints.colorPoints
    const lastPoint = colorPoints.colorPoints.at(-1)
    if (lastPoint) {
      state.ctx.activeColor = lastPoint
    }
    state.ctx.deg = colorPoints.angular
  }
  return {
    open,
    close,
    resetColor,
    onConfirm,
    onCancel,
    submitValue,
    clear,
    onHueReady,
    onSvReady,
    onAlphaReady,
    onPredefineColorClick,
    onHistoryClick,
    onClickOutside
  }
}

export const initState = (
  props: IColorSelectPanelProps,
  hooks: ISharedRenderlessParamHooks,
  utils: ISharedRenderlessParamUtils,
  ext: ColorSelectPanelExtends
) => {
  const { reactive, ref, computed } = hooks
  const stack = ref<string[]>([...(props.history ?? [])])
  const predefineStack = computed(() => props.predefine)
  const hue = ref()
  const sv = ref()
  const alpha = ref()
  const currentFormat = ref(props.format[0])
  const color = reactive(
    new Color({
      enableAlpha: props.alpha,
      format: currentFormat.value ?? 'hex',
      value: props.modelValue
    })
  ) as Color
  const bar = ref(null)
  const ctx: ColorPanelContext = {
    colorMode: computed(() => props.colorMode ?? 'monochrome'),
    activeColor: ref(new ColorPoint(color, 0)),
    colorPoints: ref([new ColorPoint(color, 0)]),
    linearGardientValue: ref(''),
    bar,
    deg: ref(180)
  }
  if (isGrandient(props.modelValue)) {
    hooks.watchEffect(() => {
      if (!bar.value) {
        return
      }
      const { colorPoints, angular } = createColorPoints(props.modelValue, props, hooks, ext, bar.value)
      ctx.deg.value = angular
      ctx.colorPoints.value = colorPoints
      const lastPoint = colorPoints.at(-1)
      if (lastPoint) {
        ctx.activeColor.value = lastPoint
      }
    })
  }
  createContext(ctx, hooks)
  const input = ref<string>('')
  const hexInput1 = ref<number | string>()
  const hexInput2 = ref<number | string>()
  const hexInput4 = ref<number | string>()
  const hexInput5 = ref<number | string>()
  const hexInput6 = ref<number | string>()
  const hexInput7 = ref<number | string>()
  const showPicker = ref(props.visible)
  const showPanel = ref(false)
  const panelColor = computed(() => {
    if (!props.modelValue && !showPanel.value) {
      return 'transparent'
    }
    return panelRgb(color, props.alpha)
  })
  const currentColor = computed(() => (!props.modelValue && !showPicker.value ? '' : color.value))

  const state = reactive({
    color,
    input,
    hexInput1,
    hexInput2,
    hexInput4,
    hexInput5,
    hexInput6,
    hexInput7,
    showPicker,
    showPanel,
    panelColor,
    currentColor,
    hue,
    sv,
    alpha,
    stack,
    predefineStack,
    enablePredefineColor: computed(() => props.enablePredefineColor),
    enableHistory: computed(() => props.enableHistory),
    currentFormat,
    formats: props.format,
    ctx,
    isLinearGradient: computed(() => ctx.colorMode.value === 'linear-gradient'),
    linearGradient: computed(() => ctx.linearGardientValue.value)
  })
  return state
}

export const initWatch = (
  state: ReturnType<typeof initState>,
  props: IColorSelectPanelProps,
  { nextTick, watch }: ISharedRenderlessParamHooks,
  { emit }: ISharedRenderlessParamUtils
) => {
  watch(
    () => state.color,
    () => {
      emit('color-update', state.color)
    }
  )
  watch(
    () => props.visible,
    () => {
      state.showPicker = props.visible
    }
  )
  watch(
    () => props.modelValue,
    () => {
      if (!props.modelValue) {
        state.showPanel = false
      }
      if (props.modelValue && props.modelValue !== state.color.value) {
        state.color.fromString(props.modelValue)
      }
    }
  )
  watch(
    () => [state.currentFormat, props.alpha],
    () => {
      state.color.enableAlpha = props.alpha
      state.color.format = state.currentFormat || state.color.format
      state.color.onChange()
      updateModelValue(state.color.value, emit)
    }
  )
  watch(
    () => [state.currentColor, state.linearGradient],
    () => {
      if (state.isLinearGradient) {
        state.input = state.linearGradient
        return
      } else {
        state.input = state.currentColor
        const result = parseCustomRGBA(state.currentColor, state.currentFormat)
        state.hexInput4 = Math.ceil(Number(result[0]))
        state.hexInput5 = result[1]
        state.hexInput6 = result[2]
        state.hexInput7 = `${(Number(result[3]) || 1) * 100}%`
      }
      triggerColorUpdate(state.input, emit)
    },
    { flush: 'sync' }
  )
  watch(state.color, () => {
    if (!props.modelValue && !state.showPanel) {
      state.showPanel = true
    }
  })
  watch(
    () => state.showPicker,
    () => {
      nextTick(() => {
        if (state.hue) {
          state.hue.update()
        }
        if (state.sv) {
          state.sv.update()
        }
        if (state.alpha) {
          state.alpha.update()
        }
      })
    }
  )
  watch(
    () => props.history,
    () => {
      if (!state.enableHistory) {
        return
      }
      state.stack = props.history
    },
    { deep: true }
  )
}
