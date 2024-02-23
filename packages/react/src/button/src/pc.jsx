import { renderless, api } from '@opentiny/vue-renderless/button/vue'
import { useSetup, If, Component, vc, useVm, $props } from '@opentiny/react-common'
import { IconLoading } from '@opentiny/react-icon'
import '@opentiny/vue-theme/button/index.less'

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
    children,
    text,
    loading,
    autofocus,
    round,
    circle,
    icon,
    size,
    tabindex,
    type = 'default',
    nativeType = 'button',
    resetTime = 1000
  } = props

  const defaultProps = {
    ...$props,
    ...props,
    type,
    nativeType,
    resetTime
  }

  const { ref, parent, current: vm } = useVm()

  const { handleClick, state, a } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent
  })
  const $attrs = a(props, define_props, false)
  return (
    <button
      ref={ref}
      className={vc([
        'tiny-button',
        type ? 'tiny-button--' + type : '',
        size ? 'tiny-button--' + size : '',
        {
          'is-disabled': state.buttonDisabled,
          'is-loading': loading,
          'is-plain': state.plain,
          'is-round': round,
          'is-circle': circle,
          'is-icon': icon && !loading && (text || $slots.default),
          'is-only-icon': icon && !loading && !(text || $slots.default)
        },
        props.classme && props.classme.split(' ')
      ])}
      onClick={handleClick}
      disabled={state.buttonDisabled || loading}
      autoFocus={autofocus}
      type={nativeType}
      tabIndex={tabindex}
      {...a($attrs, ['class', 'style'], true)}>
      <If v-if={loading}>
        <IconLoading className="tiny-icon-loading tiny-svg-size" />
      </If>
      <Component v-if={icon && !loading} is={icon} className={text || children ? 'is-text' : ''} />
      <span>{children || text}</span>
    </button>
  )
}
