import TinySwitch from '@opentiny/vue-switch'
import { createMutable } from 'solid-js/store'

export default function () {
  const state = createMutable({
    value: true
  })

  const switchSlots = {
    open: <span>打开</span>,
    close: <span>关闭</span>
  }

  return (
    <div className="switch">
      <TinySwitch></TinySwitch>
      <br />
      <br />
      <TinySwitch modelValue={state.value}></TinySwitch>
      <br />
      <br />
      <TinySwitch modelValue={state.value} slots={switchSlots}></TinySwitch>
    </div>
  )
}
