import { FloatButton } from '@opentiny/react'
import { IconCopy } from '@opentiny/react-icon'

function App() {
  return (
    <div className="root">
      <FloatButton>按</FloatButton>
      <FloatButton type="primary" icon={IconCopy} right="60px"></FloatButton>
    </div>
  )
}

export default App
