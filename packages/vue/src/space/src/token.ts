export const classes = {
  // 布局方向
  'direction-row': 'flex-row',
  'direction-column': 'flex-col',

  // 主轴对齐方式
  'justify-start': 'justify-start',
  'justify-center': 'justify-center',
  'justify-end': 'justify-end',
  'justify-between': 'justify-between',
  'justify-around': 'justify-around',
  'justify-evenly': 'justify-evenly',

  // 交叉轴对齐方式
  'align-start': 'items-start',
  'align-center': 'items-center',
  'align-end': 'items-end',
  'align-stretch': 'items-stretch',
  'align-baseline': 'items-baseline',

  // 是否换行
  'wrap-false': 'flex-nowrap',
  'wrap-true': 'flex-wrap',

  // 间距尺寸（根据 size prop）
  'gap-small': 'gap-2',
  'gap-medium': 'gap-4',
  'gap-large': 'gap-6',
  'gap-custom': '', // 自定义间距由 style 动态生成

  // 子元素顺序控制（在 renderless 层控制顺序）
  'order-enabled': 'flex', // 顺序启用时，启用 flex 布局

  // 空间容器默认样式
  'space-base': 'flex w-full box-border'
}
