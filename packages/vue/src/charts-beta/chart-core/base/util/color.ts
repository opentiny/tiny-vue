/**
 * 循环取出颜色
 */
function getColor(colors, index) {
  return colors[index % colors.length]
}

/**
 * 十六进制转rgba, 如codeToRGB("#6d8ff0",0.5) --> 'rgba(109,143,240,0.5)'
 */
function codeToRGB(code, opacity) {
  if (code === undefined) {
    return undefined
  }
  const result = []
  result.push(parseInt(code.substring(1, 3), 16))
  result.push(parseInt(code.substring(3, 5), 16))
  result.push(parseInt(code.substring(5), 16))
  return `rgba(${result.join(',')},${opacity})`
}

/**
 * rgba转十六进制 codeToHex('rgba(255,0,0,.5)') --> '#fffcfc'
 * 将red、blue等转换为十六进制
 */
function codeToHex(color) {
  switch (color) {
    case 'red':
      return '#ff0000'
    case 'blue':
      return '#0000ff'
    case 'green':
      return '#00ff00'
    case 'pink':
      return '#FFC0CB'
    case 'yellow':
      return '#FFFF00'
    case 'orange':
      return '#FFA500'
    case 'black':
      return '#000000'
    case 'white':
      return '#ffffff'
    case 'gray':
      return '#808080'
    case 'purple':
      return '#800080'
  }
  if (color.includes('#')) {
    if (color.length === 7) {
      return color
    } else if (color.length === 4) {
      return color[0] + color[1] + color[1] + color[2] + color[2] + color[3] + color[3]
    }
  }
  const values = color
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',')
  const a = parseFloat(values[3] || 1)
  const r = Math.floor(a * parseInt(values[0]) + (1 - a) * 255)
  const g = Math.floor(a * parseInt(values[1]) + (1 - a) * 255)
  const b = Math.floor(a * parseInt(values[2]) + (1 - a) * 255)
  return `#${`0${r.toString(16)}`.slice(-2)}${`0${g.toString(16)}`.slice(-2)}${`0${b.toString(16)}`.slice(-2)}`
}

/**
 * 修改 'rgba(109,143,240,0.5)' 格式下的颜色透明度
 */
function changeRgbaOpacity(rgba, opacity) {
  const [r, g, b] = rgba.match(/\d+(\.\d+)?/g)
  return `rgba(${r},${g},${b},${opacity})`
}

/**
 * 生成过渡色的方法(c1,c2必须为十六进制颜色 c1为初始颜色，c2为末尾颜色，n表示过渡色数量，返回值为 length === n+2 的数组
 * 如：colorsBetween('#ff0000', '#ffffff', 10) --> ['#ff0000','#ff1717','#ff2e2e','#ff4646','#ff5d5d','#ff7474','#ff8b8b','#ffa2a2','#ffb9b9','#ffd1d1','#ffe8e8','#ffffff' ]
 */
function colorsBetween(c1, c2, n) {
  const Color = function Color(r, g, b) {
    this.r = Math.abs(r)
    this.g = Math.abs(g)
    this.b = Math.abs(b)
    if (typeof r === 'string') {
      function fromHex(str) {
        return str
          .substr(1)
          .match(/.{1,2}/g)
          .map(function (n) {
            return parseInt(n, 16)
          })
      }
      const v = fromHex(r)
      this.r = v[0]
      this.g = v[1]
      this.b = v[2]
    }
  }
  Color.prototype.diff = function (c) {
    return new Color(this.r - c.r, this.g - c.g, this.b - c.b)
  }
  Color.prototype.dividedBy = function (n) {
    return new Color(this.r / n, this.g / n, this.b / n)
  }
  Color.prototype.approach = function (c, c2) {
    return new Color(
      this.r > c.r ? this.r - c2.r : this.r + c2.r,
      this.g > c.g ? this.g - c2.g : this.g + c2.g,
      this.b > c.b ? this.b - c2.b : this.b + c2.b
    )
  }
  Color.prototype.toHex = function () {
    function pad(n) {
      const str = `${n}`
      const pad = '00'
      return pad.substring(0, pad.length - str.length) + str
    }
    const newR = Math.round(this.r).toString(16)
    const newG = Math.round(this.g).toString(16)
    const newB = Math.round(this.b).toString(16)
    return `#${pad(newR)}${pad(newG)}${pad(newB)}`
  }
  // 简写16进制变为全写
  if (c1.length === 4) {
    c1 = c1[0] + c1[1] + c1[1] + c1[2] + c1[2] + c1[3] + c1[3]
  }
  if (c2.length === 4) {
    c2 = c2[0] + c2[1] + c2[1] + c2[2] + c2[2] + c2[3] + c2[3]
  }
  c1 = new Color(c1)
  c2 = new Color(c2)
  const diff = c1.diff(c2).dividedBy(n + 1)
  const out = [c1]
  for (let i = 0; i < n; i++) {
    out.push(out[i].approach(c2, diff))
  }
  out.push(c2)
  return out.map(function (c) {
    return c.toHex()
  })
}

export { getColor, codeToRGB, codeToHex, colorsBetween, changeRgbaOpacity }
