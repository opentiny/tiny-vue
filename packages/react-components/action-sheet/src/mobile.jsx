import { renderless, api } from '@opentiny/vue-renderless/action-sheet/vue'
import '@opentiny/vue-theme/action-sheet/index.less'
import { vc, Slot, useSetup, useVm, $props } from '@opentiny/react-common'
import { useRef } from 'react'

export default function actionSheet(props) {
  const {
    menus,
    modelValue,
    visible,
    ellipsis,
    contentPosition,
    contentStyle,
    height,
    valueField,
    textField,
    contentClass
  } = props
  const defaultProps = {
    ...$props,
    ...props,
    menus,
    modelValue,
    visible,
    ellipsis,
    contentPosition,
    contentStyle,
    height,
    valueField,
    textField,
    contentClass
  }
  const { ref, current: vm, parent } = useVm()
  const scrollMenu = useRef()
  const { state, hide, selectOption } = useSetup({
    props: defaultProps,
    renderless,
    api,
    constants: _constants,
    vm,
    parent,
    doms: [scrollMenu]
  })
  return (
    <div style={{ display: visible ? 'block' : 'none' }} onClick={hide} className="tiny-mobile-action-sheet">
      <div
        style={state.sheetMaskStyle}
        style={{ display: !contentPosition ? 'block' : 'none' }}
        className="tiny-mobile-action-sheet__mask"></div>

      <div
        style={[state.sheetContentStyle]}
        ref={scrollMenu}
        v-ref="scrollMenu"
        className={vc([
          'tiny-mobile-action-sheet__content',
          state.toggle ? 'is-toggle' : '',
          contentPosition ? '' : 'is-not-content'
        ])}>
        <div className={vc(['tiny-mobile-action-sheet__menu', ellipsis ? 'is-ellipsis' : ''])}>
          {menus.map((item, index) => (
            <div
              style={state.contentStyle}
              key={index}
              onClick={selectOption(item, index)}
              className={vc([
                'tiny-mobile-action-sheet__item',
                item.warn ? 'is-warn' : '',
                item[valueField] === modelValue ? 'is-active' : ''
              ])}>
              <Slot name="item" item={item} parent_children={props.children} slots={props.slots}>
                {item[textField]}
              </Slot>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: contentPosition ? 'block' : 'none' }} className="tiny-mobile-action-sheet__action">
        <Slot name="action" parent_children={props.children} slots={props.slots}>
          <div onClick={hide} className="tiny-mobile-action-sheet__cancel">
            {t('ui.actionSheet.cancel')}
          </div>
        </Slot>
      </div>
    </div>
  )
}
