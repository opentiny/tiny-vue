export const classes = {
  'tooltip':
    'absolute bg-color-text-primary text-color-text-inverse shadow-none -left-[9999px] py-2 px-3 sm:py-1.5 sm:px-2 text-sm sm:text-xs leading-tight min-w-[theme(spacing.12)] max-w-[theme(spacing.80)] sm:max-w-[theme(spacing.112)] z-[2000] break-words rounded [&[x-placement^=top]]:mb-2.5 [&[x-placement^=bottom]]:mt-2.5 [&[x-placement^=right]]:ml-2.5 [&[x-placement^=left]]:mr-2.5',
  'tooltip-sm': 'sm:bg-color-bg-1 sm:text-color-text-primary sm:shadow-md',
  'arrow':
    'drop-shadow-none absolute block w-0 h-0 border-[0.375rem] border-transparent border-solid after:absolute after:block after:w-0 after:h-0 after:border-[0.3125rem] after:border-transparent after:border-solid after:content-[""]',
  'placement-top':
    '-bottom-3 border-t-color-text-primary border-b-w-0 after:-bottom-1 after:-ml-1.5 after:border-t-color-text-primary after:border-b-w-0',
  'placement-bottom':
    '-top-3 border-t-w-0 border-b-color-text-primary after:-top-1 after:-ml-1.5 after:border-t-w-0 after:border-b-color-text-primary',
  'placement-right':
    '-left-3 border-r-color-text-primary border-l-w-0 after:-bottom-1 after:-left-1 after:border-r-color-text-primary after:border-l-w-0',
  'placement-left':
    '-right-1.5 border-l-color-text-primary border-r-0 after:-bottom-1 after:right-px after:-ml-1.5 after:border-l-color-text-primary after:border-r-0',

  'placement-top-sm': 'sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.08)] sm:border-t-color-bg-1 sm:after:border-t-color-bg-1',
  'placement-bottom-sm':
    'sm:drop-shadow-[0_-2px_2px_rgba(0,0,0,0.08)] sm:border-b-color-bg-1 sm:after:border-b-color-bg-1',
  'placement-right-sm':
    'sm:drop-shadow-[-2px_0px_2px_rgba(0,0,0,0.08)] sm:border-r-color-bg-1 sm:after:border-r-color-bg-1',
  'placement-left-sm':
    'sm:drop-shadow-[2px_0_2px_rgba(0,0,0,0.08)] sm:border-l-color-bg-1 sm:after:border-l-color-bg-1',

  'placement-top-light': 'border-t-color-bg-1 drop-shadow-[0_2px_2px_rgba(0,0,0,0.08)] after:border-t-color-bg-1',
  'placement-bottom-light': 'border-b-color-bg-1 drop-shadow-[0_-2px_2px_rgba(0,0,0,0.08)] after:border-b-color-bg-1',
  'placement-left-light': 'border-l-color-bg-1 drop-shadow-[2px_0_2px_rgba(0,0,0,0.08)] after:border-l-color-bg-1',
  'placement-right-light': 'border-r-color-bg-1 drop-shadow-[-2px_0px_2px_rgba(0,0,0,0.08)] after:border-r-color-bg-1',

  'placement-top-dark': 'border-t-color-text-primary after:border-t-color-text-primary',
  'placement-bottom-dark': 'border-b-color-text-primary after:border-b-color-text-primary',
  'placement-left-dark': 'border-l-color-text-primary after:border-l-color-text-primary',
  'placement-right-dark': 'border-r-color-text-primary after:border-r-color-text-primary',

  'effect-dark': 'bg-color-text-primary text-color-text-inverse shadow-none',
  'effect-light': 'bg-color-bg-1 text-color-text-primary shadow-md',

  'is-warning': 'text-color-text-inverse bg-color-warning border-color-warning',
  'is-error': 'text-color-text-inverse bg-color-error border-color-error',
  'is-info': 'text-color-text-inverse bg-color-info-secondary border-color-info-secondary',
  'is-success': 'text-color-text-inverse bg-color-success border-color-success',

  'arrow-top-warning': 'border-t-color-warning after:border-t-color-warning',
  'arrow-bottom-warning': 'border-b-color-warning after:border-b-color-warning',
  'arrow-left-warning': 'border-l-color-warning after:border-l-color-warning',
  'arrow-right-warning': 'border-r-color-warning after:border-r-color-warning',

  'arrow-top-error': 'border-t-color-error after:border-t-color-error',
  'arrow-bottom-error': 'border-b-color-error after:border-b-color-error',
  'arrow-left-error': 'border-l-color-error after:border-l-color-error',
  'arrow-right-error': 'border-r-color-error after:border-r-color-error',

  'arrow-top-info': 'border-t-color-info-secondary after:border-t-color-info-secondary',
  'arrow-bottom-info': 'border-b-color-info-secondary after:border-b-color-info-secondary',
  'arrow-left-info': 'border-l-color-info-secondary after:border-l-color-info-secondary',
  'arrow-right-info': 'border-r-color-info-secondary after:border-r-color-info-secondary',

  'arrow-top-success': 'border-t-color-success after:border-t-color-success',
  'arrow-bottom-success': 'border-b-color-success after:border-b-color-success',
  'arrow-left-success': 'border-l-color-success after:border-l-color-success',
  'arrow-right-success': 'border-r-color-success after:border-r-color-success'
}
