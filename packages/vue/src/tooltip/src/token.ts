export const classes = {
  'tooltip':
    'absolute -left-[9999px] py-2 px-3 sm:py-1.5 sm:px-2 text-sm sm:text-xs bg-color-text-primary text-color-text-inverse shadow-none sm:bg-color-bg-1 sm:text-color-text-primary sm:shadow-md leading-tight min-w-[theme(spacing.12)] max-w-[theme(spacing.112)] z-[2000] break-words rounded [&[x-placement^=top]]:mb-2.5 [&[x-placement^=bottom]]:mt-2.5 [&[x-placement^=right]]:ml-2.5 [&[x-placement^=left]]:mr-2.5',
  'arrow':
    'drop-shadow-none absolute block w-0 h-0 border-[0.375rem] border-transparent border-solid after:absolute after:block after:w-0 after:h-0 after:border-[0.3125rem] after:border-transparent after:border-solid after:content-[""]',
  'placement-top':
    'sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.08)] -bottom-3 border-t-color-text-primary sm:border-t-color-bg-1 border-b-w-0 sm:after:border-t-color-bg-1 after:-bottom-1 after:-ml-1.5 after:border-t-color-text-primary after:border-b-w-0',
  'placement-bottom':
    'sm:drop-shadow-[0_-2px_2px_rgba(0,0,0,0.08)] -top-3 border-t-w-0 border-b-color-text-primary sm:border-b-color-bg-1 sm:after:border-b-color-bg-1 after:-top-1 after:-ml-1.5 after:border-t-w-0 after:border-b-color-text-primary',
  'placement-right':
    'sm:drop-shadow-[-2px_0px_2px_rgba(0,0,0,0.08)] -left-3 border-r-color-text-primary border-l-w-0 sm:border-r-color-bg-1 sm:after:border-r-color-bg-1 after:-bottom-1 after:-left-1 after:border-r-color-text-primary after:border-l-w-0',
  'placement-left':
    'sm:drop-shadow-[2px_0_2px_rgba(0,0,0,0.08)] -right-1.5 border-l-color-text-primary border-r-0 sm:border-l-color-bg-1 sm:after:border-l-color-bg-1 after:-bottom-1 after:right-px after:-ml-1.5 after:border-l-color-text-primary after:border-r-0',
  'placement-top-light': 'border-t-color-bg-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.08)] after:border-t-color-bg-1',
  'placement-bottom-light': 'border-b-color-bg-1 drop-shadow-[0_-2px_2px_rgba(0,0,0,0.08)] after:border-b-color-bg-1',
  'placement-left-light': 'border-l-color-bg-1 drop-shadow-[2px_0_2px_rgba(0,0,0,0.08)] after:border-l-color-bg-1',
  'placement-right-light': 'border-r-color-bg-1 drop-shadow-[-2px_0px_2px_rgba(0,0,0,0.08)] after:border-r-color-bg-1',

  'placement-top-dark': 'border-t-color-text-primary after:border-t-color-text-primary',
  'placement-bottom-dark': 'border-b-color-text-primary after:border-b-color-text-primary',
  'placement-left-dark': 'border-l-color-text-primary after:border-l-color-text-primary',
  'placement-right-dark': 'border-r-color-text-primary after:border-r-color-text-primary'
}
