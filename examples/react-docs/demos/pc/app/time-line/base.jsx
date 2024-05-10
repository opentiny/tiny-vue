import { TimeLine, TimelineItem } from '@opentiny/react'
import { useState } from 'react'

function App() {
  const data = [
    { name: '已下单', time: '2019-11-11 00:01:30' },
    { name: '运输中', time: '2019-11-12 14:20:15' },
    { name: '已签收', time: '2019-11-14 20:45:50' }
  ]
  const [active, setActive] = useState(0)
  const listeners = {
    click(index) {
      setActive(() => index)
    }
  }
  const listeners2 = {
    click(index) {
      setActive(() => index)
    }
  }

  return (
    <div className="root">
      <TimeLine data={data} active={active} listeners={listeners} start={2}></TimeLine>
      <TimeLine active={active} textPosition="right" space="200px" data={[]}>
        {data.map((item, i) => (
          <TimelineItem node={item} key={i} listeners={listeners2} space={''}></TimelineItem>
        ))}
      </TimeLine>
    </div>
  )
}

export default App
