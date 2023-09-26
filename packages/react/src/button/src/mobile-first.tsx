import { renderless, api } from '@opentiny/vue-renderless/button/vue'
import { useSetup, vc, If, Component, Slot, useVm } from '@opentiny/react-common'
import { IconLoading } from '@opentiny/react-icon'
import { classes } from './token'

const define_props = [
  'children',
  'text',
  'loading',
  'autofocus',
  'plain',
  'round',
  'circle',
  'icon',
  'size',
  'type',
  'nativeType',
  'resetTime',
  /^on/
]

export default function Button(props) {
  const {
    loading,
    autofocus,
    size,
    icon,
    round,
    circle,
    href,
    buttonClass,
    tabindex,
    text,
    type,
    nativeType = 'button',
    resetTime = 1000
  } = props

  const defaultProps = Object.assign({
    nativeType,
    resetTime,
  }, props)

  const {
    ref,
    parent,
    current: vm
  } = useVm()

  const {
    handleClick,
    state,
    a,
    m,
    gcls,
  } = useSetup({
    api,
    renderless,
    props: defaultProps,
    classes,
    ref,
    parent,
    vm
  })

  const $attrs = a(props, define_props, false)

  return (
    <button
      data-tag="tiny-button"
      onClick={handleClick}
      disabled={state.buttonDisabled || loading}
      autoFocus={autofocus}
      type={nativeType}
      className={m(
        gcls('button'),
        gcls(`size-${size || 'default'}`),
        gcls(
          `type-${type || 'default'}${icon ? '-icon' : state.plain ? '-plain' : ''}
          ${state.buttonDisabled ? '-disabled' : ''}`
        ),
        gcls(round ? 'is-round' : 'no-round'),
        gcls(circle ? 'is-circle' : 'no-circle'),
        gcls({ 'is-border': circle || !(type === 'text' || icon) }),
        gcls({ 'button-link': href }),
        buttonClass
      )}
      tabIndex={tabindex}
      {...a($attrs, ['class', 'style'], true)}
    >
      <If v-if={loading}>
        <IconLoading className={gcls('loading-svg')} />
      </If>
      <Component
        v-if={icon && !loading}
        is={icon}
        className={vc([
          gcls('button-icon'),
          gcls(`button-icon-${state.buttonDisabled ? 'disabled' : 'default'}`)
        ])}
      />
      <Slot slots={props.slots} parent_children={props.children}>
        <span>{text}</span>
      </Slot>
    </button>
  )
}
