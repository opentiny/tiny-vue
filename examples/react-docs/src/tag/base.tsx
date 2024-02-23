import { Tag } from '@opentiny/react'
import Theme from './theme'
import './base.css'
import Close from './close'

function App() {
  const listeners = {
    click() {
      console.log('click')
    }
  }
  return (
    <div className="root">
      <Tag size="medium" listeners={listeners}>
        中等标签
      </Tag>
      <Tag>默认标签</Tag>

      <Tag size="small">小型标签</Tag>
      <Tag size="mini">超小标签</Tag>
      <Tag value="配置式标签"></Tag>
      <Tag color="rgba(82,196,26,0.8)" hit>
        自定义背景色
      </Tag>
      <Tag type="success" hit>
        success
      </Tag>
      <Tag type="info" hit>
        info
      </Tag>
      <Tag type="warning" hit>
        warning
      </Tag>
      <Tag type="danger" hit>
        danger
      </Tag>
      <Theme></Theme>
      <Close></Close>
    </div>
  )
}

export default App
