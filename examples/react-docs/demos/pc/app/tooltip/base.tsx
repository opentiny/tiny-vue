import { Tooltip } from '@opentiny/react'
import './base.css'

function App() {
  return (
    <div className="root">
      <Tooltip content="1">
        <div className="tooltip">提示框</div>
      </Tooltip>
    </div>
  )
}

export default App
