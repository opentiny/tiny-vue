import renderless from '@opentiny/vue-renderless/button/react'
import { useSetup } from '@opentiny/react-common'
import { IconLoading } from '@opentiny/react-icon'
import '@opentiny/vue-theme/button/index.less'

export default function Button(props) {
  const {
    children,
    text,
    loading,
    autofocus,
    round,
    circle,
    icon: Icon,
    size,
    nativeType = 'button',
  } = props

  const {
    handleClick,
    state,
    tabindex,
    type,
    $attrs
  } = useSetup({
    props,
    renderless
  })

  const className = [
    'tiny-button',
    type ? 'tiny-button--' + type : '',
    size ? 'tiny-button--' + size : '',
    state.buttonDisabled ? 'is-disabled' : '',
    loading ? 'is-loading' : '',
    state.plain ? 'is-plain' : '',
    round ? 'is-round' : '',
    circle ? 'is-circle' : '',
    (Icon && !loading && (text || children)) ? 'is-icon' : '',
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
      { loading ? <IconLoading className="tiny-icon-loading tiny-svg-size" /> : ''}
      { (Icon && !loading) ? <Icon className={ (text || children) ? 'is-text' : '' }/> : '' }
      <span>{children || text}</span>
    </button>
  )
}
