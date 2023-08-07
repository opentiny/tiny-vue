import { hsv, rgb } from 'color'

function hexToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16)
  let g = parseInt(hex.substring(3, 5), 16)
  let b = parseInt(hex.substring(5, 7), 16)
  return { r, g, b }
}
const normalizeHexColor = (color: string) => {
  let normalizedColor: string = color.replace('#', '')
  if (normalizedColor.length === 3) {
    normalizedColor = normalizedColor.split('').map(char => char + char).join('')
  }
  normalizedColor = normalizedColor.padEnd(6, '0')

  const r = parseInt(normalizedColor.substr(0, 2), 16)
  const g = parseInt(normalizedColor.substr(2, 2), 16)
  const b = parseInt(normalizedColor.substr(4, 2), 16)

  const hexR = ('0' + r.toString(16)).slice(-2)
  const hexG = ('0' + g.toString(16)).slice(-2)
  const hexB = ('0' + b.toString(16)).slice(-2)

  return `#${hexR}${hexG}${hexB}`
}

export type Format = 'rgb' | 'rgba' | 'hsl' | 'hsla'
export default class Color {
  private hex = '#000'
  private h = 0
  private s = 0
  private v = 0
  private a = 100
  constructor(value: string) {
    this.reset(value)
  }

  reset(hex: string) {
    if (this.hex === 'transparent') {
      this.h = 0
      this.s = 0
      this.v = 0
      this.a = 0
      return
    }
    this.hex = normalizeHexColor(hex)
    const { r, g, b } = hexToRgb(this.hex)
    const { h, s, v } = rgb([r, g, b]).hsv().object()
    this.h = h
    this.s = s
    this.v = v
  }

  set({ h, s, v, a }: { h?: number; s?: number; v?: number; a?: number }) {
    this.h = h ?? this.h
    this.s = s ?? this.s
    this.v = v ?? this.v
    this.a = a ?? this.a
  }

  /**
   *
   * @returns [R,G,B]
   */
  getRGB() {
    return hsv(this.h, this.s, this.v).rgb().unitArray()
  }

  getHex() {
    return hsv(this.h, this.s, this.v).hex().toString()
  }

  /**
   *
   * @returns [h,s,l]
   */
  getHSL() {
    return hsv(this.h, this.s, this.v).hsl().unitArray()
  }

  getHSV() {
    return {
      h: this.h,
      s: this.s,
      v: this.v,
      a: this.a
    }
  }

  get(key: 'h' | 's' | 'v' | 'a') {
    return this[key]
  }
}
