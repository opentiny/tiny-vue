import { renderless, api } from '@opentiny/vue-renderless/tag/vue'
import { vc, useSetup, useVm, $props } from '@opentiny/react-common'
import { IconClose } from '@opentiny/react-icon'
import { classes } from './token'

export default function Tag(props) {
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

  const { state, handleClose, handleClick, m, gcls } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    classes,
    parent
  })

  const sizeMe = selectable ? 'medium' : size || 'small'
  const typeMe = selectable ? 'info' : type || 'info'
  const effectMe = selectable ? 'light' : effect || 'light'
  const closableMe = selectable ? false : closable
  const operableMe = selectable ? false : operable

  const classesMe = m(
    'text-xs inline-flex items-center rounded box-border border-0.5 sm:border mr-2',
    effectMe === 'plain' || hit ? gcls(`${typeMe}-border`) : 'border-transparent',
    gcls(`${effectMe}-${typeMe}`),
    gcls(sizeMe),
    { hidden: !state.show },
    selectable ? (state.selected ? gcls('selectable-selected') : gcls('selectable-unselect')) : '',
    selectable && disabled ? gcls('tag-disabled') : '',
    operableMe ? gcls('tag-operable') : '',
    customClass
  )
  const tagElement =
    value || (props.slots.default && props.slots.default()) ? (
      <span data-tag="tiny-tag" class={classesMe} style={{ backgroundColor: color }} onClick={handleClick}>
        {value ? <span>{value}</span> : props.slots.default && props.slots.default()}
        {closableMe && (
          <IconClose
            className={vc([
              'w-3 h-3 ml-1 cursor-pointer',
              effect === 'dark' ? gcls('fill-dark') : gcls(`fill-light-${type}`)
            ])}
            onClick={handleClose}></IconClose>
        )}
      </span>
    ) : (
      <span></span>
    )

  return tagElement
}
