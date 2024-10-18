const prefix = ['--tv-Button-', '按钮']
const props = [
  'text-color|文本色'
  // 'bg-color|背景色',
  // 'border-color|边框色',
  //  'icon-color|图标色',

  // 'text-color-active|激活的文本色',
  // 'bg-color-active|激活的背景色',
  // 'border-color-active|激活的边框色',
  // 'icon-color-active|激活的图标色',

  // 'text-color-plain-active|激活的朴素文本色',
  // 'bg-colo-plain-activer|激活的朴素背景色',
  // 'border-color-plain-active|激活的朴素边框色',

  // 'height|高度',
  // 'padding|内边距',
  // 'margin|外边距',
  // 'font-size|字号',
  // 'font-weight|字重',
  // 'box-shadow|阴影',
  // 'border-radius|圆角',

  // 'font-size|字号',
  // 'height|高度',
  // 'padding-x|水平间距',
  // 'min-width|最小宽度',
]

const suffix = [
  // '-default|默认时',

  // '-primary|primary 主题时',
  // '-success|success 主题时',
  // '-info|info 主题时',
  // '-warning|warning 主题时',
  // '-danger|danger 主题时',

  // '-disabled|禁用时',
  '-ghost|幽灵时'
  // '-plain|朴素时',
  // '-active|激活时',
  // '-large|超大',
  // '-medium|中等',
  // '-small|小型',
  // '-mini|超小',
]

const res = suffix
  .map((suf) => {
    const sufx = suf.split('|')

    return props.map((prop) => {
      const names = prop.split('|')
      return '// ' + sufx[1] + prefix[1] + names[1] + '\n' + prefix[0] + names[0] + sufx[0] + ': var(--xxxxx);\n'
    })
  })
  .flat()
  .join('')

/* eslint-disable no-console */
console.log(res)
