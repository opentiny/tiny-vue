import { renderless } from '@opentiny/vue-renderless/button/vue'
import { useSetup } from '@opentiny/solid-common'
import '@opentiny/vue-theme/button/index.less'

export default function Button(props) {
  const { children, text, autofocus, round, circle, icon: Icon, size, nativeType = 'button' } = props
  const { handleClick, state, tabindex, type, $attrs } = useSetup({
    props: { nativeType: 'button', resetTime: 1000, ...props },
    renderless
  })

  return (
    <button
      className={[
        'tiny-button',
        type ? 'tiny-button--' + type : '',
        size ? 'tiny-button--' + size : '',
        state().disabled ? 'is-disabled' : '',
        state().plain ? 'is-plain' : '',
        round ? 'is-round' : '',
        circle ? 'is-circle' : ''
      ]
        .join(' ')
        .trim()}
      onClick={handleClick}
      disabled={state().disabled}
      autoFocus={autofocus}
      type={nativeType}
      tabIndex={tabindex}
      {...$attrs}>
      {Icon ? <Icon className={text || children ? 'is-text' : ''} /> : ''}
      <span>{children || text}</span>
    </button>
  )
}
