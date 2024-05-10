import { renderless, api } from '@opentiny/vue-renderless/drawer/vue'
import { vc, If, Slot, useSetup, useVm, $props } from '@opentiny/react-common'
import '@opentiny/vue-theme/drawer/index.less'
import { IconClose } from '@opentiny/react-icon'
import Button from '@opentiny/react-button'
import { useRef } from 'react'

const $constants = {
  SCROLL_LOCK_CLASS(mode) {
    const scrollLockClasses = {
      'mobile-first': 'overflow-hidden',
      'pc': 'tiny-popup-parent--hidden tiny-dialog-box__scroll-lock'
    }
    return scrollLockClasses[mode] || ''
  },
  DEFAULT_WIDTH: '500px'
}
export default function Drawer(props) {
  const {
    _constants = $constants,
    visible = false,
    customClass,
    placement = 'right',
    width,
    title,
    showClose = true,
    showHeader = true,
    showFooter = false,
    mask = true,
    maskClosable = true,
    dragable,
    lockScroll = true,
    flex = false,
    zIndex = 2000,
    beforeClose,
    tipsProps
  } = props
  const defaultProps = {
    ...$props,
    _constants,
    visible,
    customClass,
    placement,
    width,
    title,
    showClose,
    showHeader,
    showFooter,
    mask,
    maskClosable,
    dragable,
    lockScroll,
    flex,
    zIndex,
    beforeClose,
    tipsProps
  }
  const maskThis = useRef()
  const drawerBox = useRef()
  const dragBar = useRef()
  const header = useRef()
  const body = useRef()
  const footer = useRef()
  const { ref, current: vm, parent } = useVm()

  const { state, handleClose, t, m } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    doms: [maskThis, drawerBox, dragBar, header, body, footer],
    parent
  })
  return (
    <div ref={ref} data-tag="tiny-drawer" className="text-sm" style={{ didsplay: visible ? 'block' : 'none' }}>
      {/* <!-- mask --> */}
      <If v-if={mask}>
        <div
          ref={maskThis}
          className={m(
            'fixed z-50 left-0 right-0 top-0 bottom-0 w-full h-full transition-opacity ease-linear duration-200',
            {
              'bg-color-bg-7': state.toggle
            }
          )}
          onClick={handleClose('mask')}></div>
      </If>

      {/* <!-- main --> */}
      <div
        data-tag="tiny-drawer-main"
        ref={drawerBox}
        v-ref="drawerBox"
        className={m(
          'fixed w-full max-w-full flex flex-col bg-color-bg-1 z-50 shadow-sm border-color-border-separator',
          { 'transition-all ease-linear duration-200': !state.dragEvent.isDrag },
          { 'h-full': ['left', 'right'].includes(placement) },
          { 'max-h-full': ['top', 'bottom'].includes(placement) },
          { 'left-0 bottom-0 translate-y-full border-t-0.5 rounded-t-lg': placement === 'bottom' },
          { 'left-0 top-0 -translate-y-full border-b-0.5 rounded-b-lg': placement === 'top' },
          { 'translate-y-0': ['top', 'bottom'].includes(placement) && state.toggle },
          { 'left-0 top-0 -translate-x-full border-r-0.5 rounded-r-lg': placement === 'left' },
          { 'right-0 top-0 translate-x-full border-l-0.5 rounded-l-lg': placement === 'right' },
          { 'translate-x-0': ['left', 'right'].includes(placement) && state.toggle },
          customClass
        )}
        style={{ width: ['left', 'right'].includes(placement) ? state.computedWidth : null }}>
        <If v-if={dragable}>
          <div
            data-tag="drawer-drag-bar"
            ref={dragBar}
            v-ref="dragBar"
            className={vc([
              'h-full absolute top-0 w-2 cursor-e-resize',
              placement === 'left' ? '-right-1' : '-left-1'
            ])}></div>
        </If>

        <div className={vc(['flex-auto flex-col flex max-h-full overflow-hidden'])}>
          {/* <!-- header --> */}
          <If v-if={showHeader}>
            <div
              data-tag="drawer-header"
              ref={header}
              v-ref="dragBar"
              className="flex-none flex leading-6 p-4 text-base items-center">
              <Slot name="header" slots={props.slots}>
                <If v-if={title}>
                  {' '}
                  <div className="max-w-[80%] pr-4 text-left truncate">{title}</div>
                </If>
                <div className="flex-1 flex items-center justify-end">
                  <Slot name="header-right" slots={props.slots}>
                    <IconClose custom-className="h-5 w-5 cursor-pointer" onClick={handleClose('close')}></IconClose>
                  </Slot>
                </div>
              </Slot>
            </div>
          </If>

          {/* <!-- body --> */}
          <div
            data-tag="drawer-body"
            ref={body}
            v-ref="body"
            className={vc(['flex-auto overflow-auto', { 'flex flex-col': flex }])}>
            <Slot slots={props.slots} parent-children={props.children}></Slot>
          </div>
          {/* <!-- footer --> */}
          <If v-if={showFooter}>
            <div data-tag="drawer-footer" ref={footer} v-ref="footer" className="px-4 py-3">
              <div className="flex-1 text-right">
                <Slot name="footer" slots={props.slots}>
                  <Button tiny_mode="mobile-first" onClick={handleClose('cancel')}>
                    {t('ui.button.cancel')}
                  </Button>
                  <Button tiny_mode="mobile-first" className="ml-2" type="primary" onClick={handleClose('confirm')}>
                    {t('ui.button.confirm')}
                  </Button>
                </Slot>
              </div>
            </div>
          </If>
        </div>
      </div>
    </div>
  )
}
