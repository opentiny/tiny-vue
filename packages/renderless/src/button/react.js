import { handleClick, clearTimer } from './index'

export const api = ['state', 'handleClick']

export function renderless(
  props,
  { useReactive, useEffect, computed },
  { emit },
  // extendOptions
) {
  // todo: 性能优化,每次 disabled 改变会导致2次渲染
  const state = useReactive({
    timer: null,
    disabled: props.disabled,
    plain: props.plain,
    formDisabled: false,
    buttonDisabled: computed(() => state.disabled || props.disabled || state.formDisabled)
  })

  useEffect(() => {
    state.disabled = !!props.disabled
  }, [props.disabled])

  const api = {
    state,
    clearTimer: clearTimer(state),
    handleClick: handleClick({ emit, props, state })
  }

  return api
}
