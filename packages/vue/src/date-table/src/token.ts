const common = {
  'next-month': 'text-color-text-disabled cursor-pointer group-hover:bg-inherit',
  'current': 'group-hover:text-color-text-inverse group-hover:bg-color-brand text-color-text-inverse bg-color-brand',
  'start-date': 'text-color-text-inverse bg-color-brand group-hover:bg-color-brand'
}

export const classes = {
  ...common,
  'today': 'border border-solid border-color-border-focus',
  'pre-month': common['next-month'],
  'selected': common['current'],
  'th': 'px-1 py-4 text-color-text-primary font-normal whitespace-nowrap',
  'td': 'box-border text-center cursor-pointer relative group',
  'cell': 'h-8 mb-2.5 box-border',
  'in-range': '',
  'cell-in-range': 'bg-color-brand-hover-subtle text-color-brand',
  'disabled': 'text-color-text-disabled group-hover:text-color-text-disabled cursor-pointer cursor-not-allowed bg-color-bg-3 group-hover:bg-color-bg-3',
  'cell-disabled': 'bg-color-bg-3 text-color-text-disabled',
  'text':
    'w-8 h-8 leading-8 block absolute left-1/2 box-border -translate-x-2/4 rounded group-hover:bg-color-brand-hover-subtle',
  'end-date': common['start-date'],
  'token': ''
}
