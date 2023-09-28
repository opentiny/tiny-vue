// shortkey的 字典变量
const _s = {
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
  stretch: 'stretch',
};

export default function builder(option) {
  return {
    rules: [
      // display                          d-none,  d-block d-flex d-inline d-grid  d-ib  d-if  d-ig
      [/^d-(none|block|flex|inline|grid|ib|if|ig)$/, ([, pos]) => ({ display: `${_s[pos]}` })],
      // position                           abs  rel  fixed  sticky  static
      [/^(rel|abs|fixed|sticky|static)$/, ([, pos]) => ({ position: `${_s[pos]}` })],
      // 绝对定位                           abs-0   fixed-0
      ['abs-0', { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }],
      ['fixed-0', { position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }],

      // flex布局  父元素：                           f-r f-c   f-center   f-pos-between   f-box-stretch  f-wrap
      [/^f-([rc])$/, ([, dir]) => ({ display: 'flex', 'flex-direction': `${_s[dir]}` })],
      [/^f-pos-(start|center|end|around|between|evenly|stretch)$/, ([, dir]) => ({ 'justify-content': `${_s[dir]}` })],
      [/^f-box-(start|center|end|stretch)$/, ([, dir]) => ({ 'align-items': `${_s[dir]}` })],
      [/^f-(wrap|nowrap)$/, ([, dir]) => ({ 'flex-wrap': dir })],

      // 子元素：                           fi-1  fi-4
      [/^fi-(\d+)$/, ([, num]) => ({ flex: `${num}` })],
    ],
    shortcuts: [
      {
        'f-center': 'd-flex f-pos-center f-box-center',
      },
    ],
  };
}
