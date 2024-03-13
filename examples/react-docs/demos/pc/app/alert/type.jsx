import { Alert as TinyAlert } from '@opentiny/react'

function App() {
  return (
    <div>
      <TinyAlert description="type 为默认值 success"></TinyAlert>
      <TinyAlert type="info" description="type 为 info"></TinyAlert>
      <TinyAlert type="error" description="type 为 error"></TinyAlert>
      <TinyAlert type="success" description="type 为 success"></TinyAlert>
      <TinyAlert type="warning" description="type 为 warning"></TinyAlert>
    </div>
  )
}

export default App
