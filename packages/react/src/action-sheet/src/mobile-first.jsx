import { renderless, api } from '@opentiny/vue-renderless/action-sheet/vue'
import { vc, If, Slot, useSetup, useVm, $props, handlePrevent } from '@opentiny/react-common'
import { IconClose } from '@opentiny/react-icon'
import Button from '@opentiny/react-button'
import Drawer from '@opentiny/react-drawer'
import { useRef } from 'react'

export default function actionSheet(props) {
  let {
    menus = [],
    modelValue,
    beforeClose,
    visible = false,
    ellipsis = false,
    height = '100%',
    valueField = 'id',
    textField = 'label',
    title,
    showHeader = true,
    showFooter = false,
    showClose = true,
    fullscreen = false,
    customClass,
    contentClass,
    type = 'normal',
    mask = true,
    maskClosabl = true,
    lockScroll = true,
    flex = true,
    contentPosition = false,
    contentStyle = {}
  } = props
  const defaultProps = {
    ...$props,
    ...props,
    menus,
    modelValue,
    beforeClose,
    visible,
    ellipsis,
    height,
    valueField,
    textField,
    title,
    showHeader,
    showFooter,
    showClose,
    fullscreen,
    customClass,
    contentClass,
    type,
    mask,
    maskClosabl,
    lockScroll,
    flex,
    contentPosition,
    contentStyle
  }
  const scrollMenu = useRef()
  const drawer = useRef()
  const header = useRef()
  const body = useRef()
  const footer = useRef()
  const { ref, current: vm, parent } = useVm()

  const { t, m, close, actionSelectOption, confirm, emit, maskClosable } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    doms: [scrollMenu, drawer, header, body, footer]
  })
  const listeners = {
    close(e) {
      visible = false
      emit('update:visible', e)
    }
  }
  return (
    <div data-tag="tiny-action-sheet" className="text-sm" ref={ref}>
      <Drawer
        ref={drawer}
        title={title}
        mask={mask}
        flex
        beforeClose={beforeClose}
        maskClosable={maskClosable}
        lockScroll={lockScroll}
        showHeader={false}
        custom-className={m(
          'rounded-t-lg',
          { 'h-full': fullscreen },
          { 'max-h-[90%]': !fullscreen },
          { 'min-h-[theme(spacing.64)]': type !== 'action' },
          { 'py-4': showHeader && type !== 'action' },
          customClass
        )}
        placement="bottom"
        visible={visible}
        listeners={listeners}>
        {/* <!-- header --> */}
        <If v-if={showHeader && type !== 'action'}>
          <div
            data-tag="action-sheet-header"
            ref={header}
            v-ref="header"
            className="flex flex-none leading-6 pb-4 px-4 text-base items-center">
            <div className="flex-1 flex items-center text-left">
              <Slot name="header-left" slots={props.slots}></Slot>
            </div>
            <div className="min-w-[50%] max-w-[80%] px-4 text-center truncate font-bold">{{ title }}</div>
            <div className="flex-1 flex items-center justify-end">
              <Slot name="header-right" slots={props.slots}>
                {showClose && <IconClose custom-className="h-5 w-5 cursor-pointer" onClick={() => close}></IconClose>}
              </Slot>
            </div>
          </div>
        </If>

        <Slot name="body-top" slots={props.slots}></Slot>
        {/* <!-- body --> */}
        <div
          data-tag="action-sheet-body"
          ref={body}
          v-ref="body"
          className={vc(['flex-auto overflow-auto scrollbar-size-0', { 'flex flex-col': flex }])}>
          {type === 'action' ? (
            <div data-tag="action-box" className="flex flex-col h-full text-center">
              <If v-if={title}>
                <div
                  data-tag="action-title"
                  className="flex-none flex items-center justify-center py-2.5 leading-5 text-sm text-color-none-hover border-b-0.5 border-color-bg-2">
                  <span className="px-4">{title}</span>
                </div>
              </If>

              <div className="flex-auto min-h-[theme(spacing.12)]">
                {menus.map((item, index) => (
                  <div
                    key={index}
                    className="flex-none flex items-center justify-center h-12 text-base border-b-0.5 border-color-bg-2 cursor-pointer"
                    onClick={(e) => handlePrevent(e, actionSelectOption, item, index)}>
                    <Slot slots={props.slots} data={item} index={index}>
                      <span className="truncate px-4">{item}</span>
                    </Slot>
                  </div>
                ))}
              </div>
              <div
                className="flex-none flex items-center justify-center h-16 text-base border-t-8 border-color-bg-2 px-4 cursor-pointer"
                onClick={(e) => handlePrevent(e, close)}>
                {t('ui.base.cancel')}
              </div>
            </div>
          ) : (
            <Slot slots={props.slots} children={props.children}></Slot>
          )}
        </div>
        <Slot name="body-bottom" slots={props.slots}></Slot>
        {/* <!-- footer --> */}
        <If v-if={showFooter}>
          <div
            data-tag="action-sheet-footer"
            ref={footer}
            v-ref="footer"
            className="flex flex-none pt-2 justify-center">
            <Slot slots={props.slots} name="footer" beforeClose={beforeClose}>
              <Button tiny_mode="mobile-first" className="flex-1 mx-4 sm:mx-0" type="primary" onClick={() => confirm}>
                {t('ui.button.confirm')}
              </Button>
            </Slot>
          </div>
        </If>
      </Drawer>
    </div>
  )
}
