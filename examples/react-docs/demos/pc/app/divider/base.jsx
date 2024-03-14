import { Divider } from '@opentiny/react'

function App() {
  return (
    <div className="root">
      <Divider></Divider>
      <span>分割线</span>
      <Divider direction="vertical"></Divider>
      <Divider contentPosition="left">文案</Divider>
      <Divider contentColor="#ffffff" contentBackgroundColor="#7693f5">
        文案
      </Divider>
    </div>
  )
}

export default App
