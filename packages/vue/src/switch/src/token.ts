export const classes = {
  'switch-default':
    'sm:w-[2.375rem] sm:h-5 inline-block align-middle transition-all duration-200 ease-in-out border border-solid border-transparent relative cursor-pointer outline-0',
  'switch-default-mobile': 'w-[2.75rem] h-[1.625rem] rounded-2xl',
  'switch-default-mini-mobile': 'w-8 h-5 sm:w-[1.875rem] sm:h-4 rounded-2xl',

  'before-switch-default':
    'before:content-[""] before:rounded-xl before:bg-white before:absolute before:cursor-pointer before:transition-all before:duration-200 before:ease-in-out before:text-center before:left-px before:top-px',
  'before-switch-default-mobile': 'sm:before:w-4 sm:before:h-4 before:w-[1.375rem] before:h-[1.375rem]',
  'before-switch-default-mini-mobile': 'before:w-4 before:h-4 sm:before:w-3 sm:before:h-3',
  'active-before-switch-default-mobile': 'active:before:w-[1.625rem] sm:active:before:w-5',
  'active-before-switch-default-mini-mobile': 'active:before:w-4.5 sm:active:before:w-[0.9375rem]',

  'switch-true': 'border-color-brand bg-color-brand before:left-4.5 active:before:left-[0.875rem] sm:before:left-4.5',
  'switch-true-mini':
    'border-color-brand bg-color-brand before:left-[0.8375rem] sm:before:left-[0.9375rem] active:before:left-[0.6875rem] sm:active:before:left-[0.75rem]',
  'switch-false': 'bg-color-icon-disabled',
  'switch-true-disabled':
    'bg-color-brand-disabled before:left-4.5 sm:before:left-4.5 cursor-not-allowed before:cursor-not-allowed',
  'switch-true-disabled-mini':
    'bg-color-brand-disabled before:left-[0.8125rem] sm:before:left-[0.9375rem] cursor-not-allowed before:cursor-not-allowed',
  'switch-false-disabled': 'bg-color-icon-primary cursor-not-allowed before:cursor-not-allowed opacity-10',
  'switch-false-loading': 'bg-color-border-separator cursor-not-allowed before:cursor-not-allowed',

  'switch-inner-default':
    'absolute transition-all duration-200 ease-in-out text-color-bg-1 flex justify-center items-center m-auto',
  'switch-inner-default-mobile': 'w-6 h-6 sm:w-4.5 sm:h-4.5 ',
  'switch-inner-default-mobile-mini': 'w-4.5 h-4.5 sm:w-3.5 sm:h-3.5',

  'switch-inner-true': '-left-px -top-px sm:top-0',
  'switch-inner-false': 'left-5 -top-px sm:left-4.5 sm:top-0',

  'switch-inner-true-mini': '-left-px sm:left-0',
  'switch-inner-false-mini': 'left-[0.875rem] sm:left-4',

  'switch-inner-true-icon': 'left-4.5',
  'switch-inner-true-icon-mini': 'left-[0.8125rem] sm:left-[0.875rem]',
  'switch-inner-false-icon': '',
  'switch-inner-false-icon-mini': '-left-[0.02rem]',

  'switch-inner-true-loading': 'left-[1.0625rem]',
  'switch-inner-true-loading-mini': 'left-3 sm:left-3.5',
}
