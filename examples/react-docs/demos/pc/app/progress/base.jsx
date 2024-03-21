import { Progress } from '@opentiny/react'

function App() {
  return (
    <div className="root">
      <Progress strokeWidth={4} percentage={4} status="success"></Progress>
      <Progress strokeWidth={24} percentage={40} textInside={true}></Progress>
    </div>
  )
}

export default App
