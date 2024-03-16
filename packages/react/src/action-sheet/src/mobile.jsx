import { renderless, api } from '@opentiny/vue-renderless/action-sheet/vue'
import { vc, If, Slot, useSetup, useVm, $props } from '@opentiny/react-common'
import '@opentiny/vue-theme-mobile/action-sheet/index.less'
import { useRef } from 'react'

export default function actionSheet(props) {
  const {
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
  const { ref, current: vm, parent } = useVm()

  const { state, hide, selectOption, t } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    doms: [scrollMenu]
  })
  return (
    <div
      ref={ref}
      className="tiny-mobile-action-sheet"
      v-show="visible"
      onClick={() => hide}
      style={{ display: visible ? 'block' : 'none' }}>
      <If v-if={!contentPosition}>
        <div className="tiny-mobile-action-sheet__mask" style={state.sheetMaskStyle}></div>
      </If>
      <div
        className={vc([
          'tiny-mobile-action-sheet__content',
          state.toggle ? 'is-toggle' : '',
          contentPosition ? '' : 'is-not-content'
        ])}
        style={[state.sheetContentStyle]}
        ref={scrollMenu}
        v-ref="scrollMenu">
        <div className={vc(['tiny-mobile-action-sheet__menu', ellipsis ? 'is-ellipsis' : ''])}>
          {menus.map((item, index) => (
            <div
              className={vc([
                'tiny-mobile-action-sheet__item',
                item.warn ? 'is-warn' : '',
                item[valueField] === modelValue ? 'is-active' : ''
              ])}
              style={state.contentStyle}
              key={index}
              onClick={() => selectOption(item, index)}>
              <Slot name="item" item={item} slots={props.slots}>
                {item[textField]}
              </Slot>
            </div>
          ))}
        </div>
      </div>
      <div className="tiny-mobile-action-sheet__action" v-if="contentPosition">
        <Slot name="action" slots={props.slots}>
          <div className="tiny-mobile-action-sheet__cancel" onClick={() => hide}>
            {t('ui.actionSheet.cancel')}
          </div>
        </Slot>
      </div>
    </div>
  )
}
