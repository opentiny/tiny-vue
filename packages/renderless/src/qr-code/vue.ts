import { change, draw } from '.'

export const api = ['state']

export const renderless = (props, { reactive, watch, onMounted }, { vm, emit }, { QRCode }) => {
  const api = {}
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
    () => [props.level, props.value],
    () => {
      api.draw()
      api.change()
    }
  )

  return api
}
