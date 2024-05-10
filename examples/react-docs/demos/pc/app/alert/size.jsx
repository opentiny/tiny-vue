import { Alert as TinyAlert } from '@opentiny/react'

function App() {
  return (
    <div>
      <TinyAlert size="normal" description="size 为 normal"></TinyAlert>
      <TinyAlert size="large" title="size 为 large"></TinyAlert>
    </div>
  )
}

export default App
