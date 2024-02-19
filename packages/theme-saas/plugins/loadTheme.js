const defaultTheme = require('tailwindcss/defaultTheme')

const prefix = '--tiny-'

const colors = {}

const layoutToken = {}

function loadColor(designToken) {
  const lightTheme = designToken.themeColor[0]
  const colorsList = lightTheme.data.colorList
  const sceneColors = lightTheme.data.sceneColors

  sceneColors.forEach((tokenClass) => {
    tokenClass.colors && loadClass(tokenClass.colors, colorsList)
    tokenClass.children &&
      tokenClass.children.forEach((functionColor) => {
        loadClass(functionColor.colors, colorsList)
      })
  })

  return Object.assign(colorsList, { color: colors })
}

function loadClass(colorToken, lists) {
  /* 
    colorToken 为传入的语义化token和 原子token的映射关系， 即
    `{
        "color-brand": "brand-500,100",
        "color-brand-hover": "brand-400,100",
    }`
    lists 为 传入的 原子化token的集合， 用于获取 brand-500 的颜色值
  */

  let tempColor = []
  for (let key in colorToken) {
    let obj = {}
    let arr = colorToken[key].split(',')
    obj.token = key
    obj.colorClass = arr[0].split('-')[0]
    obj.senceColorValue = arr[0].split('-')[1] || ''
    obj.opacity = arr[1]
    tempColor.push(obj)
  }
  tempColor.forEach((tokenObj) => {
    /*
      当取值为 brand-500时， 取原子化token中的 brand.500 , 当取值为 white或black时，则去原子化token中的white或black即可
      最终将  color-brand, var(--tiny-color-brand, #0067D1) 赋值为 
      color: {
          brand: var(--tiny-color-brand, #0067D1)
      }
    */

    let value = lists[tokenObj.colorClass][tokenObj.senceColorValue] || lists[tokenObj.colorClass]

    setCssValue(tokenObj.token, `var(${prefix}${tokenObj.token}, ${getValue(value, tokenObj.opacity / 100)})`)
  })
}

function setCssValue(classes, cssVar) {
  let classArr = classes.split('-').slice(1)

  switch (classArr.length) {
    case 1:
      colors[classArr[0]] = { DEFAULT: cssVar }

      break
    case 2:
      if (!colors[classArr[0]]) colors[classArr[0]] = {}
      colors[classArr[0]][classArr[1]] = cssVar

      break
    case 3:
      if (!colors[classArr[0]][classArr[1]]) {
        colors[classArr[0]][classArr[1]] = {}
      } else if (typeof colors[classArr[0]][classArr[1]] === 'string') {
        let val = colors[classArr[0]][classArr[1]]
        colors[classArr[0]][classArr[1]] = { DEFAULT: val }
      }
      colors[classArr[0]][classArr[1]][classArr[2]] = cssVar

      break
    default:
      colors[classes] = cssVar

      break
  }
}

function getValue(value, opacity) {
  if (opacity === 1) {
    return value
  } else {
    return `rgba(${hexToRgb(value)},${opacity})`
  }
}

function hexToRgb(hex) {
  const reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})/
  if (!reg.test(hex)) return

  hex = hex.replace(/#/g, '').toLowerCase()
  let len = hex.length
  if (len === 3) {
    let t = ''
    for (let i = 0; i < len; i++) {
      t += hex.slice(i, i + 1).concat(hex.slice(i, i + 1))
    }
    hex = t
  }

  const rgbs = []
  for (let i = 0; i < 6; i += 2) {
    let s = hex.slice(i, i + 2)
    rgbs.push(parseInt(s, 16))
  }

  return rgbs.join(',')
}

function loadLayout(designToken) {
  const Layout = designToken.themeColor[0].data.layout || designToken.baseLayout
  const fontSize = Layout.textLayout.fontSize
  const lineHeight = Layout.textLayout.lineHeight
  const borderWidth = Layout.borderWidth
  const radius = Layout.radius
  const space = Layout.space
  const boxShadow = Layout.boxShadow
  const opacity = Layout.opacity

  layoutToken.fontSize = getToken('fontSize', fontSize)
  layoutToken.lineHeight = getToken('lineHeight', lineHeight)
  layoutToken.borderWidth = getToken('borderWidth', borderWidth)
  layoutToken.borderRadius = getToken('borderRadius', radius)
  layoutToken.spacing = getToken('spacing', space)
  layoutToken.boxShadow = getToken('boxShadow', boxShadow)
  layoutToken.opacity = getToken('opacity', opacity)

  return layoutToken
}

function getToken(name, token) {
  let tokenList = {}
  tokenList[name] = setToken(name, defaultTheme[name])
  for (let key in token) {
    /* 
      用于编译主题定制配置的spacing、borderRadius等，key值为 --tiny-borderRadius-none 、 --tiny-spacing-0_5 、 --tiny-boxShadow-DEFAULT等， 
      格式为  --tiny-类型-属性值
      string为 key的后缀部分， none 、 0.5 、 DEFAULT 等
      最终编译为 spacing[0.5] = `var(--tiny-spacing-0_5, 0.125rem)`
    */

    let string = key.replace(/--tiny-[a-zA-Z]+-/, '').replace('_', '.')
    tokenList[name][string] = `var(${key}, ${token[key]})`
  }
  return tokenList[name]
}

function setToken(name, token) {
  let obj = {}
  for (let key in token) {
    // 用于编译 tailwind默认配置， 包括spacing、borderRadius、fontSize等

    let string = key.replace('.', '_')
    obj[key] = `var(${prefix + name}-${string}, ${typeof token[key] !== 'string' ? token[key][0] : token[key]})`
  }

  return obj
}

module.exports = { loadColor, loadLayout }
