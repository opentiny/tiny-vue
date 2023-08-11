// shortkey的 字典变量
const _s = {
  m: 'margin',
  p: 'padding',

  w: 'width',
  h: 'height',

  r: '-right',
  l: '-left',
  b: '-bottom',
  t: '-top'
}

export default function builder(option) {
  const isRem = !!option.isRem
  const $t = (num) => (isRem ? `${num}rem` : `${num}px`)
  return {
    rules: [
      // 高宽， 字体，行高                       f12  lh20   w200  h200  box78
      [/^(w|h)(\d+)$/, ([, attr, num]) => ({ [`${_s[attr]}`]: $t(num) })],
      // 高宽百分比                             wp33  hp50
      [/^(w|h)p(\d+)$/, ([, attr, num]) => ({ [`${_s[attr]}`]: `${num}%` })],

      // 内外边距   *可负*                        m10  mr10 mt-10 mx20 my-10  p10 pr10
      [/^([mp])([rlbt]?)(-?\d+)$/, ([, attr, pos, num]) => ({ [`${_s[attr]}${pos ? _s[pos] : ''}`]: $t(num) })],
      // 内外边距auto                                   m-auto mt-auto  mx-auto
      [/^([mp])([rlbt]?)-auto$/, ([, attr, pos]) => ({ [`${_s[attr]}${pos ? _s[pos] : ''}`]: 'auto' })],

      // abs 定位时 *可负*                        left0  right50  bottom-20  top-unset
      [/^(left|top|right|bottom)(-?\d+)$/, ([, pos, num]) => ({ [`${pos}`]: $t(num) })],
      [/^(left|top|right|bottom)-(auto|unset)$/, ([, pos, val]) => ({ [`${pos}`]: val })]
    ],
    shortcuts: [
      [/^(m|p)x(-?\d+)$/, ([, t, c]) => `${t}l${c} ${t}r${c}`],
      [/^(m|p)y(-?\d+)$/, ([, t, c]) => `${t}t${c} ${t}b${c}`],

      [/^(m|p)x-auto$/, ([, t, c]) => `${t}l-auto ${t}r-auto`],
      [/^(m|p)y-auto$/, ([, t, c]) => `${t}t-auto ${t}b-auto`],
      [/^box(\d+)$/, ([, w]) => `w${w} h${w}`]
    ]
  }
}
