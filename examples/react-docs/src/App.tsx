import { Button, Alert, Switch, Badge } from '@opentiny/react'

// 在这里导入组件，进行 api 调试
function App() {

  return (
    <div
      className='app'
    >
      <Button>点击按钮</Button>
      <Alert description='默认提示组件'/>
      <Switch/>
      <Badge value={10}>待办</Badge>
    </div>
  )
}

export default App
