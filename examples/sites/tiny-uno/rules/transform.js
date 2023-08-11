// shortkey的 字典变量
const _s = { c: 'center', l: 'left', t: 'top', r: 'right', b: 'bottom' }

export default function builder(option) {
  const isRem = !!option.isRem
  const $t = (num) => (isRem ? `${num}rem` : `${num}px`)
  return {
    rules: [
      // 启用过渡                                trans
      ['trans', { transition: 'all var(--trans-time)' }],
      // transform中心点        to-c to-lt to-t
      [/^to-([cltrb])([cltrb]?)$/, ([, dir1, dir2]) => ({ 'transform-origin': `${_s[dir1]} ${dir2 ? _s[dir2] : ''}` })],

      // 旋转  【可负可小数】                tr15  tr45.25  tr-45.25
      [/^tr(-?\d+\.?\d*)$/, ([, ang]) => ({ transform: `rotateZ(${ang}deg)` })],

      // 缩放    【可小数】                 ts2  ts3.5  h:ts3.5
      [/^ts(\d+\.?\d*)$/, ([, ang]) => ({ transform: `scale(${ang})` })], // 匹配小数

      // 平移    【可负可小数】              tt-10  tt-10#10 tt-10.5#12.5
      [
        /^tt(-?\d+\.?\d*)(#-?\d+\.?\d*)?$/,
        ([, x, y]) => {
          let target
          if (y) target = y.slice(1) // 去#
          return { transform: `translate(${$t(x)},${target ? $t(target) : '0'})` }
        }
      ]
    ],
    shortcuts: []
  }
}
