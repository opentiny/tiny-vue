// shortkey的 字典变量
const _s = { c: 'color', bg: 'background-color' }
export default function builder(option) {
  return {
    rules: [
      // 颜色  #不建议使用            c-black  bg-primary  c#123456
      [/^(c|bg)-(\w+)$/, ([, attr, color]) => ({ [`${_s[attr]}`]: `var(--${color})` })],
      [/^(c|bg)#(\w+)$/, ([, attr, color]) => ({ [`${_s[attr]}`]: `#${color}` })]
    ],
    shortcuts: []
  }
}
