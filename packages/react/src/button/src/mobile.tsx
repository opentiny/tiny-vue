import { renderless, api } from '@opentiny/vue-renderless/button/vue'
import { useSetup, vc, If, Component, Slot, useVm } from '@opentiny/react-common'
import { IconLoading } from '@opentiny/react-icon'
import '@opentiny/vue-theme-mobile/button/index.less'

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
    text,
    loading,
    round,
    icon,
    size,
    type = 'default',
    nativeType = 'button',
    resetTime = 1000
  } = props

  const defaultProps = Object.assign({
    type,
    nativeType,
    resetTime
  }, props)

  const {
    ref,
    parent,
    current: vm
  } = useVm()

  const {
    handleClick,
    state,
    a
  } = useSetup({
    props: defaultProps,
    renderless,
    api,
    parent,
    vm
  })

  const $attrs = a(props, define_props, false)

  return (
    <button
      ref={ref}
      onClick={handleClick}
      disabled={state.buttonDisabled || loading}
      type={nativeType}
      className={vc([
        'tiny-mobile-button',
        type ? 'tiny-mobile-button--' + type : '',
        size ? 'tiny-mobile-button--' + size : '',
        {
          'is-disabled': state.buttonDisabled,
          'is-loading': loading,
          'is-plain': state.plain,
          'is-round': round
        }
      ])}
      {...a($attrs, ['class', 'style'], true)}
    >
      <If v-if={loading}>
        <IconLoading class='tiny-icon-loading' />
      </If>
      <Component v-if={icon && !loading} is={icon} class='tiny-icon is-icon' />
      <Slot slots={props.slots} parent_children={props.children}>
        <span style={{ marginLeft: text && (icon || loading) ? '4px' : 0 }}>{ text }</span>
      </Slot>
    </button>
  )
}
