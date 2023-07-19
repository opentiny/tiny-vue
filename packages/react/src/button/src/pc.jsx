import useRenderLess from '@opentiny/vue-renderless/button/react'
import '@opentiny/vue-theme/button/index.less'

export default function Button(props) {
  const {
    children,
    text
  } = props

  const {
    handleClick,
    state,
    loading,
    autofocus,
    nativeType,
    tabindex,
    type,
    size,
    round,
    circle,
    icon,
    $attrs
  } = useRenderLess({ props })

  const className = [
    'tiny-button',
    type ? 'tiny-button--' + type : '',
    size ? 'tiny-button--' + size : '',
    state.buttonDisabled ? 'is-disabled' : '',
    loading ? 'is-loading' : '',
    state.plain ? 'is-plain' : '',
    round ? 'is-round' : '',
    circle ? 'is-circle' : '',
    (icon && !loading && (text || props.children)) ? 'is-icon' : '',
  ].join(' ').trim()

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={state.buttonDisabled || loading}
      autoFocus={autofocus}
      type={nativeType}
      tabIndex={tabindex}
      {...$attrs}
    >
      {/* todo: 加载图标 */}
      {/* todo: 按钮图标 */}
      <span>{children || text}</span>
    </button>
  )
}
