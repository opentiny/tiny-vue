// int -> hex
const INT_HEX_MAP = {
  10: 'A',
  11: 'B',
  12: 'C',
  13: 'D',
  14: 'E',
  15: 'F'
}
// HEX -> INT
const HEX_INT_MAP = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}

const parseHex = function (hex: string) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1])
  }

  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]
}

const hsv2hsl = ({ hue, sat, val }: { hue: number; sat: number; val: number }) => {
  const hue_ = (2 - sat) * val
  return [hue, (sat * val) / (hue_ < 1 ? hue_ : 2 - hue_) || 0, hue_ / 2]
}

const isString = (val: unknown): val is string => typeof val === 'string'
const isOnePointZero = (n: unknown) => {
  return isString(n) && n.includes('.') && Number.parseFloat(n) === 1
}
const isPercentage = (n: unknown) => {
  return isString(n) && n.includes('%')
}

const normalized = (value: number | string, max: number | string) => {
  if (isOnePointZero(value)) value = '100%'

  const processPercent = isPercentage(value)
  value = Math.min(max as number, Math.max(0, Number.parseFloat(`${value}`)))

  // Automatically convert percentage into number
  if (processPercent) {
    value = Number.parseInt(`${value * (max as number)}`, 10) / 100
  }

  // Handle floating point rounding errors
  if (Math.abs(value - (max as number)) < 0.000001) {
    return 1
  }

  // Convert into [0, 1] range if it isn't already
  return (value % (max as number)) / Number.parseFloat(max as string)
}
const hexOne = (value: number) => {
  value = Math.min(Math.round(value), 255)
  const high = Math.floor(value / 16)
  const low = value % 16
  return `${INT_HEX_MAP[high] || high}${INT_HEX_MAP[low] || low}`
}
const toHex = ({ r, g, b }: { r: number; g: number; b: number }) => {
  if (Number.isNaN(+r) || Number.isNaN(+g) || Number.isNaN(+b)) return ''
  return `#${hexOne(r)}${hexOne(g)}${hexOne(b)}`
}
const hsl2hsv = ({ hue, sat, light }: { hue: number; sat: number; light: number }) => {
  sat = sat / 100
  light = light / 100
  let smin = sat
  const lmin = Math.max(light, 0.01)
  // let sv
  // let v

  light *= 2
  sat *= light <= 1 ? light : 2 - light
  smin *= lmin <= 1 ? lmin : 2 - lmin
  const v = (light + sat) / 2
  const sv = light === 0 ? (2 * smin) / (lmin + smin) : (2 * sat) / (light + sat)

  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  }
}

const rgb2hsv = ({ r, g, b }: { r: number; g: number; b: number }) => {
  r = normalized(r, 255)
  g = normalized(g, 255)
  b = normalized(b, 255)

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h: number
  const v = max

  const d = max - min
  const s = max === 0 ? 0 : d / max

  if (max === min) {
    h = 0
  } else {
    switch (max) {
      case r: {
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      }
      case g: {
        h = (b - r) / d + 2
        break
      }
      case b: {
        h = (r - g) / d + 4
        break
      }
    }
    h! /= 6
  }

  return { h: h! * 360, s: s * 100, v: v * 100 }
}

const hsv2rgb = ({ h, s, v }: { h: number; s: number; v: number }) => {
  h = normalized(h, 360) * 6
  s = normalized(s, 100)
  v = normalized(v, 100)

  const i = Math.floor(h)
  const f = h - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  const mod = i % 6
  const r = [v, q, p, p, t, v][mod]
  const g = [t, v, v, q, p, p][mod]
  const b = [p, p, t, v, v, q][mod]

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  }
}

export interface ColorOptions {
  enableAlpha: boolean
  format: string
  value?: string
}

export class Color {
  private _hue = 0
  private _sat = 100
  private _value = 100
  public _alpha = 100
  public enableAlpha = false
  public format = 'hex'
  public value = ''
  public selected?: boolean

  constructor(opts: Partial<ColorOptions>) {
    for (const opt in opts) {
      if (opt in opts) {
        this[opt] = opts[opt]
      }
    }
    if (opts.value) {
      this.fromString(opts.value)
    } else {
      this.onChange()
    }
  }
  get(prop: string) {
    if (prop === 'alpha') {
      return Math.floor(this._alpha)
    }
    return this[`_${prop}`]
  }
  set(
    props:
      | {
          [x: string]: any
        }
      | any,
    value?: number
  ) {
    if (arguments.length === 1 && typeof props === 'object') {
      for (const p in props) {
        if (Object.hasOwn(props, p)) {
          this.set(p, props[p])
        }
      }
      return
    }
    this[`_${props}`] = value
    this.onChange()
  }
  compare(color: this) {
    return (
      Math.abs(color._hue - this._hue) < 2 &&
      Math.abs(color._sat - this._sat) < 1 &&
      Math.abs(color._value - this._value) < 1 &&
      Math.abs(color._alpha - this._alpha) < 1
    )
  }
  isHSL(value: string) {
    return value.includes('hsl')
  }
  isHsv(value: string) {
    return value.includes('hsv')
  }
  isRgb(value: string) {
    return value.includes('rgb')
  }
  isHex(value: string) {
    return value.includes('#')
  }
  splitPart(value: string, regExp: RegExp) {
    return value
      .replace(regExp, '')
      .split(/\s|,/g)
      .filter((v) => v)
      .map((val, idx) => {
        return idx > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10)
      })
  }
  onHsv(value: string) {
    const parts = this.splitPart(value, /hsva|hsv|\(|\)/gm)
    if (parts.length === 4) {
      this._alpha = Number.parseFloat(String(parts[3])) * 100
    } else {
      this._alpha = 100
    }
    if (parts.length >= 3) {
      this.fromHSV({
        h: parts[0],
        s: parts[1],
        v: parts[2]
      })
    }
  }
  onRgb(value: string) {
    const rgbRegExp = /rgba|rgb|\(|\)/gm
    const parts = this.splitPart(value, rgbRegExp)
    if (parts.length === 4) {
      this._alpha = Number.parseFloat(String(parts[3])) * 100
    } else {
      this._alpha = 100
    }
    if (parts.length >= 3) {
      const { h, s, v } = rgb2hsv({ r: parts[0], g: parts[1], b: parts[2] })
      this.fromHSV({ h, s, v })
    }
  }
  onHex(value: string) {
    const hex = value.replace('#', '').trim()
    const isValidHex = (hex: string) => /^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(hex)
    if (!isValidHex(hex)) {
      return
    }
    let [r, g, b] = [0, 0, 0]
    if (hex.length === 3) {
      r = parseHex(hex[0] + hex[0])
      g = parseHex(hex[1] + hex[1])
      b = parseHex(hex[2] + hex[2])
    } else if (hex.length === 6 || hex.length === 8) {
      r = parseHex(hex.slice(0, 2))
      g = parseHex(hex.slice(2, 4))
      b = parseHex(hex.slice(4, 6))
    }
    if (hex.length === 8) {
      this._alpha = (parseHex(hex.slice(6)) / 255) * 100
    } else if (hex.length === 3 || hex.length === 6) {
      this._alpha = 100
    }
    const { h, s, v } = rgb2hsv({ r, g, b })
    this.fromHSV({ h, s, v })
  }
  onHsl(value: string) {
    const parts = value
      .replace(/hsla|hsl\(|\)gm/, '')
      .split(/\s|,/g)
      .filter((val) => val)
      .map((val, idx) => {
        return idx > 2 ? Number.parseFloat(val) : Number.parseInt(val, 10)
      })
    if (parts.length === 4) {
      this._alpha = Number.parseFloat(String(parts[3])) * 100
    } else {
      this._alpha = 100
    }
    if (parent.length >= 3) {
      const { h, s, v } = hsl2hsv({
        hue: parts[0],
        sat: parts[1],
        light: parts[2]
      })
      this.fromHSV({ h, s, v })
    }
  }
  /**
   * @effect 会修改 this._hue, this._sat, this._value
   */
  fromHSV({ h, s, v }: { h: number; s: number; v: number }) {
    this._hue = Math.max(0, Math.min(360, h))
    this._sat = Math.max(0, Math.min(100, s))
    this._value = Math.max(0, Math.min(100, v))

    this.onChange()
  }
  fromString(value: string) {
    if (!value) {
      this._hue = 0
      this._sat = 0
      this._value = 0
      this.onChange()
      return
    }
    if (this.isHSL(value)) {
      this.onHsl(value)
    }
    if (this.isHsv(value)) {
      this.onHsv(value)
    }
    if (this.isRgb(value)) {
      this.onRgb(value)
    }
    if (this.isHex(value)) {
      this.onHex(value)
    }
  }
  toRgb() {
    return hsv2rgb({
      h: this._hue,
      s: this._sat,
      v: this._value
    })
  }
  toRgba() {
    return {
      ...hsv2rgb({
        h: this._hue,
        s: this._sat,
        v: this._value
      }),
      a: this._alpha / 100
    }
  }
  onChange() {
    const { _hue, _sat, _value, _alpha, format, enableAlpha } = this
    if (!enableAlpha) {
      switch (format) {
        case 'hsl': {
          let [_, sat, light] = hsv2hsl({
            hue: _hue,
            sat: _sat / 100,
            val: _value / 100
          })
          sat = Math.round(sat * 100)
          light = Math.round(light * 100)
          this.value = `hsl(${_hue}, ${sat}%, ${light}%)`
          break
        }
        case 'hsv': {
          this.value = `hsv(${_hue}, ${Math.round(_sat)}%, ${Math.round(_value)}%)`
          break
        }
        case 'rgb': {
          const { r, g, b } = hsv2rgb({ h: _hue, s: _sat, v: _value })
          this.value = `rgb(${r},${g},${b})`
          break
        }
        default: {
          this.value = toHex(
            hsv2rgb({
              h: _hue,
              s: _sat,
              v: _value
            })
          )
        }
      }
      return
    }
    switch (format) {
      case 'hsl': {
        let [_, sat, light] = hsv2hsl({
          hue: _hue,
          sat: _sat / 100,
          val: _value / 100
        })
        sat = Math.round(sat * 100)
        light = Math.round(light * 100)
        this.value = `hsla(${_hue}, ${sat}%, ${light}%, ${this.get('alpha') / 100})`
        break
      }
      case 'hsv': {
        this.value = `hsva(${_hue}, ${Math.round(_sat)}%, ${Math.round(_value)}%, ${this.get('alpha') / 100})`
        break
      }
      case 'hex': {
        this.value = `${toHex(
          hsv2rgb({
            h: _hue,
            s: _sat,
            v: _value
          })
        )}${hexOne((_alpha * 255) / 100)}`
        break
      }
      default: {
        const { r, g, b } = hsv2rgb({
          h: _hue,
          s: _sat,
          v: _value
        })
        this.value = `rgba(${r}, ${g}, ${b}, ${this.get('alpha') / 100})`
      }
    }
  }
}
