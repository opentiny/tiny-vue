import { Drawer, Button } from '@opentiny/react'
import { useState } from 'react'

function App() {
  const [visible, setVisible] = useState(false)
  const listeners = {
    click() {
      setVisible(() => true)
    }
  }
  const listeners2 = {
    close() {
      setVisible(() => false)
    }
  }
  return (
    <div className="root">
      <Button listeners={listeners}>点击</Button>
      <Drawer title="标题" visible={visible} listeners={listeners2}>
        <div>
          <br />
          <br />
          <span>内容区域</span>
        </div>
      </Drawer>
    </div>
  )
}

export default App
