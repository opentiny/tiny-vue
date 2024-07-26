import Button from '@opentiny/react-button'
import { renderless, api } from '@opentiny/vue-renderless/modal/vue'
import {
  IconHelpSolid,
  IconSuccess,
  IconError,
  IconInfoSolid,
  IconLoading,
  IconWarning,
  IconClose,
  IconMinscreenLeft,
  IconFullscreenLeft
} from '@opentiny/react-icon'
import '@opentiny/vue-theme/modal/index.less'
import { vc, If, Component, Slot, useVm, useSetup } from '@opentiny/react-common'
import { useImperativeHandle, forwardRef } from 'react'

const $constants = {
  MODAL_STATUS: {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    LOADING: 'loading'
  },
  NODAL_TYPE: {
    ALERT: 'alert',
    CONFIRM: 'confirm',
    MESSAGE: 'message'
  },
  STATUS_MAPPING_CLASSS: {
    INFO: 'tiny-modal-svg__info',
    SUCCESS: 'tiny-modal-svg__success',
    WARNING: 'tiny-modal-svg__warning',
    ERROR: 'tiny-modal-svg__error',
    LOADING: 'tiny-modal-svg__refresh roll'
  },
  PC_SCROLL_LOCK_CLASS: 'tiny-dialog-box__scroll-lock',
  MOBILE_FIRST_SCROLL_LOCK_CLASS: 'tiny-modal-lockscroll',
  Mode: 'pc',
  SCROLL_LOCK_CLASS(mode) {
    return mode === this.Mode ? this.PC_SCROLL_LOCK_CLASS : this.MOBILE_FIRST_SCROLL_LOCK_CLASS
  }
}

export default forwardRef(function Modal(props, fRef) {
  const {
    animat = true,
    beforeClose,
    duration = 3000,
    escClosable,
    events,
    fullscreen,
    height,
    id,
    isFormReset = true,
    lockScroll,
    lockView = true,
    marginSize = 10,
    mask = true,
    maskClosable,
    message,
    minHeight,
    minWidth,
    modelValue,
    resize,
    showFooter,
    showHeader,
    status = '',
    title,
    top = 80,
    type = 'alert',
    vSize,
    width,
    zIndex,
    showClose,
    messageClosable,
    confirmContent,
    cancelContent,
    confirmBtnProps,
    cancelBtnProps,
    footerDragable,
    tiny_theme,
    slots = {},
    _constants = $constants
  } = props

  const defaultProps = Object.assign(
    {
      _constants,
      animat,
      isFormReset,
      duration,
      marginSize,
      lockView,
      mask,
      status,
      top,
      type,
      $listeners: {
        hide: events.hide
      }
    },
    props
  )

  const { current: vm, parent } = useVm()

  const {
    state,
    scopedSlots,
    confirmEvent,
    cancelEvent,
    closeEvent,
    toggleZoomEvent,
    mouseEnterEvent,
    mouseLeaveEvent,
    selfClickEvent,
    mousedownEvent,
    dragEvent,
    open,
    _: { ref }
  } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    parent
  })

  useImperativeHandle(
    fRef,
    () => {
      return {
        open
      }
    },
    [open]
  )

  const STATUS_MAPPING_COMPONENT = {
    QUESTION: IconHelpSolid,
    INFO: IconInfoSolid,
    SUCCESS: IconSuccess,
    WARNING: IconWarning,
    ERROR: IconError,
    LOADING: IconLoading
  }

  const constants = $constants

  const confirmButtonProps = typeof confirmBtnProps === 'object' ? confirmBtnProps : {}
  const cancelButtonProps = typeof cancelBtnProps === 'object' ? cancelBtnProps : {}
  const confirmButtonText = confirmContent || confirmBtnProps?.text || 'Confirm' // Replace with t() for localization
  const cancelButtonText = cancelContent || cancelBtnProps?.text || 'Cancel' // Replace with t() for localization

  return (
    <div
      className={vc([
        'tiny-modal',
        'tiny-modal__wrapper',
        `type__${type}`,
        {
          [`size__${vSize}`]: vSize,
          [`status__${status}`]: typeof status === 'string',
          'is__animat': animat,
          'lock__scroll': lockScroll,
          'lock__view': lockView,
          'is__mask': mask,
          'is__maximize': state.zoomLocat,
          'is__visible': state.contentVisible,
          'active': state.visible
        }
      ])}
      style={{ zIndex: state.modalZindex, top: state.modalTop ? `${state.modalTop}px` : null }}
      onClick={selfClickEvent}
      ref={ref}>
      <div className="tiny-modal__box" style={state.boxStyle} v-ref="modalBox">
        <If v-if={showHeader}>
          <div className="tiny-modal__header" onMouseDown={mousedownEvent}>
            <If v-if={status && state.theme === 'saas'}>
              <div className="tiny-modal__status-wrapper">
                <Component
                  is={STATUS_MAPPING_COMPONENT[status.toUpperCase()]}
                  className={[constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]}
                />
              </div>
            </If>
            <span className="tiny-modal__title">{title}</span>
            <If v-if={resize}>
              <Component
                is={state.zoomLocat ? IconMinscreenLeft : IconFullscreenLeft}
                className="tiny-modal__zoom-btn trigger__btn"
                onClick={toggleZoomEvent}
              />
            </If>
            <IconClose className="tiny-modal__close-btn trigger__btn" onClick={closeEvent} />
          </div>
        </If>
        <div className="tiny-modal__body">
          <If v-if={status && (state.theme !== 'saas' || type === 'message')}>
            <div className="tiny-modal__status-wrapper">
              <Component
                is={STATUS_MAPPING_COMPONENT[status.toUpperCase()]}
                className={[constants.STATUS_MAPPING_CLASSS[status.toUpperCase()]]}
              />
            </div>
          </If>
          <div className="tiny-modal__content">
            <Slot>{scopedSlots?.default || slots?.default || <div className="tiny-modal__text">{message}</div>}</Slot>
          </div>
          <If v-if={messageClosable}>
            <div className="tiny-modal__close-wrapper">
              <IconClose className="tiny-modal__close-btn" onClick={closeEvent} />
            </div>
          </If>
        </div>
        <If v-if={showFooter}>
          <div className="tiny-modal__footer" onMouseDown={footerDragable ? mousedownEvent : undefined}>
            <Slot name="footer" slots={slots}>
              {/* Fallback content */}
              <If v-if={type === 'confirm'}>
                <Button onClick={cancelEvent}>{cancelContent}</Button>
              </If>
              <Button type="primary" onClick={confirmEvent}>
                {confirmContent}
              </Button>
            </Slot>
          </div>
        </If>
      </div>
    </div>
  )
})
