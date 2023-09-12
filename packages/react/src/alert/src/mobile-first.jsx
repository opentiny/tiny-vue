import { renderless, api } from '@opentiny/vue-renderless/alert/react'
import { IconClose, IconSuccess, IconError, IconHelp, IconWarning, IconChevronDown } from '@opentiny/react-icon'
import {
  vc,
  If,
  Component,
  Slot,
  useSetup,
  useVm,
} from '@opentiny/react-common'

const $constants = {
  ICON_MAP: {
    success: IconSuccess,
    error: IconError,
    info: IconHelp,
    warning: IconWarning
  },
  TITLE_MAP: {
    success: 'ui.alert.success',
    error: 'ui.alert.error',
    info: 'ui.alert.info',
    warning: 'ui.alert.warning'
  },
  CONTENT_MAXHEUGHT: 252
}

export default function Alert(props) {
  const {
    type = 'success',
    size = 'normal',
    center = false,
    showIcon = true,
    description = '',
    slots = {},
    _constants = $constants,
    closable = true,
    closeText,
    title,
    showFoldable = true,
    singleLine,
    scrolling
  } = props

  const defaultProps = {
    type,
    size,
    center,
    showIcon,
    description,
    slots,
    _constants,
    closable,
    closeText,
    title,
    showFoldable
  }

  const { ref, current: vm, parent } = useVm()

  const {
    state,
    handleHeaderClick
  } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    parent
  })

  return (<div ref={ref}>
    <If v-if={state.show}>
      <div className={
        vc([
          'min-h-min flex py-2 sm:py-3 px-4 my-2 rounded box-border font-light sm:font-normal',
          { 'bg-color-info-secondary-subtle': type === 'info' || !type },
          { 'bg-color-error-subtler': type === 'error' },
          { 'bg-color-warning-subtler': type === 'warning' },
          { 'bg-color-success-subtler': type === 'success' },
          { 'text-center': center }
        ])}
      >
        <Component
          v-if={showIcon}
          is={state.getIcon}
          className={vc([
            'h-4.5 w-4.5 mt-1 sm:mt-0.5 sm:h-6 sm:w-5 sm:h-5 fill-current',
            { 'text-color-info-secondary': type === 'info' || !type },
            { 'text-color-error': type === 'error' },
            { 'text-color-warning': type === 'warning' },
            { 'text-color-success': type === 'success' }
          ])}
        />
        <If v-if={showFoldable}>
          <div className={vc([
            'flex-1 leading-6 text-sm overflow-hidden cursor-pointer',
            showIcon ? 'mx-2' : 'mr-2'
          ])}>
            <If v-if={size === 'large'}>
              <div onClick={handleHeaderClick} className='inline-flex cursor-pointer font-medium'>
                <span>
                  <Slot name='title' slots={props.slots}>{state.getTitle}</Slot>
                </span>
                <span className='ml-2.5'>
                  <IconChevronDown className={vc([
                    'transition-transform duration-300 align-top my-1 fill-color-icon-placeholder',
                    state.contentVisible ? 'rotate-180' : 'rotate-0'
                  ])} />
                </span>
              </div>
            </If>
            <div
              v_ref='ContentDescribe'
              className={vc([
                'transition-all duration-900 ease-linear',
                { 'hidden': size === 'large' && !description && !slots.description },
                { 'overflow-y-auto': state.scrollStatus },
                state.contentVisible ? 'max-h-[theme(spacing.72)]' : 'max-h-0'
              ])}
            >
              <div
                className={vc([
                  { 'truncate': singleLine },
                  {
                    'hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer':
                      singleLine && scrolling
                  }
                ])}
              >
                <Slot name="description" slots={props.slots}>{description}</Slot>
              </div>
            </div>

            <If v-if={size === 'large' && (slots.default || props.children)}>
              <div
                v_ref='ContentDefault'
                className={vc([
                  'transition-all duration-900 ease-linear',
                  { 'pt-2': description && state.contentVisible },
                  { 'overflow-y-auto': state.scrollStatus },
                  state.contentVisible ? 'max-h-[theme(spacing.72)]' : 'max-h-0'
                ])}
              >
                <Slot {...props}></Slot>
              </div>
            </If>

          </div>
        </If>
        <If v-if={!showFoldable}>
          <div className={vc([
            'flex-1 leading-6 text-sm overflow-hidden cursor-pointer',
            showIcon ? 'mx-2' : 'mr-2'
          ])}>
            <If v-if={size === 'large'}>
              <div className='font-medium'>
                <Slot name='title' slots={props.slots}>{state.getTitle}</Slot>
              </div>
            </If>
            <div className={vc([{ 'hidden': size === 'large' && !description && !slots.description }])}>
              <div className={vc([
                { 'truncate': singleLine },
                {
                  'hover:animate-[leftMove_10s_linear_infinite] hover:overflow-visible cursor-pointer':
                    singleLine && scrolling
                }
              ])}>
                <Slot name="description" slots={props.slots}>{description}</Slot>
              </div>
            </div>
            <If v-if={size === 'large' && slots.default}>
              <div className='pt-2'>
                <Slot slots={props.slots}></Slot>
              </div>
            </If>
          </div>
        </If>
        <If v-if={!closeText && closable}>
          <IconClose
            className="h-4 w-4 mt-1 cursor-pointer fill-color-text-primary opacity-70"
            onClick={close}
          />
        </If>
        <If v-if={closeText && closable}>
          <span onClick={close} className='leading-6 text-sm cursor-pointer'>{closeText}</span>
        </If>
      </div>
    </If>
  </div>)
}
