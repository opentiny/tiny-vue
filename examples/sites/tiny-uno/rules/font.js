// shortkey的 字典变量
const _s = {
  f: 'font-size',
  lh: 'line-height',

  bold: 'bolder',
  thin: 'lighter',
  normal: 'normal',

  underline: 'underline',
  overline: 'overline',
  through: 'line-through',
  none: 'none'
}

export default function builder(option) {
  const isRem = !!option.isRem
  const $t = (num) => (isRem ? `${num}rem` : `${num}px`)
  return {
    rules: [
      // 字体与行高                              f12  lh20
      [/^(f|lh)(\d+)$/, ([, attr, num]) => ({ [`${_s[attr]}`]: $t(num) })],
      // 字体粗细                               fw-bold  fw-700
      [
        /^fw-(bold|thin|normal|100|200|300|400|500|600|700|800|900)$/,
        ([, dir]) => ({ 'font-weight': `${_s[dir] || dir}` })
      ],
      // 文字对齐                               text-right  text-underline  text-overline
      [/^text-(right|left|center)$/, ([, dir]) => ({ 'text-align': dir })],
      // 文字上下划线  solid|double|dotted|dashed|wavy
      //             text-underline text-none  text-overlinewavy text-overline-
      [
        /^text-(underline|overline|through|none)-?(solid|double|dotted|dashed|wavy)?$/,
        ([, dir, style]) => ({ 'text-decoration': `${dir} ${style || ''}` })
      ],
      // 文字阴影       ts-sm  ts-lg
      ['ts-sm', { 'text-shadow': 'var(--text-shadow-sm)' }],
      ['ts-lg', { 'text-shadow': 'var(--text-shadow-lg)' }]
    ],
    shortcuts: []
  }
}
