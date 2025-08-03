export const classes = {
  'base': 'flex',

  // gap 映射（支持 small/medium/large/number/string）
  'gap-small': 'gap-2', // 8px
  'gap-medium': 'gap-4', // 16px
  'gap-large': 'gap-6', // 24px
  // 允许传入自定义 gap-[value] 时动态拼接

  // flex-direction
  'direction-row': 'flex-row',
  'direction-row-reverse': 'flex-row-reverse',
  'direction-column': 'flex-col',
  'direction-column-reverse': 'flex-col-reverse',

  // align-items
  'align-start': 'items-start',
  'align-center': 'items-center',
  'align-end': 'items-end',
  'align-baseline': 'items-baseline',
  'align-stretch': 'items-stretch',

  // justify-content
  'justify-start': 'justify-start',
  'justify-center': 'justify-center',
  'justify-end': 'justify-end',
  'justify-space-between': 'justify-between',
  'justify-space-around': 'justify-around',
  'justify-space-evenly': 'justify-evenly',

  // wrap
  'wrap-true': 'flex-wrap',
  'wrap-false': 'flex-nowrap'
}
