import { change, draw } from '.'

export const api = ['state']

export const renderless = (props, { reactive, watch, onMounted }, { vm, emit }, { QRCode }) => {
  const api: any = {}
  const state = reactive({
    sizeStr: '',
    iconSizeStr: '',
    iconBackgroudColor: ''
  })

  Object.assign(api, {
    state,
    draw: draw({ props, state, vm, QRCode }),
    change: change(emit)
  })

  onMounted(() => {
    api.draw()
  })

  watch(
    () => [props.level, props.value, props.color, props.style, props.size, props.icon, props.iconSize, props.bordered],
    () => {
      api.draw()
      api.change()
    },
    { deep: true }
    // 添加深度监听，防止响应式失效
  )

  return api
}
