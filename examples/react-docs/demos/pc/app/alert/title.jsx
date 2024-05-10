import { Alert as TinyAlert } from '@opentiny/react'

function App() {
  return (
    <div>
      <TinyAlert size="large" title="通过属性设置自定义 title"></TinyAlert>
      <br />
      <TinyAlert
        size="large"
        slots={{
          title: () => '通过 slot 设置自定义 title'
        }}></TinyAlert>
    </div>
  )
}

export default App
