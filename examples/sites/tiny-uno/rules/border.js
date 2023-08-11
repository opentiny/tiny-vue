// shortkey的 字典变量
const _s = {
  a: '', // all
  r: '-right',
  l: '-left',
  b: '-bottom',
  t: '-top',

  ws: 'var(--border-width) var(--border-style) ' // width & style
}

export default function builder(option) {
  const isRem = !!option.isRem
  const $t = (num) => (isRem ? `${num}rem` : `${num}px`)
  return {
    rules: [
      // 边框           b-a b-b b-r b-t b-l  b-a-primary  b-a#ff0000
      [/^b-([arlbt])$/, ([, pos]) => ({ [`border${_s[pos]}`]: _s.ws + 'var(--border-color)' })],
      [/^b-([arlbt])-(\w+)$/, ([, pos, color]) => ({ [`border${_s[pos]}`]: _s.ws + `var(--${color})` })],
      [/^b-([arlbt])#(\w+)$/, ([, pos, color]) => ({ [`border${_s[pos]}`]: _s.ws + `#${color}` })],
      // 边框样式      bs-dotted  bs-double
      [/^bs-(none|dotted|dashed|solid|double|groove|ridge|inset|outset)$/, ([, style]) => ({ 'border-style': style })],
      [/^br-(\d+)$/, ([, val]) => ({ 'border-radius': $t(val) })],
      // 无边框                               nb-a nb-b nb-r nb-t nb-l
      [/^nb-([arlbt])$/, ([, pos]) => ({ [`border${_s[pos]}`]: 'none' })],

      ['br-sm', { 'border-radius': 'var(--radius-sm)' }],
      ['br-lg', { 'border-radius': 'var(--radius-lg)' }],
      ['br-circle', { 'border-radius': '50%' }],
      ['bs-sm', { 'box-shadow': 'var(--shadow-sm)' }],
      ['bs-lg', { 'box-shadow': 'var(--shadow-lg)' }]
    ],
    shortcuts: []
  }
}
