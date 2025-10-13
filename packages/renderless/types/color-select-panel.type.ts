import type { ComputedRef, Ref } from 'vue'

export interface LinearGradientState {
  linearGradientBarBackground: string
}

export interface ColorOptions {
  enableAlpha: boolean
  format: string
  value?: string
}
export interface HSVColor {
  h: number // 色调 (0-360)
  s: number // 饱和度 (0-100)
  v: number // 明度 (0-100)
}

// RGB 颜色值接口
export interface RGBColor {
  r: number // 红色 (0-255)
  g: number // 绿色 (0-255)
  b: number // 蓝色 (0-255)
}

// HSL 颜色值接口
export interface HSLColor {
  hue: number // 色调 (0-360)
  sat: number // 饱和度 (0-1)
  light: number // 亮度 (0-1)
}

// Color 类的公共接口
export interface IColor {
  // 公共属性
  enableAlpha: boolean
  format: string
  value: string
  selected?: boolean

  // 获取属性值
  get(prop: string): number

  // 设置属性值（支持单个属性或对象形式）
  set(props: { [key: string]: any }): void
  set(prop: string, value: number): void

  // 比较两个颜色是否相似
  compare(color: IColor): boolean

  // 颜色格式检测方法
  isHSL(value: string): boolean
  isHsv(value: string): boolean
  isRgb(value: string): boolean
  isHex(value: string): boolean

  // 从不同格式解析颜色
  onHsv(value: string): void
  onRgb(value: string): void
  onHex(value: string): void
  onHsl(value: string): void

  // 从 HSV 值设置颜色
  fromHSV(hsv: HSVColor): void

  // 从字符串解析颜色
  fromString(value: string): void

  // 转换为 RGB 格式
  toRgb(): RGBColor

  // 内部状态变化时的回调
  onChange(): void
}
export interface ColorUtils {
  rgb2hsv(rgb: RGBColor): HSVColor
  hsv2rgb(hsv: HSVColor): RGBColor
  hsv2hsl(hsv: { hue: number; sat: number; val: number }): [number, number, number]
  hsl2hsv(hsl: HSLColor): HSVColor
  toHex(rgb: RGBColor): string
  parseHex(hex: string): number
  hexOne(value: number): string
}

export interface IColorPoint {
  color: IColor
  cursorLeft: number
}

export interface ColorPanelContext {
  colorMode: ComputedRef<IColorSelectPanelProps['colorMode']>
  activeColor: Ref<IColorPoint>
  bar: Ref<HTMLElement | null>
  colorPoints: Ref<IColorPoint[]>
  linearGardientValue: Ref<string>
  deg: Ref<number>
}
export type IColorSelectPanelMaybeRef<T> = IColorSelectPanelRef<T> | T
export interface IColorSelectPanelRef<T> {
  value: T
}
export interface IColorSelectPanelProps {
  visible: boolean
  alpha: boolean
  history: string[]
  predefine: string[]
  format: ('hsl' | 'hsv' | 'hex' | 'rgb')[]
  colorMode: 'linear-gradient' | 'monochrome'
  modelValue: string
  enableHistory: boolean
  enablePredefineColor: boolean
}

export interface IColorSelectPanelAlphProps<C> {
  color: C
}

export interface IColorSelectPanelSVProps<C> {
  color: C
}

export interface IColorSelectPanelHueProps<C> {
  color: C
}

export interface IColorSelectPanelAlphaPanel<C> {
  color: C
}

export interface UseColorPointsRet {
  onClick: (element: Element, point: IColorPoint) => void
  linearGradientValue: Readonly<Ref<string>>
  updateDeg: (_deg: number) => void
  removePoint: (point: IColorPoint) => void
  addPoint: (point: IColorPoint) => void
  setActivePoint: (point: IColorPoint) => void
  getActviePoint: () => Ref<IColorPoint>
}

export interface ColorSelectPanelExtends {
  parse: parse
}

// 3rds/gradient-parser

export interface LinearGradientNode {
  type: 'linear-gradient'
  orientation?: DirectionalNode | AngularNode | undefined
  colorStops: ColorStop[]
}

export interface RepeatingLinearGradientNode {
  type: 'repeating-linear-gradient'
  orientation?: DirectionalNode | AngularNode | undefined
  colorStops: ColorStop[]
}

export interface RadialGradientNode {
  type: 'radial-gradient'
  orientation?: Array<ShapeNode | DefaultRadialNode | ExtentKeywordNode> | undefined
  colorStops: ColorStop[]
}

export interface RepeatingRadialGradientNode {
  type: 'repeating-radial-gradient'
  orientation?: Array<ShapeNode | DefaultRadialNode | ExtentKeywordNode> | undefined
  colorStops: ColorStop[]
}

export interface DirectionalNode {
  type: 'directional'
  value:
    | 'left'
    | 'top'
    | 'bottom'
    | 'right'
    | 'left top'
    | 'top left'
    | 'left bottom'
    | 'bottom left'
    | 'right top'
    | 'top right'
    | 'right bottom'
    | 'bottom right'
}

export interface AngularNode {
  type: 'angular'
  value: string
}

export interface LiteralNode {
  type: 'literal'
  value: string
  length?: PxNode | EmNode | PercentNode | CalcNode | undefined
}

export interface HexNode {
  type: 'hex'
  value: string
  length?: PxNode | EmNode | PercentNode | CalcNode | undefined
}

export interface RgbNode {
  type: 'rgb'
  value: [string, string, string]
  length?: PxNode | EmNode | PercentNode | CalcNode | undefined
}

export interface RgbaNode {
  type: 'rgba'
  value: [string, string, string, string?]
  length?: PxNode | EmNode | PercentNode | CalcNode | undefined
}

export interface HslNode {
  type: 'hsl'
  value: [string, string, string]
  length?: PxNode | EmNode | PercentNode | CalcNode | undefined
}

export interface HslaNode {
  type: 'hsla'
  value: [string, string, string, string?]
  length?: PxNode | EmNode | PercentNode | CalcNode | undefined
}

export interface VarNode {
  type: 'var'
  value: string
  length?: PxNode | EmNode | PercentNode | CalcNode | undefined
}

export interface ShapeNode {
  type: 'shape'
  style?: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode | CalcNode | undefined
  value: 'ellipse' | 'circle'
  at?: PositionNode | undefined
}

export interface DefaultRadialNode {
  type: 'default-radial'
  at: PositionNode
}

export interface PositionKeywordNode {
  type: 'position-keyword'
  value: 'center' | 'left' | 'top' | 'bottom' | 'right'
}

export interface PositionNode {
  type: 'position'
  value: {
    x: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode | CalcNode
    y: ExtentKeywordNode | PxNode | EmNode | PercentNode | PositionKeywordNode | CalcNode
  }
}

export interface ExtentKeywordNode {
  type: 'extent-keyword'
  value: 'closest-side' | 'closest-corner' | 'farthest-side' | 'farthest-corner' | 'contain' | 'cover'
  at?: PositionNode | undefined
}

export interface PxNode {
  type: 'px'
  value: string
}

export interface EmNode {
  type: 'em'
  value: string
}

export interface PercentNode {
  type: '%'
  value: string
}

export interface CalcNode {
  type: 'calc'
  value: string
}

export type ColorStop = LiteralNode | HexNode | RgbNode | RgbaNode | HslNode | HslaNode | VarNode

export type GradientNode =
  | LinearGradientNode
  | RepeatingLinearGradientNode
  | RadialGradientNode
  | RepeatingRadialGradientNode

// export function parse(value: string): GradientNode[]
export type parse = (value: string) => GradientNode[]
