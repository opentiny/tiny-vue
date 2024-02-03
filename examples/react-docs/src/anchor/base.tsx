import { Anchor, Button } from '@opentiny/react'
import { useState } from 'react'
import './base.css'

function App() {
  const links = [
    {
      key: 'demonstrate',
      link: '#sec-2',
      title: '演示',
      children: [
        {
          key: 'basic-usage',
          link: '#sec-1',
          title: '基本用法'
        },
        {
          key: 'is-affix',
          link: '#sec-3',
          title: '固定模式'
        },
        {
          key: 'set-container',
          link: '#sec-3-1',
          title: '滚动容器'
        },
        {
          key: 'on-change',
          link: '#sec-3-2',
          title: 'change 事件'
        }
      ]
    },
    {
      key: 'api',
      link: '#API',
      title: 'API'
    }
  ]
  const [type, setType] = useState('dot')
  const [isAffix, setIsAffix] = useState(false)
  const listeners = {
    click: () => {
      setType((typeIt) => (typeIt === 'dot' ? 'line' : 'dot'))
      setIsAffix((isAffixIt) => !isAffixIt)
    },
    linkClick: (e) => {
      e.preventDefault()
    },
    change: () => {
      console.log('change')
    }
  }

  return (
    <div className="root">
      <div id="container" className="scroll-container">
        <div id="sec-1" className="sec-1">
          Sec 1
        </div>
        <div id="sec-2" className="sec-2">
          Sec 2
        </div>
        <div id="sec-3" className="sec-3">
          Sec 3
        </div>
        <div id="sec-3-1" className="sec-3-1">
          Sec 3-1
        </div>
        <div id="sec-3-2" className="sec-3-2">
          Sec 3-2
        </div>
      </div>
      <Button listeners={listeners}>切换type-{type} 打开/关闭固定模式</Button>
      <Anchor links={links} type={type}></Anchor>
      <Anchor links={links} isAffix={isAffix}></Anchor>
      <Anchor links={links} container-id="#container" listeners={listeners} mark-class="is-active-anchor"></Anchor>
    </div>
  )
}

export default App
