import { renderless, api } from '@opentiny/vue-renderless/drawer/vue'
import { vc, If, Slot, useSetup, useVm, Transition, $props } from '@opentiny/react-common'
import '@opentiny/vue-theme/drawer/index.less'
import { IconClose, IconHelpCircle } from '@opentiny/react-icon'
import Button from '@opentiny/react-button'
import Tooltip from '@opentiny/react-tooltip'
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
    ...props,
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

  const { state, handleClose, t } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    doms: [maskThis, drawerBox, dragBar, header, body, footer],
    parent
  })
  const listeners1 = {
    click() {
      handleClose('cancle')
    }
  }
  const listeners2 = {
    click() {
      handleClose('confirm')
    }
  }
  return (
    <div data-tag="tiny-drawer" className="tiny-drawer" ref={ref}>
      {/* <!-- mask --> */}
      <Transition
        name="drawer-fade"
        v-if={mask && visible}
        onClick={() => handleClose('mask')}
        className={vc(['tiny-drawer__mask', { 'show-bg-color': state.toggle }])}>
        <div ref={maskThis} v-ref="mask" style={{ zIndex }}></div>
      </Transition>

      {/* <!-- main --> */}
      <Transition
        name={`drawer-slide-${placement}`}
        className={vc([
          'tiny-drawer__main',
          {
            'is-left': placement === 'left',
            'is-right': placement === 'right',
            'is-top': placement === 'top',
            'is-bottom': placement === 'bottom',
            'drag-effects': !state.dragEvent.isDrag,
            'toggle': state.toggle
          },
          'tiny-drawer-main',
          customClass
        ])}>
        <div
          data-tag="tiny-drawer-main"
          ref={drawerBox}
          v-ref="drawerBox"
          style={{
            width: ['left', 'right'].includes(placement) ? state.computedWidth : null,
            zIndex,
            display: visible ? 'block' : 'none'
          }}>
          <If v-if={dragable}>
            <div
              data-tag="drawer-drag-bar"
              ref={dragBar}
              v-ref="dragBar"
              className={vc(['tiny-drawer__drag-bar'])}></div>
          </If>

          <div className="tiny-drawer__box">
            {/* <!-- header --> */}
            <If v-if={showHeader}>
              <div data-tag="drawer-header" ref={header} v-ref="header" className="tiny-drawer__header-wrapper">
                <Slot name="header" slots={props.slots}>
                  <div className="tiny-drawer__header">
                    <div className="tiny-drawer__header-left">
                      <If v-if={title}>
                        <div className="tiny-drawer__title">{title}</div>
                      </If>
                      <If v-if={tipsProps}>
                        <Tooltip {...tipsProps}>
                          <IconHelpCircle className="tiny-drawer__help-icon"></IconHelpCircle>
                        </Tooltip>
                      </If>
                    </div>
                    <div className="tiny-drawer__header-right">
                      <Slot name="header-right" slots={props.slots}></Slot>
                    </div>
                  </div>
                </Slot>
                {showClose && (
                  <button
                    type="button"
                    className="tiny-drawer__headerbtn"
                    aria-label="Close"
                    onClick={() => handleClose('close')}>
                    <IconClose className="tiny-svg-size tiny-drawer__close" />
                  </button>
                )}
              </div>
            </If>

            {/* <!-- body --> */}
            <div
              data-tag="drawer-body"
              ref={body}
              v-ref="body"
              className={vc(['tiny-drawer__body', { 'flex flex-col': flex }, 'drawer-body'])}>
              <Slot slots={props.slots} parent_children={props.children}></Slot>
            </div>

            {/* <!-- footer --> */}
            <If v-if={showFooter}>
              <div data-tag="drawer-footer" ref={footer} v-ref="footer" className="tiny-drawer__footer">
                <Slot name="footer" slots={props.slots}>
                  <Button
                    type="primary"
                    className={vc(['tiny-drawer__confirm-btn', { reverse: state.btnOrderReversed }])}
                    listeners={listeners2}>
                    {t('ui.button.confirm')}
                  </Button>
                  <Button
                    plain
                    className={vc(['tiny-drawer__cancel-btn', { reverse: state.btnOrderReversed }])}
                    listeners={listeners1}>
                    {t('ui.button.cancel')}
                  </Button>
                </Slot>
              </div>
            </If>
          </div>
        </div>
      </Transition>
    </div>
  )
}
