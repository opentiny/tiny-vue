import { renderless, api } from '@opentiny/vue-renderless/tag/vue'
import { vc, useSetup, useVm, $props } from '@opentiny/react-common'
import { IconClose } from '@opentiny/react-icon'

export default function Alert(props) {
  const {
    hit,
    text,
    type,
    theme,
    size,
    color,
    closable,
    operable,
    disabled,
    selectable,
    customClass = '',
    effect = 'light',

    beforeDelete,
    value,
    mini = false,
    maxWidth = null
  } = props
  const defaultProps = {
    ...$props,
    hit,
    text,
    type,
    theme,
    size,
    color,
    closable,
    operable,
    disabled,
    selectable,
    customClass,
    effect,
    beforeDelete,
    value,
    mini,
    maxWidth
  }

  const { ref, current: vm, parent } = useVm()

  const { state, handleClose, handleClick } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  })
  const classes = [
    'tiny-tag',
    type ? `tiny-tag--${type}` : '',
    size ? `tiny-tag--${size}` : '',
    effect ? `tiny-tag--${effect}` : '',
    hit && 'is-hit',
    disabled ? 'is-disabled' : ''
  ]
  const tagElement =
    value || props.children ? (
      <span data-tag="tiny-tag" className={vc(classes)} style={{ backgroundColor: color }} onClick={handleClick}>
        {value ? <span>{value}</span> : props.children}
        {closable && <IconClose className="tiny-svg-size tiny-tag__close " onClick={handleClose}></IconClose>}
      </span>
    ) : (
      <span></span>
    )

  return state.show && tagElement
}
