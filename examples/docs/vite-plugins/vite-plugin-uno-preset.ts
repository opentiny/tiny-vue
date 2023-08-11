const _s0 = {
  m: 'margin',
  p: 'padding',

  w: 'width',
  h: 'height',

  minw: 'min-width',
  maxw: 'max-width',
  minh: 'min-height',
  maxh: 'max-height',

  r: '-right',
  l: '-left',
  b: '-bottom',
  t: '-top'
}
const sizeRules = [
  // 高宽， 字体，行高                       f12  lh20   w200  h200  box78
  [/^(w|h|minw|maxw|minh|maxh)(\d+)$/, ([, attr, num]) => ({ [`${_s0[attr]}`]: `${num}px` })],
  // 高宽百分比                             wp33  hp50
  [/^(w|h)p(\d+\.?\d*)$/, ([, attr, num]) => ({ [`${_s0[attr]}`]: `${num}%` })],

  // 内外边距   *可负*                        m10  mr10 mt-10 mx20 my-10  p10 pr10
  [/^([mp])([rlbt]?)(-?\d+)$/, ([, attr, pos, num]) => ({ [`${_s0[attr]}${pos ? _s0[pos] : ''}`]: `${num}px` })],
  // 内外边距auto                                   m-auto mt-auto  mx-auto
  [/^([mp])([rlbt]?)-auto$/, ([, attr, pos]) => ({ [`${_s0[attr]}${pos ? _s0[pos] : ''}`]: 'auto' })],

  // abs 定位时 *可负*                        left0  right50  bottom-20  leftauto
  [/^(left|top|right|bottom)(-?\d+)$/, ([, pos, num]) => ({ [`${pos}`]: `${num}px` })],
  [/^(left|top|right|bottom)-(auto|unset)$/, ([, pos, val]) => ({ [`${pos}`]: val })]
]
const _s1 = {
  none: 'none',
  block: 'block',
  inline: 'inline',
  flex: 'flex',
  grid: 'grid',
  ib: 'inline-block',
  if: 'inline-flex',
  ig: 'inline-grid',

  abs: 'absolute',
  rel: 'relative',
  fixed: 'fixed',
  sticky: 'sticky',
  static: 'static',

  r: 'row',
  c: 'column',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end',
  around: 'space-around',
  between: 'space-between',
  evenly: 'space-evenly',
  stretch: 'stretch'
}

const layoutRules = [
  // display                          d-none,  d-block d-flex d-inline d-grid  d-ib  d-if  d-ig
  [/^d-(none|block|flex|inline|grid|ib|if|ig)$/, ([, pos]) => ({ display: `${_s1[pos]}` })],
  // position                           abs  rel  fixed  sticky  static
  [/^(rel|abs|fixed|sticky|static)$/, ([, pos]) => ({ position: `${_s1[pos]}` })],
  // 绝对定位                           abs-0   fixed-0
  ['abs-0', { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }],
  ['fixed-0', { position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }],
  // 这个会用的很少，通常是css reset中会重置。
  ['border-box', { 'box-sizing': 'border-box' }],
  ['content-box', { 'box-sizing': 'content-box' }],
  // flex布局  父元素：                           f-r f-c   f-center   f-pos-between   f-box-stretch  f-wrap
  [/^f-([rc])$/, ([, dir]) => ({ display: 'flex', 'flex-direction': `${_s1[dir]}` })],
  [/^f-pos-(start|center|end|around|between|evenly|stretch)$/, ([, dir]) => ({ 'justify-content': `${_s1[dir]}` })],
  [/^f-box-(start|center|end|stretch)$/, ([, dir]) => ({ 'align-items': `${_s1[dir]}` })],
  [/^f-(wrap|nowrap)$/, ([, dir]) => ({ 'flex-wrap': dir })],

  // 子元素：                           fi-1  fi-4
  [/^fi-(\d+)$/, ([, num]) => ({ flex: `${num}` })]
]

const _s2 = {
  f: 'font-size',
  lh: 'line-height',

  bold: 'bolder',
  thin: 'lighter',
  normal: 'normal',

  under: 'underline',
  over: 'overline',
  through: 'line-through',
  del: 'line-through',
  none: 'none'
}

const fontRules = [
  // 字体与行高                              f12  lh20
  [/^(f|lh)(\d+)$/, ([, attr, num]) => ({ [`${_s2[attr]}`]: `${num}px` })],
  // 字体粗细                               fw-bold  fw-700
  [/^fw-(bold|thin|normal)$/, ([, dir]) => ({ 'font-weight': `${_s2[dir]}` })],
  [/^fw-(\d+)$/, ([, val]) => ({ 'font-weight': val })],
  // 文字对齐                               text-right  ta-center
  [/^(text|ta)-(right|left|center)$/, ([, abbr, dir]) => ({ 'text-align': dir })],
  // 文字上下划线  solid|double|dotted|dashed|wavy
  //             td-under  td-over-wavy td-over  td-none-dashed
  [
    /^td-(under|over|through|del|none)(-solid|-double|-dotted|-dashed|-wavy)?$/,
    ([, dir, style = '']) => ({ 'text-decoration': `${_s2[dir]} ${style.slice(1)}` })
  ],
  // 文字阴影       ts-sm  ts-lg
  ['ts-sm', { 'text-shadow': 'var(--text-shadow-sm)' }],
  ['ts-lg', { 'text-shadow': 'var(--text-shadow-lg)' }]
]
const _s3 = {
  a: '', // all
  r: '-right',
  l: '-left',
  b: '-bottom',
  t: '-top',
  ws: 'var(--border-width) var(--border-style) ' // width & style
}

const borderRules = [
  // 边框           b-a b-b b-r b-t b-l  b-a-primary  b-a#ff0000
  [/^b-([arlbt])$/, ([, pos]) => ({ [`border${_s3[pos]}`]: _s3.ws + 'var(--border-color)' })],
  [/^b-([arlbt])-([\w|-]+)$/, ([, pos, color]) => ({ [`border${_s3[pos]}`]: _s3.ws + `var(--${color})` })],
  [/^b-([arlbt])#(\w+)$/, ([, pos, color]) => ({ [`border${_s3[pos]}`]: _s3.ws + `#${color}` })],
  // 边框样式      bs-dotted  bs-double
  [/^bs-(none|dotted|dashed|solid|double|groove|ridge|inset|outset)$/, ([, style]) => ({ 'border-style': style })],
  [/^br-(\d+)$/, ([, val]) => ({ 'border-radius': `${val}px` })],
  // 无边框                               nb-a nb-b nb-r nb-t nb-l
  [/^nb-([arlbt])$/, ([, pos]) => ({ [`border${_s3[pos]}`]: 'none' })],

  ['br-sm', { 'border-radius': 'var(--box-radius-sm)' }],
  ['br-lg', { 'border-radius': 'var(--box-radius-lg)' }],
  ['br-circle', { 'border-radius': '50%' }],
  ['bs-sm', { 'box-shadow': 'var(--box-shadow-sm)' }],
  ['bs-lg', { 'box-shadow': 'var(--box-shadow-lg)' }]
]

const _s4 = {
  def: 'default',
  hand: 'pointer',
  disable: 'not-allowed'
}
const clamp = (v, min, max) => Math.min(Math.max(v, min), max)
const utilRules = [
  // 省略号                                 ellipsis  ellipsis2  ellipsis3
  ['ellipsis', { overflow: 'hidden', ' text-overflow': 'ellipsis', 'white-space': 'nowrap' }],
  [
    /^ellipsis(\d+)$/,
    ([, num]) => ({
      display: '-webkit-box',
      overflow: 'hidden',
      '-webkit-line-clamp': num,
      ' -webkit-box-orient': 'vertical',
      'overflow-wrap': 'anywhere'
    })
  ],
  // 光标样式                                cur-hand
  [/^cur-(def|hand|disable)$/, ([, shape]) => ({ cursor: `${_s4[shape]}` })],
  // overflow                                of-auto  ofx-hidden  ofy-scroll
  [/^of(\w?)-(auto|scroll|hidden|visible)$/, ([, axis, mode]) => ({ [`overflow${axis ? '-' + axis : ''}`]: mode })],
  // 图片填充                               img-cover
  [/^img-(cover|contain|fill)$/, ([, mode]) => ({ 'object-fit': mode })],
  // z-index                              z100
  [/^z(-?\d+)$/, ([, num]) => ({ 'z-index': num })],
  //  选择相关                             noselect allselect  nomouse   参见选择变体： select:c-primary  select:bg-dark
  ['noselect', { 'user-select': 'none' }],
  ['allselect', { 'user-select': 'all' }],
  ['noevent', { 'pointer-events': 'none' }],
  //  可见性                                hide   show
  ['hide', { visibility: 'hidden' }],
  ['show', { visibility: 'visible' }],
  // 透明度                               op100
  [/^op(\d+)$/, ([, val]) => ({ opacity: clamp(val / 100, 0, 1) })],
  ['op-hover', { opacity: 'var(--hover-op)' }],
  ['op-disabled', { opacity: 'var(--disabled-op)' }],

  // 断词            breakword  breakall
  [/^break(word|all)$/, ([, type]) => ({ 'word-break': `break-${type}` })]
]

const _s5 = { c: 'color', bg: 'background-color' }
const colorRules = [
  // 颜色  #不建议使用            c-black  bg-primary  c#123456  c-theme-color
  [
    /^(c|bg)-rand(\d+)$/,
    ([, attr, seed]) => ({ [`${_s5[attr]}`]: `#${Math.floor(Math.random() * 255 * 255 * 255).toString(16)}` })
  ],
  [/^(c|bg)-([\w|-]+)$/, ([, attr, color]) => ({ [`${_s5[attr]}`]: `var(--${color})` })],
  [/^(c|bg)#(\w+)$/, ([, attr, color]) => ({ [`${_s5[attr]}`]: `#${color}` })]
]
export const rules = [...sizeRules, ...layoutRules, ...fontRules, ...borderRules, ...utilRules, ...colorRules]

export const shortcuts = [
  [/^(m|p)x(-?\d+)$/, ([, t, c]) => `${t}l${c} ${t}r${c}`],
  [/^(m|p)y(-?\d+)$/, ([, t, c]) => `${t}t${c} ${t}b${c}`],

  [/^(m|p)x-auto$/, ([, t, c]) => `${t}l-auto ${t}r-auto`],
  [/^(m|p)y-auto$/, ([, t, c]) => `${t}t-auto ${t}b-auto`],
  [/^box(\d+)$/, ([, w]) => `w${w} h${w}`],
  [/^link-(\w+)$/, ([, c]) => `c-${c} h:c-${c}less  cur-hand `],
  [/^link#(\w+)$/, ([, c]) => `c#${c} cur-hand `],
  ['f-center', 'd-flex f-pos-center f-box-center']
]

export const variants = [
  (matcher) => {
    if (!matcher.startsWith('!')) return matcher
    return {
      matcher: matcher.slice(1),
      body: (body) => {
        body.forEach((e) => e[1] && (e[1] += ' !important'))
        return body
      }
    }
  },
  (matcher) => {
    if (!matcher.startsWith('h:')) return matcher
    return {
      matcher: matcher.slice(2),
      selector: (s) => `${s}:hover`,
      body: (body) => {
        body.push(['transition', 'all var(--trans-time)'])
        return body
      }
    }
  },
  (matcher) => {
    if (!matcher.startsWith('child:')) return matcher
    return {
      matcher: matcher.slice(6),
      selector: (s) => `${s}>*`,
      body: (s) => s
    }
  },
  (matcher) => {
    // "child<code>xxx".match(/child<(\w+)>/ )  =====> ['child<code>', 'code']
    const matchResult = matcher.match(/^child<(\w+)>/)
    if (!matchResult) return matcher
    const [matchStr, selector] = matchResult
    return {
      matcher: matcher.slice(matchStr.length),
      selector: (s) => `${s} ${selector}`,
      body: (s) => s
    }
  }
]
