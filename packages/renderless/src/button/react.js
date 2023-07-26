import { handleClick, clearTimer } from './index'

export const api = ['state', 'handleClick']

export default function renderless(
  props,
  { useReactive, useEffect },
  { emit },
  // extendOptions
) {
  const state = useReactive({
    timer: null,
    disabled: !!props.disabled,
    plain: props.plain,
    formDisabled: false,
    // () => state.disabled 这种形式的 state 拿到的不是当前的 state 对象，而是合并之前的
    // 具有滞后性，所以从箭头函数参数里取当前的 state 对象
    buttonDisabled: (curState) => curState.disabled || !!props.disabled || curState.formDisabled
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
