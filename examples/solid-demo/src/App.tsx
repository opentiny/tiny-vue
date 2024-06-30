import { createMutable } from 'solid-js/store'
import { Button, Alert } from '@opensolidtiny/solid'
import { IconActivation } from '@opensolidtiny/solid-icon'

// 在这里导入组件，进行 api 调试
function App() {
  const state = createMutable({
    value: 1
  })
  const hanleClick = () => {
    state.value++
  }

  const alertSlots = {
    title: <span>插槽标题</span>
  }

  return (
    <div className="app">
      <h1>{state.value}</h1>
      <Button onClick={hanleClick}>点击按钮</Button>
      <Button type="primary">点击按钮</Button>
      <Button type="success">点击按 钮</Button>
      <Button type="danger">点击按钮</Button>
      <Button type="danger" text={'Text'}></Button>
      <Alert description="type 为默认值 info"></Alert>
      <Alert type="warning" description="type 为默认值 info" size="large" slots={alertSlots}></Alert>
      <br />
      <br />
      <IconActivation style={{ width: '48px', height: '48px' }}></IconActivation>
    </div>
  )
}

export default App
