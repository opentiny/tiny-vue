// shortkey的 字典变量
const _s = {
  def: 'default',
  hand: 'pointer',
  disable: 'not-allowed',
};
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

export default function builder(option) {
  return {
    rules: [
      // 省略号                                 ellipsis  ellipsis2  ellipsis3
      ['ellipsis', { overflow: 'hidden', ' text-overflow': 'ellipsis', 'white-space': 'nowrap' }],
      [
        /^ellipsis(\d+)$/,
        ([, num]) => ({
          display: '-webkit-box',
          overflow: 'hidden',
          '-webkit-line-clamp': num,
          ' -webkit-box-orient': 'vertical',
          'overflow-wrap': 'anywhere',
        }),
      ],
      // 光标样式                                cur-hand
      [/^cur-(def|hand|disable)$/, ([, shape]) => ({ cursor: `${_s[shape]}` })],
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
      ['decoration-none', { 'text-decoration': 'none' }],
    ],
    shortcuts: [],
  };
}
