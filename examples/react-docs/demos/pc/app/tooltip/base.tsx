import { Tooltip, Button } from '@opentiny/react'
import { useState } from 'react'

function App() {
  const [showStep1, setShowStep1] = useState(false)

  const listeners1 = {
    click() {
      setShowStep1((step) => !step)
    }
  }

  return (
    <div className="root">
      <Tooltip>
        <Button listeners={listeners1}>开始引导 默认位置</Button>
      </Tooltip>
    </div>
  )
}

export default App
