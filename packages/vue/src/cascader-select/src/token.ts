export const classes = {
  'header-item': 'cursor-pointer px-4 flex items-center justify-center min-w-[50px] h-full text-sm',
  'picker-column': `flex relative before:content-[''] before:absolute before:top-1/2 before:h-[var(--lineHeight)] before:w-full before:border-t before:border-b before:border-color-bg-3 before:scale-90 before:-translate-y-1/2`,
  'picker-columnitem': 'flex-1 h-full relative',
  'picker-bar': 'flex h-12 items-center justify-between',

  'col-list': 'relative block w-full h-full overflow-hidden text-center scrolling-touch',
  'col-roller': 'absolute block top-1/2 w-full z1 -translate-y-1/2 [transform-style:preserve-3d] h-[var(--lineHeight)]',
  'col-roller-item':
    'block [backface-visibility:hidden] absolute top-0 w-full h-9 leading-9 text-color-text-primary truncate',
  'col-item-tile': 'block text-center w-full truncate',
  'col-roller-mask':
    'absolute w-full h-full block [background-image:linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.4)),linear-gradient(0deg,rgba(255,255,255,0.9),rgba(255,255,255,0.4))] [background-position:top,bottom] bg-no-repeat z-1'
}
